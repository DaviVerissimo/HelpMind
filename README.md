# HelpMind

RESUMO

    • Este trabalho objetivou apoiar os profissionais de saúde do IFPB no tratamento
dos dados para acolhimento e identificação de discentes no âmbito de saúde mental,
nos diversos campus da instituição. Verificou-se o esforço desses profissionais de
saúde nesse sentido, visto que nem todos eles se sentiam à vontade ou preparados
para auxiliar em temáticas de saúde mental no ambiente escolar. Foi constatada a
ausência de um instrumento prático norteador, em que cada campus poderia
manejar questões de saúde mental de forma diferente. Este trabalho se propôs a
disponibilizar uma forma padronizada para caracterizar informações dos discentes
com algum nível de sofrimento mental, de forma qualitativa e quantitativa,
considerando uma encomenda de software gerada a partir de um trabalho de
mestrado desenvolvido no Programa de Pós-Graduação em Educação Profissional e
Tecnológica (PROFEPT) do IFPB. Nesse sentido, foi projetada e desenvolvida uma
aplicação web, o Helpmind, considerando boas práticas de concepção de software,
a partir de uma arquitetura multicamadas, com um back-end Spring Boot sob uma
API de serviços REST e front-end sob o framework React.js, com acesso à lógica da
aplicação via Axios.
    
    • Veja aqui um Tour da aplicação
    • https://www.youtube.com/watch?v=lhuR0um6Tes&list=PLFGsc3-B0r48Dt5OpzXEFcflVr7cAC0Yg

TIPOS DE USUÁRIO 

    • Usuário visitante: Usuário que ainda não realizou login na aplicação.
    
    • Discente: Usuário  que realizou login na aplicação e tem seu e-mail no formato “nome@academico.ifpb.edu.br”.

    • Servidor: Usuário  que realizou login na aplicação e tem seu e-mail no formato “nome@ifpb.edu.br”.

    • Profissional de saúde; Servidor que recebeu permissão de acesso especial como “Profissional de saúde” por parte do Admin.

    • Psicólogo; Servidor que recebeu permissão de acesso especial como “Psicólogo” por parte do Admin.

    • Admin: Administrador do sistema que tem seu e-mail definido no  backend como capaz de executar funções administrativas.

FUNCIONALIDADES

    • Criação de novos usuários: a aplicação permite a criação de novos usuários, incluindo discentes e servidores, A criação é realizada de forma automática no primeiro acesso através do GoogleId associado a conta do visitante.

    • Login social através do GoogleId associado a conta do visitante caso pertença ao domínio IFPB. Discentes e servidores tem acesso a funções diferentes

FUNCIONALIDADES PUBLICAS (NÃO PRECISA DE LOGIN)

    • Consultar materiais de apoio e fazer download dos mesmo. 

FUNCIONALIDADES DO DISCENTE

    • Cria novo reporte: Um discente pode reportar outro discente que julgue esta em vulnerabilidade emocional. Isto inclui as seguintes informações do reportado: nome, curso, campus, período, se já tentou suicídio e uma descrição. Além de enviar automaticamente o Id de usuário do reportante. Isto serve como um alerta para que profissionais de saúde procurem este discente reportado.

    • Listar e visualizar todos os reportes que este discente realizou.

    • Cria novo Questionário de Ansiedade de Beck: Um discente pode criar um novo  Questionário de Ansiedade de Beck, isto é, Consiste em um grupo de 21 questões preenchidas e enviadas pelo discente, que medem o nível de ansiedade do discente. O resultado só é visível para profissionais de saúde.

    • Cria novo Questionário de Depressão de Beck: Um discente pode criar um novo  Questionário de Depressão de Beck, isto é, Consiste em um grupo de 21 questões preenchidas e enviadas pelo discente, que medem o nível de Depressão do discente. O resultado só é visível para profissionais de saúde.

    • Cria novo Questionário Socioeconômico: Um discente pode criar um novo  Questionário Socioeconômico, isto é, Consiste em um grupo de questões sobre diversos temas, preenchidas e enviadas pelo discente, O resultado só é visível para profissionais de saúde.
    • Consultar contatos de servidores: Lista para contato de alguns servidores. Pode incluir nome, e-mail, telefone e campus do servidor.

FUNCIONALIDADES DO SERVIDOR

    • Cria novo reporte: Igualzinho a funcionalidade de discente apenas trocando discente reportante para servidor reportante.

    • Listar e visualizar todos os reportes realizados por discentes e servidores.

FUNCIONALIDADES DO SERVIDOR – ENQUANTO PROFISSIONAL DE SAÚDE 

    • Cria novo reporte: Igualzinho a funcionalidade de discente apenas trocando discente reportante para servidor reportante.

    • Listar e visualizar todos os reportes realizados por discentes e servidores.

    • Listar todos os discentes cadastrados no sistema.
    
    • Visualizar perfil com informações detalhadas de cada discente. Isso pode incluir nome, e-mail, matricula, media de ansiedade e media de depressão.

    • Listar e visualizar todos os Questionários de Ansiedade de Beck preenchidos pelos discentes.

    • Listar e visualizar todos os Questionários de Depressão de Beck preenchidos pelos discentes.

    • Listar e visualizar todos os Questionários Socioeconomismos preenchidos pelos discentes.

    • Trocar mensagens com outros servidores

    • Visualizar gráficos e relatorios sobre ansiedade e depressão e reportes.

    • Criar prontuários para discente: Prontuários são informações  que o profissional de saúde  julgar relevantes para o acompanhamento do discente. Pode incluir nome, campus, curso, período, parecer do profissional de saúde e ação realizada que indica se o discente foi intruido a procurar o psicólogo do campus ou a rede externa.
    
    • Listar e visualizar todos os prontuários já criados.

    • Listar e visualizar pareceres psicológicos.  

    • Consultar estatísticas sobre os discentes.

