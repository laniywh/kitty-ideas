let isAnimating = false;

function generateIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

function populateIdea() {
  const idea = document.querySelector('.idea');
  idea.textContent = generateIdea();
}

function animateArrow() {
  const arrow = document.querySelector('.arrow-img');
  arrow.classList.add('rotate-arrow');
  setTimeout(() => {
    arrow.classList.remove('rotate-arrow');
  }, 400);
}


function showNewIdea() {
  if (isAnimating) return;

  animateArrow();
  isAnimating = true;
  const ideasContainer = document.querySelector('.ideas-container');
  const oldIdea = ideasContainer.querySelector('.idea');

  // Create a new card
  const newIdea = document.createElement('div');
  newIdea.classList.add('idea', 'new-idea');
  newIdea.textContent = generateIdea();

  // Append the new card to the container
  ideasContainer.appendChild(newIdea);

  // Trigger animations
  requestAnimationFrame(() => {
    oldIdea.classList.remove('in-view');
    oldIdea.classList.add('hidden');
    newIdea.classList.remove('new-idea');
    newIdea.classList.add('in-view');
  });

  // Remove the old card after the animation completes
  oldIdea.addEventListener('transitionend', () => {
    oldIdea.remove();
    isAnimating = false;
  });
}

populateIdea();
document.getElementById("new-idea-btn").addEventListener("click", showNewIdea);
