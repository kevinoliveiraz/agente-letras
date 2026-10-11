# Agente Letras — Técnico e Didático

O **Agente Letras — Técnico e Didático** é uma especialização do projeto Agente Letras voltada à criação, reescrita e revisão de documentação e explicações técnicas ou didáticas, com sequência clara, precisão e adequação ao público.

Ele funciona como uma camada adicional de direcionamento para uma IA, oferecendo regras, referências e processos específicos para esse tipo de escrita.

## Onde pode ser usado

Esta versão é direcionada principalmente para:

- manuais;
- procedimentos;
- documentação;
- tutoriais;
- passo a passo e instruções;
- explicações técnicas ou didáticas.

O agente pode trabalhar tanto a partir de uma ideia ou conjunto de informações quanto sobre um texto já escrito.

Dependendo do pedido, ele pode criar uma primeira versão, reorganizar informações, corrigir problemas linguísticos, adaptar o texto ao canal ou revisar um conteúdo existente.

## Como funciona

O agente recebe o pedido e o contexto fornecido pelo usuário e utiliza os arquivos de referência incluídos na habilidade para orientar a resposta.

Durante esse processo, busca:

- identificar o objetivo, o público e o contexto do texto;
- adaptar estrutura, tom e formato;
- preservar os fatos fornecidos;
- não atribuir ao usuário informações, experiências ou opiniões que ele não apresentou;
- diferenciar correção gramatical de escolha estilística;
- preservar a identidade do texto sempre que possível;
- revisar o resultado antes da entrega.

Na escrita técnica e didática, o agente busca apresentar informações e instruções em uma sequência clara, com precisão e um nível de explicação adequado ao conhecimento do público.

O Agente Letras não é uma IA independente. Ele foi desenvolvido para funcionar como uma estrutura de orientação utilizada por uma IA compatível.

## Estrutura

O arquivo principal da habilidade é:

```text
SKILL.md
```

As regras e conhecimentos complementares ficam em:

```text
references/
```

O `SKILL.md` define o comportamento principal do agente e indica quais referências devem ser consultadas durante cada tarefa.

## Instalando a habilidade

Ao utilizar uma plataforma compatível com habilidades em arquivo, envie o ZIP do **Agente Letras — Técnico e Didático**.

[Baixar agente-letras-tecnico.zip](agente-letras-tecnico.zip)

O `SKILL.md` precisa estar na raiz do ZIP.

Estrutura correta:

```text
agente-letras-tecnico.zip
├── SKILL.md
├── references/
└── ...
```

Evite criar uma pasta duplicada:

```text
agente-letras-tecnico.zip
└── agente-letras-tecnico/
    └── agente-letras-tecnico/
        └── SKILL.md
```

Algumas plataformas podem rejeitar a habilidade quando o `SKILL.md` está em níveis adicionais de pastas.

## Referência gramatical

O agente acompanha uma base gramatical própria em Markdown para permitir sua distribuição sem depender da inclusão de uma obra gramatical protegida por direitos autorais.

Entretanto, essa referência pode ser complementada ou substituída por outra gramática escolhida pelo usuário.

Isso permite adaptar o agente a diferentes referências gramaticais sem modificar toda a estrutura do projeto.

### Adicionando sua própria gramática

Caso queira utilizar outra gramática como referência:

1. Obtenha legalmente o PDF da gramática que deseja utilizar.
2. Envie para uma IA:
   - o `SKILL.md` do Agente Letras;
   - o `gramatica.md`;
   - o PDF da gramática escolhida.
3. Peça para a IA atualizar o `gramatica.md` com os conhecimentos e critérios necessários da nova referência, **sem copiar ou reproduzir indevidamente o conteúdo protegido da obra**.
4. Peça também para atualizar o `SKILL.md` caso os caminhos, nomes dos arquivos ou instruções de consulta tenham mudado.
5. Revise os arquivos gerados.
6. Substitua os arquivos antigos pelas versões atualizadas.
7. Monte novamente o ZIP da habilidade.



## Gramática recomendada

A referência recomendada para aprofundamento gramatical é:

**Evanildo Bechara — _Moderna Gramática Portuguesa_.**

A recomendação não significa que essa obra seja obrigatória. O usuário pode utilizar outra gramática de sua preferência e adaptar a base do agente pelo procedimento descrito acima.

A obra de Bechara **não acompanha o repositório nem os ZIPs públicos** do Agente Letras. Cada usuário é responsável por obter legalmente as referências externas que decidir utilizar.

## Limites

O agente auxilia o processo de escrita, mas não substitui a avaliação do usuário.

O resultado pode estar praticamente pronto ou funcionar como uma primeira versão que ainda receberá alterações. A qualidade também depende das informações e do contexto fornecidos.

Uma referência gramatical mais completa pode ampliar o material disponível para consulta, mas não elimina a necessidade de avaliar casos ambíguos, controversos ou dependentes de contexto.

## Projeto Agente Letras

O **Agente Letras — Técnico e Didático** faz parte de uma família de agentes especializados.

Cada agente concentra regras e referências adequadas a um tipo de escrita, em vez de reunir todas as funções em uma única configuração generalista.

Esta especialização concentra-se em documentação e escrita técnica e didática.

## Licença

O código, as configurações e os materiais originais distribuídos pelo projeto seguem a licença definida no repositório principal do **Agente Letras**.

Obras externas utilizadas como referência, incluindo gramáticas comerciais, permanecem sujeitas aos direitos autorais e às licenças de seus respectivos autores e editoras.
