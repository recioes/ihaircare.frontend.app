<h1 align="center"> iHairCare Frontend App 💇‍♀️ </h1>

<p align="center">
O projeto "iHairCare Frontend App" é uma aplicação mobile desenvolvida em React Native que consome a API do iHairCare. O aplicativo permite que os usuários gerenciem cronogramas de cuidados capilares, criando, atualizando, listando e excluindo tratamentos diretamente da interface do celular. A aplicação está sendo desenvolvida com uma base sólida em boas práticas de design e está sendo testada localmente usando um emulador Android.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configurações">Configurações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testes-com-emulador">Testes com Emulador</a>
</p>

<br>

## 🚀 Tecnologias

<p>Esse projeto foi desenvolvido com as seguintes tecnologias:</p>

<ul>
  <li>React Native</li>
  <li>Expo CLI para desenvolvimento e execução local</li>
  <li>Axios para comunicação com a API</li>
  <li>React Navigation para gerenciamento de navegação</li>
  <li>React Native Calendars para exibição de calendários de tratamento</li>
</ul>

## 💻 Estrutura do Projeto

<p>A estrutura do projeto foi organizada de maneira modular para facilitar a manutenção e o desenvolvimento contínuo:</p>

<ul>
  <li><b>Components</b>: contém componentes reutilizáveis, como <code>AddTreatmentModal</code>, <code>CalendarComponent</code>, e <code>TreatmentList</code>.</li>
  <li><b>Screens</b>: contém as principais telas da aplicação, como <code>HomeScreen</code>, <code>AddTreatmentScreen</code>, <code>AllTreatmentsScreen</code>, e <code>TreatmentDetailsScreen</code>. Cada tela está separada por responsabilidade, facilitando o entendimento do código.</li>
  <li><b>Services</b>: contém o arquivo <code>api.js</code>, responsável pela comunicação com a API backend utilizando Axios para realizar as operações de CRUD dos cronogramas.</li>
  <li><b>Styles</b>: contém os estilos globais aplicados em todas as telas e componentes, garantindo uma UI coesa.</li>
</ul>

## ⚙️ Configurações

<ul>
  <li><b>Axios</b>: configurado no arquivo <code>services/api.js</code> para fazer requisições HTTP para o backend. A URL da API é configurável para rodar localmente ou em produção.</li>
  <li><b>React Navigation</b>: configurado para fornecer uma navegação entre as diferentes telas da aplicação, garantindo uma experiência de usuário fluida.</li>
  <li><b>React Native Calendars</b>: biblioteca utilizada para exibir o calendário de tratamentos capilares, permitindo que os usuários selecionem dias e agendem seus tratamentos.</li>
</ul>

## 🧪 Testes com Emulador

<p>O aplicativo está sendo testado localmente utilizando o <b>Android Studio</b> com um <b>emulador Android</b>. A aplicação está rodando perfeitamente no ambiente de desenvolvimento, com o frontend consumindo a API do backend localmente. As telas principais, como o calendário de cronogramas e o modal de criação de tratamentos, estão operacionais, e a comunicação com o backend está funcionando como esperado.</p>

<p>A interface está em processo de refinamento para se aproximar ao máximo do protótipo final. 
