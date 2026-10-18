// Comportamentos leves, sem bibliotecas externas.
const menuButton = document.querySelector('[data-menu]'); // Localiza o botão de navegação mobile.
const mainNav = document.querySelector('.main-nav'); // Localiza os links do menu.
if (menuButton && mainNav) { // Verifica se os elementos existem.
  menuButton.addEventListener('click', () => { // Escuta o clique do menu.
    const open = mainNav.classList.toggle('is-open'); // Alterna a visibilidade.
    menuButton.setAttribute('aria-expanded', String(open)); // Informa o estado à acessibilidade.
  }); // Finaliza o evento de clique.
} // Finaliza a verificação do menu.
const tabButtons = document.querySelectorAll('[data-tab]'); // Seleciona as abas de exemplos.
const exampleTitle = document.querySelector('[data-example-title]'); // Localiza o título dinâmico.
const beforeText = document.querySelector('[data-before]'); // Localiza o texto original.
const afterText = document.querySelector('[data-after]'); // Localiza o texto revisado.
const examples = { // Define exemplos ilustrativos, não resultados de testes automatizados.
  pessoal: ['Texto pessoal', 'Eu fiz o projeto e foi muito legal, aprendi varias coisas.', 'Desenvolvi o projeto e aprendi várias coisas durante o processo.'], // Exemplo pessoal.
  profissional: ['Texto profissional', 'Estou mandando o documento para voce ver e me responder.', 'Encaminho o documento para sua análise e aguardo seu retorno.'], // Exemplo profissional.
  academico: ['Texto acadêmico', 'Os dados mostra que a ideia funciona.', 'Os dados mostram que a proposta funciona.'], // Exemplo acadêmico.
  digital: ['Conteúdo digital', 'Fiz um projeto novo, olha ai.', 'Concluí uma nova etapa do projeto e compartilho os resultados.'] // Exemplo digital.
}; // Finaliza os exemplos.
tabButtons.forEach((button) => { // Percorre as abas.
  button.addEventListener('click', () => { // Observa a seleção.
    tabButtons.forEach((tab) => tab.setAttribute('aria-selected', String(tab === button))); // Atualiza o estado de cada aba.
    const data = examples[button.dataset.tab]; // Recupera o exemplo correspondente.
    if (data && exampleTitle && beforeText && afterText) { // Verifica os elementos.
      exampleTitle.textContent = data[0]; // Atualiza o título.
      beforeText.textContent = data[1]; // Atualiza o original.
      afterText.textContent = data[2]; // Atualiza o revisado.
    } // Encerra a verificação.
  }); // Finaliza o evento.
}); // Finaliza o laço.
// Repete os cartões para que o movimento horizontal volte ao início sem saltos.
document.querySelectorAll('[data-agent-carousel]').forEach((carousel) => {
  const viewport = carousel.querySelector('.agent-carousel-window');
  const track = carousel.querySelector('.agent-grid');
  const cards = Array.from(track.children);
  if (cards.length < 2) return;

  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('data-carousel-clone', '');
    clone.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
  });
  carousel.classList.add('is-ready');

  const updateDistance = () => {
    const distance = track.children[cards.length].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
    if (distance <= 0) return;
    track.style.setProperty('--carousel-distance', `${distance}px`);
    track.style.setProperty('--carousel-duration', `${distance / 28}s`);
  };
  updateDistance();
  new ResizeObserver(updateDistance).observe(viewport);

  viewport.addEventListener('focusout', (event) => {
    if (!viewport.contains(event.relatedTarget)) viewport.scrollLeft = 0;
  });
});
