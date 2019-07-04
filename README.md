# UCDb-frontend
Repositório para o frontend do projeto final da disciplina de projeto de software.

Controller é onde ficam os scripts que se comunicaram diretamente com o view:
-Perfil.js maneja a representação de um perfil de disciplina, com seu nome, likes, comentarios,etc.
-Rank.js é o que maneja as operações de rankLikes(para rankear por numero de likes) e rankComentarios(para rankear por
numero de Comentarios)
-buscaId.js maneja a operação de buscar um perfil de disciplina diretamente por seu id.
-buscaPorNome.js maneja a operação de buscar um perfil de disciplina pelo seu nome(ou parte desse nome), mostrando 
todas as disciplinas que possuem a substring dada em seu nome.
-login.js maneja a operação de um usuario ser autenticado, para acessar as operações que somente um usuário autenticado
pode acessar(buscaPorId,acessar um perfil,etc)
-sair.js maneja a operação de se deslogar do sistema
-sistema.js maneja a operação de cadastro de um usuário no sistema

Model é onde ficarão os scripts que serão usados para várias funções que serão utilizadas no sistema:
-RankLikes.js realiza as operações necessarias para devolver ao controller Rank.js as disciplinas ordenadas
de acordo com o que foi pedido, seja por likes ou comentarios.
-ComentarioModel.js realiza as operações relacionadas a comentarios, seja tanto remoção quanto adição de um 
comentario à um perfil de disciplina.
-curtiuModel.js realiza operações relacionadas ao número de likes de um perfil de disciplina.
-loginModel.js realiza as operações que são relacionadas ao login de um usuário.

Services é onde fica auth.js, onde se trata a atribuição de email e token de um usuario ao sessionStorage.

O periodo de validade de um token é uma hora, visto que achamos que é um tempo habil para o usuario realizar
as procuras e operações que deseja, sem ser tanto tempo ao ponto de prejudicar ao usuario.

View é onde ficaram os htmls que serão utilizados para representar o sistema para o usuario:
-Rank.html é a pagina que mostra os rankings de disciplinas, tanto por likes como por comentários, possuindo
dois botões que realizaram as operações de ranking por like e ranking por disciplina.
-buscaporNome.html é a pagina que mostra todas as disciplinas ao usuario, podendo também buscar disciplinas que
tem o nome possuindo uma substring que é dada pelo usuario, e permitindo a usuarios autenticados acesso ao perfil
de uma disciplina específica.
-buscarId.html é a pagina que redireciona o usuario autenticado a um perfil específico declarado pelo usuario a
partir do id deste perfil.
-cadastro.html é a pagina que permite ao usuario se cadastrar no sistema, mandando um email ao email cadastrado pelo
usuario
-index.html é a pagina que é mostrada a usuario ainda não logado,podendo redirecionar um usuario a pagina de cadastro,
de login, e de busca de disciplina por nome
-logado.html é a pagina que é mostrada a usuario já autenticado, podendo redirecionar o usuario a pagina de busca por nome,
e a pagina de busca por id, assim como possuindo um botão que permite ao usuario deslogar do sistema.
-login.html é a pagina que permite ao usuario logar no sistema, o redirecionando a logado.html quando
a operação de login tem sucesso.
-perfil.html é a pagina que representa um perfil de disciplina, mostrando o nome,id, numero de likes e numero de
comentarios de uma disciplina, assim como mostrando todos os comentarios de tal disciplina e permitindo o usuario a
dar e tirar seu like à disciplina, assim como inserir ou deletar um comentario.

webComponent é onde ficaram os js que serão utilizados multiplas vezes como um componente personalizado:
-Disciplinas.js é utilizado para representar cada uma das disciplinas cadastradas no sistema.
-psComentario.js é utilizado para representar cada comentário de um perfil de disciplina específico.
-psDisciplinas.js é utilizado para representar o que permite um usuário ir a um perfil, se estiver autenticado.

