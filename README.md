# HelpMind

RESUMO

    • Uma plataforma criada para auxiliar os servidores do IFPB na identificação de discentes em sofrimento mental. Ela baseia-se nos Questionários de Beck. Tem uma ampla gama de funções além de permitir o login social com Google.
    
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
