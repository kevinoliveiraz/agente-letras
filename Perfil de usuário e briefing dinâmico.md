Perfil de usuário e briefing dinâmico

Durante a evolução do Agente Letras, surgiu um novo evolução: mesmo com regras de escrita, revisão, preservação de voz e controle de fatos, ainda existia
a possibilidade de um texto ficar genérico quando o pedido inicial não trazia todas as informações necessárias.

Uma IA comum costuma tentar preencher essas lacunas sozinha. Isso pode gerar textos aparentemente completos, mas com suposições, informações inventadas ou escolhas que não representam 
exatamente o usuário.

A solução foi adicionar duas novas camadas ao Agente Letras: o **Perfil de Usuário** e o **Briefing Dinâmico por Projeto**.

## Perfil de usuário

Foi criado um arquivo em Markdown que pode ser preenchido pela pessoa que utiliza o Agente Letras.

Esse perfil funciona como uma base reutilizável para registrar informações como:

- forma de comunicação;
- nível de formalidade;
- preferências de escrita;
- vocabulário;
- expressões que devem ser evitadas;
- características da voz do usuário;
- informações que podem ser reutilizadas;
- informações que precisam ser confirmadas;
- exemplos de textos aprovados ou rejeitados.

O perfil não substitui o pedido atual. Uma instrução dada durante o projeto sempre pode alterar ou limitar o que está registrado nele.

Também não deve ser tratado como uma memória fictícia. O agente só pode usar informações realmente disponíveis no arquivo, na conversa atual ou em outras fontes autorizadas.

## Briefing dinâmico antes da escrita

A principal mudança foi criar um processo de levantamento de informações antes de produzir um novo texto.

Quando recebe um pedido, o Agente Letras primeiro identifica o tipo de conteúdo solicitado. Pode ser, por exemplo, um e-mail, currículo, carta de apresentação, relatório, memorando,
texto acadêmico, documentação técnica, publicação para LinkedIn ou conteúdo para um site.

Depois disso, consulta as regras específicas daquele gênero e verifica quais informações são necessárias para produzir um resultado completo.

O agente compara essas necessidades com:

1. o que o usuário acabou de informar;
2. o que já foi confirmado durante a conversa;
3. o que existe no perfil do usuário;
4. as regras específicas do gênero solicitado.

A partir disso, identifica apenas as informações realmente ausentes.

## Perguntar somente o necessário

O objetivo não é transformar cada pedido em um formulário.

O Agente Letras deve fazer perguntas somente quando a ausência da informação obrigaria a:

- inventar um fato;
- assumir uma preferência;
- generalizar demais o texto;
- escolher algo importante no lugar do usuário;
- produzir um resultado que poderia mudar significativamente depois.

Quando isso acontece, ele faz perguntas curtas e específicas antes de escrever.

Por exemplo, se alguém pedir:

> Faça um memorando sobre esse problema.

Ainda pode ser necessário saber quem receberá o documento, qual é a finalidade, qual providência é esperada e se existe algum prazo.

Por outro lado, em um pedido como:

> Corrija apenas os erros gramaticais deste texto.

o próprio texto já fornece o material necessário. Nesse caso, não existe motivo para iniciar um briefing.

## Ficha de projeto

Para organizar esse processo, foi criada uma ficha interna de projeto.

Antes da redação, o agente identifica silenciosamente elementos como:

- gênero do texto;
- objetivo;
- público;
- contexto;
- fatos obrigatórios;
- informações já disponíveis;
- tom;
- formato;
- restrições;
- ação esperada do leitor;
- informações que ainda faltam.

Essa ficha não precisa ser exibida para o usuário. Ela serve como mecanismo de controle para evitar perda de contexto e decisões inconsistentes durante projetos maiores.

## Resultado esperado

Com essa mudança, o Agente Letras deixa de ser apenas uma ferramenta que recebe uma instrução e imediatamente gera um texto.

O processo passa a ser:

**pedido → identificação do gênero → análise das informações disponíveis → perguntas necessárias → escrita → autoverificação → entrega**

A intenção é que cada texto seja construído com contexto suficiente para representar corretamente a situação e o usuário, sem depender de informações inventadas ou de estruturas genéricas.

O diferencial não está em fazer mais perguntas, mas em saber **quando perguntar, o que perguntar e quando já existe informação suficiente para escrever**.