FUNCIONALIDADES DO SERVIDOR – ENQUANTO PSICÓLOGO

    • As mesmas de profissional de saúde excerto criar, listar e visualizar prontuários.

    • Criar parecer psicológico:Pareceres psicológicos são feedbacks que o psicologo dá após fazer uma consulta com o discente.

    • Pode incluir  nome, e-mail e parecer do psicologo.
    
FUNCIONALIDADES DO SERVIDOR – ENQUANTO ADMIN  

    • As mesmas de profissional de saúde.
     
    • Criar, listar, visualizar e excluir prontuários.
    
    • Listar, visualizar e excluir parecer psicológico.
    
    • Criar, listar e excluir materiais de apoio.
    
    • Criar, listar, editar e excluir contatos.
    
    • Conceder  ou remover de um servidor permissão de acesso especial como profissional de saúde.
    
    • Conceder  ou remover de um servidor permissão de acesso especial como psicólogo.

## Íniciar e configurar o HelpMind

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
  - [Configuração do Google OAuth](#configuração-do-google-oauth)
  - [Configuração do Backend](#configuração-do-backend)
  - [Configuração do Frontend](#configuração-do-frontend)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [JDK 11+](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Node.js 14+](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Maven](https://maven.apache.org/) ou use uma IDE como o Eclipse https://www.eclipse.org/downloads/
- [Git](https://git-scm.com/)

## Instalação

Passos para instalar o projeto localmente.

### Backend (Spring Boot)

1. Clone o repositório:
    ```sh
    git clone https://github.com/DaviVerissimo/HelpMind
    ```

2. Navegue até o diretório do backend:
    ```sh
    cd nome-do-projeto/backend
    ```

3. Configure o banco de dados MySQL:
    - Crie um banco de dados chamado `helpmindbd`.
    - Atualize as credenciais do banco de dados no arquivo `application.properties`.

4. Instale as dependências e compile o projeto:
    ```sh
    mvn clean install
    ```

5. Execute o projeto:
    ```sh
    mvn spring-boot:run
    ```

### Frontend (React)

1. Navegue até o diretório do frontend:
    ```sh
    cd nome-do-projeto/frontend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Execute o projeto:
    ```sh
    npm start
    ```

## Configuração

### Configuração do Google OAuth

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. No menu lateral, acesse "APIs e serviços" > "Credenciais".
4. Clique em "Criar credenciais" e selecione "ID do Cliente OAuth".
5. Configure a tela de consentimento OAuth se ainda não estiver configurada:
    - Preencha os campos obrigatórios, como nome do aplicativo e informações de contato.
    - Adicione escopos necessários (como perfil, email).
6. Em "Tipos de aplicação", selecione "Aplicativo da Web".
7. Adicione os URIs de redirecionamento autorizados:
    - `http://localhost:8080/login/oauth2/code/google` (para desenvolvimento local)
8. Clique em "Criar" e copie o `client ID` e `client secret`.

### Configuração do Backend

1. Crie um arquivo de configuração local para desenvolvimento.

    ```sh
    cp src/main/resources/application.properties src/main/resources/application-dev.properties
    ```

2. Edite o arquivo `application.properties` com suas configurações:

    ```properties
    #ARQUIVO APENAS PARA DESENVOLVIMENTO
    spring.servlet.multipart.max-file-size=1024MB
    spring.servlet.multipart.max-request-size=1024MB
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
    spring.jpa.show-sql=true
    spring.jpa.hibernate.ddl-auto = update
    spring.datasource.url=jdbc:mysql://localhost:3306/helpmindbd?&createDatabaseIfNotExist=true&serverTimezone=America/Sao_Paulo
    spring.datasource.username=USUÁRIO DO BANCO
    spring.datasource.password=SENHA DO BANCO
    spring.jackson.deserialization.fail-on-unknown-properties=true
    config.frontend.uri=http://localhost:3000
    spring.security.oauth2.client.registration.google.client-id=SEU_CLIENT_ID
    spring.security.oauth2.client.registration.google.client-secret=SEU_CLIENT_SECRET
    spring.security.oauth2.client.registration.google.redirect-uri={baseUrl}/login/oauth2/code/{registrationId}
    spring.security.oauth2.client.provider.google.authorization-uri=https://accounts.google.com/o/oauth2/auth
    spring.security.oauth2.client.provider.google.token-uri=https://accounts.google.com/o/oauth2/token
    spring.security.oauth2.client.provider.google.user-info-uri=https://www.googleapis.com/oauth2/v3/userinfo
    spring.security.oauth2.client.provider.google.user-name-attribute=name
    spring.security.oauth2.resourceserver.jwt.issuer-uri=https://accounts.google.com
    ```


### Versão do node utilizada
12.22.9

### Configuração do Login
Para configurar o ID do cliente do Google no seu código React, você precisa substituir o valor client_id pelo seu próprio client_id obtido no Google Cloud Console no arquivo frontend/src/pages/Publica/Login/index.js

![alt text](<Captura de tela de 2024-07-05 21-35-07.png>)

## Uso

Como usar o projeto depois de configurado.

1. Inicie o servidor backend:
    ```sh
    cd backend
    mvn spring-boot:run
    ```
    Certifique-se de que o backend está rodando em `http://localhost:8080`.

2. Inicie o servidor frontend:
    ```sh
    cd frontend
    npm start
    ```

3. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## Contribuição

1. Desenvolvedor (`Israel Davi Travassos Veríssimo`)


## Licença

Informações sobre a licença do projeto.

