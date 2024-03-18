import 'dotenv/config'
import debug from 'debug'

const logger = debug('core')

const delays = [...Array(50)].map(() => Math.floor(Math.random() * 900) + 100)
const load = delays.map(
  (delay) => async (): Promise<number> =>
    await new Promise((resolve) => {
      setTimeout(() => { resolve(Math.floor(delay / 100)) }, delay)
    })
)

type Task = () => Promise<number>

// Função throttle
const throttle = async (workers: number, tasks: Task[]): Promise<number[]> => {
  const results: number[] = [] // Array de resultados
  const nextTask: Array<Promise<void>> = [] // Array de tarefas em execução

  for (const task of tasks) {
    // Executa a task
    const taskPromise = (async () => {
      results.push(await task())

      await waitNextTask() // Espera a próxima task
    })()
    nextTask.push(taskPromise) // Adiciona a task ao array
  }

  // Otimiza para que os workers não fiquem parados esperando o outro processar
  if (nextTask.length >= workers) {
    await Promise.race(nextTask)
  }

  // all tasks executed
  await Promise.all(nextTask)

  return results
}

// Função para aguardar a próxima task
const waitNextTask = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 0))
}

const bootstrap = async (): Promise<void> => {
  logger('Starting...')
  const start = Date.now()
  const answers = await throttle(5, load)
  logger('Done in %dms', Date.now() - start)
  logger('Answers: %O', answers)
}

bootstrap().catch((err) => {
  logger('General fail: %O', err)
})
