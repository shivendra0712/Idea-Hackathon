
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
