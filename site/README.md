# Agente Letras — site estático v2

Projeto independente em HTML, CSS e JavaScript. Não contém arquivos nem código do Praxis.

## Como executar sem conflitos com outros projetos

1. Extraia este ZIP em uma **nova pasta**, fora da pasta do Praxis.
2. Abra **somente** `agente-letras-site-v2` no VS Code (Arquivo > Abrir Pasta).
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. Se outra página aparecer, pare **todas** as instâncias antigas do Live Server. Confira também `.vscode/settings.json` de outros projetos, extensões e portas em uso.
5. Alternativamente, abra `index.html` diretamente no navegador; o site é estático.

O projeto **não inclui** pasta `.vscode` nem define porta, raiz do servidor ou redirecionamentos.

## Páginas

Início, Sobre, Recursos, Exemplos, Download, Documentação, FAQ, Contribuir e 404.

## Assets

- `assets/img/brand/`: pack de logos PNG recortado da referência fornecida; os recortes podem conter imperfeições.
- `assets/img/`: ícones SVG e ilustrações vetoriais auxiliares.
- `css/style.css`: estilos compartilhados e responsividade.
- `js/main.js`: navegação mobile, abas e mensagens de download indisponível.

## Antes de publicar

- Substituir os links genéricos `https://github.com/` pelo repositório real.
- Publicar ZIPs em GitHub Releases antes de ativar os downloads.
- Conferir a lista de agentes, documentação e textos com a versão oficial do projeto.
- Validar fidelidade visual: as ilustrações SVG são aproximações, não reproduções exatas dos mockups.

## Comentários

O HTML contém comentários por linha estrutural; CSS e JavaScript têm comentários explicativos junto às regras e instruções.
