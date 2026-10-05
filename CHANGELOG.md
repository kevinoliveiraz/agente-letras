# Changelog

Este arquivo registra as principais etapas e mudanças do Agente Letras, desde sua origem até as versões atuais.

O projeto não possuía um sistema formal de versionamento durante suas primeiras etapas. Por isso, o histórico abaixo utiliza as datas e os marcos registrados durante seu desenvolvimento, sem atribuir números de versão retroativamente.

---

## 04/10/2026 — Início da arquitetura com agentes especializados

O Agente Letras começou uma nova etapa de desenvolvimento baseada na divisão do projeto em agentes especializados por tipo de escrita.

A mudança surgiu a partir de uma sugestão de Giovanna Dias, responsável pela criação do Agente LinkedIn e sua participação linguística do projeto. A proposta foi reduzir a concentração de regras, referências e comportamentos diferentes em um único agente, tornando cada configuração mais focada em sua função.

A expectativa dessa arquitetura é reduzir conflitos entre instruções, travamentos e alucinações, além de melhorar o direcionamento oferecido pela IA. Como os agentes especializados começaram a ser criados nesta data, esses efeitos ainda estão sendo avaliados por meio do uso e de testes práticos.

### Nova organização

O projeto passa a ser desenvolvido como uma família de agentes especializados. Todos pertencem ao Agente Letras, mas cada agente possui configuração própria e deve ser utilizado separadamente.

Foram criadas especializações para:

- escrita formal;
- escrita informal;
- escrita profissional;
- escrita acadêmica e ABNT;
- escrita técnica e didática;
- escrita argumentativa;
- escrita criativa e literária;
- conteúdo digital.

A separação permite que cada agente trabalhe com regras, referências e processos mais adequados ao seu tipo de escrita, em vez de concentrar todas as funções em uma única configuração generalista.

### Forma de uso

O usuário escolhe o agente de acordo com o tipo de texto que pretende produzir e fornece à IA o objetivo, as informações e o contexto disponíveis.

O Agente Letras funciona como uma camada adicional de direcionamento para a IA. Dependendo da tarefa e da plataforma utilizada, ele pode:

- ajudar a transformar ideias e informações em uma primeira versão;
- estruturar um texto;
- revisar ou corrigir um texto existente;
- adaptar a escrita ao gênero e ao contexto;
- fornecer uma base que o usuário pode continuar editando;
- produzir um resultado próximo do desejado, que exija apenas pequenos ajustes.

O projeto não parte da ideia de substituir o conhecimento, a decisão ou a revisão do usuário. A pessoa continua responsável por fornecer contexto suficiente, avaliar o resultado e decidir o que será utilizado.

### Desenvolvimento e publicação

Os agentes serão testados gradualmente em situações reais antes e durante sua publicação. Por isso, nem todas as especializações devem ser consideradas igualmente validadas neste momento.

Cada agente será disponibilizado individualmente dentro do mesmo repositório do Agente Letras, permitindo que o usuário utilize apenas a especialização de que precisa.

O **Agente Letras — Conteúdo Digital** é o primeiro agente dessa nova arquitetura utilizado em uma situação real, inicialmente na produção de conteúdo para LinkedIn.

A versão generalista anterior permanece registrada no histórico do projeto enquanto a utilidade dos novos agentes especializados é avaliada.

---

## [Não lançado] — Versão multiplataforma

A versão multiplataforma do Agente Letras está atualmente em desenvolvimento e testes.

O objetivo desta versão é permitir que o Agente Letras seja utilizado também em IAs e modalidades de acesso que não oferecem sistemas próprios de agentes ou skills personalizados.

### Adicionado

- Estrutura preparada para utilização do Agente Letras a partir de seus próprios arquivos.
- Possibilidade de fornecer o pacote do Agente Letras diretamente à IA e utilizá-lo como contexto e conjunto de instruções.
- Suporte a referências gramaticais configuráveis pelo usuário.
- Possibilidade de utilizar outras referências gramaticais além da recomendada pelo projeto.

### Alterado

- O Agente Letras deixou de depender de um sistema específico de agentes para ser utilizado.
- Evanildo Bechara continua como referência gramatical recomendada, mas não é mais uma referência fixa: o usuário pode configurar outra obra adequada.
- Uma referência gramatical externa continua sendo parte necessária da configuração do agente.

### Mantido

A versão multiplataforma não altera a proposta linguística central do Agente Letras. As mudanças desta etapa estão concentradas principalmente na portabilidade e na forma de utilização do projeto.

---

## 17/08/2026 — Primeira versão oficial do Agente Letras

Depois de utilizar o Agente LinkedIn em outros contextos, principalmente para organizar READMEs e anotações em Markdown, percebi que sua estrutura funcionava bem além de publicações para LinkedIn.

Eu conseguia fornecer materiais ainda desorganizados, com erros ortográficos, informações fora de ordem e apenas o contexto necessário. O agente reorganizava o conteúdo e facilitava o trabalho sem eliminar a essência e a identidade do texto.

A partir dessa experiência, escrevi uma especificação para transformar essa ideia em um agente voltado a diferentes tipos de produção textual.

