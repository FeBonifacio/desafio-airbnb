<h1>Este codigo é um sistema de throttle de execucao de funcoes assincronas</h1>
<h2>Objetivo deste teste:</h2>
<ul>
  <li>Avaliar o conhecimento de typescript</li>
  <li>Avaliar o conhecimento de async/await (processamento concorrente)</li>
  <li>Logica de programacao e processamento de dados</li>
</ul>
<br/><br/>
<h2>Requisitos:</h2>
<ul>
  <li>Configure o typescript no seu projetot</li>
  <li>Configure o eslint com o pattern airbnb</li>
  <li>Utilize o prettier (utilize um tabWidth de 4 espacos)</li>
  <li>Utilize o padrao do commitlint para commits (https://www.conventionalcommits.org/en/v1.0.0/)</li>
  <li>Versione o seus codigos a cada commit utilizando o husky (com pre-commit)</li>
</ul>
<br/><br/>
<h2>Regras do programa:</h2>
<u>
  <li>Voce possue um array com 50 posicoes chamado `load`, que sao funcoes assincronas que simulam uma carga de trabalho, atraves de um delay</li>
  <li>Voce deve executar TODAS as cargas de trabalho (nenhuma deve deixar de ser executada)</li>
  <li>Cada worker (posicoes de execucao em paralelo) so deve executar uma tarefa por vez</li>
  <li>Voce deve otimizar ao maximo, para que os workers nao fiquem parados (esperando o outro processar)</li>
</u>
