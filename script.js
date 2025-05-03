
function toggleFAQ(index) {
  const answer = document.getElementById(`answer-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    answer.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuIconContainer = document.querySelector('.menu-icon');
  const closeIconContainer = document.querySelector('.close-icon');
  const hiddenDiv = document.querySelector('.hidden-div');

  if (menuIconContainer && closeIconContainer && hiddenDiv) {
    menuIconContainer.addEventListener('click', function() {
      hiddenDiv.style.right = '0';
      menuIconContainer.style.display = 'none';
      closeIconContainer.style.display = 'block';
    });

    closeIconContainer.addEventListener('click', function() {
      hiddenDiv.style.right = '-70%';
      closeIconContainer.style.display = 'none';
      menuIconContainer.style.display = 'block';
    });
  }
});

function toggleFAQ(faqId) {
  const answer = document.getElementById(`answer-${faqId}`);
  const icon = document.getElementById(`icon-${faqId}`);
  if (answer && icon) {
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
}