Usei a estrutura do Agente LinkedIn como uma das bases para desenvolver o Agente Letras.

O nome **Agente Letras** foi escolhido também como uma homenagem à Giovanna Dias, letrista responsável pela criação do Agente LinkedIn e colaboradora na construção linguística desta nova estrutura.

### Adicionado

- Suporte a diferentes tipos de texto, deixando de limitar o projeto a publicações para LinkedIn.
- Criação de textos a partir das ideias fornecidas pelo usuário.
- Reescrita e revisão de textos existentes.
- Correção de gramática, ortografia, pontuação, clareza e organização.
- Adaptação do conteúdo para diferentes públicos, situações e níveis de formalidade.
- Preservação da identidade, intenção e forma de pensar do usuário.
- Regras para evitar que informações, experiências, opiniões, resultados, habilidades ou sentimentos sejam inventados.
- Orientação para não transformar interpretações plausíveis da IA em fatos atribuídos ao usuário.
- Perguntas de contexto quando informações importantes estiverem ausentes.
- Aproveitamento do contexto já fornecido durante a conversa para evitar perguntas desnecessárias.
- Adequação ao gênero textual e ao canal em que o conteúdo será utilizado.
- Critérios de naturalidade, clareza, coerência, coesão, ritmo e organização.
- Mecanismos de autoverificação do texto produzido.
- Uso de referência gramatical para apoiar as decisões linguísticas do agente.
- Evanildo Bechara, por meio da *Moderna Gramática Portuguesa*, como referência gramatical recomendada.

### Testes

A primeira versão foi testada com diferentes tipos de texto e contextos.

Os testes também compararam resultados produzidos com e sem o Agente Letras.

Um dos comportamentos que mais se destacou foi o controle sobre informações acrescentadas ao texto. Enquanto uma IA sem o agente podia complementar o conteúdo com interpretações plausíveis não declaradas pelo usuário, o Agente Letras apresentou maior cuidado para trabalhar dentro das informações fornecidas.

Também foram realizados testes envolvendo:

- posts;
- READMEs e arquivos Markdown;
- revisão textual;
- organização de informações desestruturadas;
- correção gramatical;
- preservação da identidade do usuário;
- solicitação de contexto antes da escrita quando necessário.

Os testes mostraram também que o ganho não é igual em todas as tarefas. Em atividades que uma IA já consegue executar diretamente com facilidade, o Agente Letras pode produzir uma diferença menor. Seu comportamento se mostrou especialmente útil em tarefas que exigem controle factual, contexto, organização e preservação da identidade do autor.

### Colaboração linguística

Giovanna Dias participou da revisão linguística da primeira versão do Agente Letras.

Sua contribuição incluiu:

- revisão da especificação inicial;
- avaliação da estrutura sob a perspectiva da língua portuguesa;
- identificação de critérios linguísticos e textuais que poderiam ser acrescentados;
- revisão dos textos produzidos pelo agente;
- comparação entre resultados produzidos com e sem o Agente Letras;
- orientação sobre o uso de uma referência gramatical;
- introdução da *Moderna Gramática Portuguesa*, de Evanildo Bechara, como referência recomendada.

A primeira versão foi utilizada inicialmente no Claude e posteriormente no ChatGPT. A mudança ocorreu por preferência de uso e não por uma limitação identificada no funcionamento do agente.

---

## 09/08/2026 — Agente LinkedIn

Antes do Agente Letras, Giovanna Dias criou o **Agente LinkedIn**, uma estrutura especializada em auxiliar na produção de publicações para LinkedIn.

O agente foi criado, estruturado e testado por Giovanna antes de ser disponibilizado para meu uso.

### Características

- Organização de textos para LinkedIn.
- Preservação da essência e da identidade do autor.
- Linguagem adequada ao contexto de início de carreira.
- Regras de escrita e organização textual.
- Controle sobre informações não fornecidas.
- Estrutura de autoverificação.

Comecei a utilizar o agente e percebi que sua organização também funcionava em tarefas para as quais ele não havia sido originalmente criado.

Passei a utilizá-lo, sem modificar sua estrutura, para organizar principalmente READMEs e anotações de GitHub em Markdown. O contexto necessário era fornecido diretamente durante a conversa.

Esses usos mostraram que os princípios da estrutura poderiam ser aplicados a uma ferramenta de escrita com escopo mais amplo e contribuíram diretamente para a criação do Agente Letras em 17/08/2026.

---

## Antes de 09/08/2026 — Origem da ideia

Antes da existência do Agente LinkedIn e do Agente Letras, eu já utilizava prompts escritos no momento da conversa para controlar alguns comportamentos das IAs durante a produção de textos.

Esses prompts buscavam principalmente:

- evitar uma escrita formal ou técnica demais quando isso não representava minha maneira de escrever;
- reduzir padrões de escrita que eu não utilizava naturalmente;
- produzir textos mais próximos da minha forma de comunicação.

Esses prompts não foram preservados, não possuíam uma estrutura fixa e não constituem uma versão anterior do Agente Letras.

Eles representam apenas a origem do problema que, posteriormente, levaria à busca por uma solução mais estruturada.