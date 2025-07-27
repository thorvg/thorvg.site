// Apply shadow to right navigation menu when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const threshold = 100;
        if (window.scrollY > threshold) {
            toc.classList.add('scrolled');
        } else {
            toc.classList.remove('scrolled');
        }
    });
});

// Animation and clipboard copy when copy button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const snippets = document.querySelectorAll(".code-block");

  snippets.forEach((snippet) => {
      const button = snippet.querySelector(".copy-button");
      const code = snippet.querySelector(".code-content");
      const copyIcon = snippet.querySelector(".copy-icon");
      const doneIcon = snippet.querySelector(".done-icon");

      button.addEventListener("click", () => {
      const codeText = code.textContent.trim();

      navigator.clipboard.writeText(codeText).then(() => {
          // Switch icons
          copyIcon.classList.remove("active");
          doneIcon.classList.add("active");

          // Recovery after a period of time
          setTimeout(() => {
          doneIcon.classList.remove("active");
          copyIcon.classList.add("active");
          }, 700);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toTopBtn = document.getElementById("to-top-btn");

  // Move smoothly to the top of the page when scrolling
  toTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Change background color by checking if button and footer overlap
  function checkOverlapWithFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const footerRect = footer.getBoundingClientRect();
    const btnRect = toTopBtn.getBoundingClientRect();

    // When the button and footer overlap vertically
    const isOverlapping =
      btnRect.bottom > footerRect.top && btnRect.top < footerRect.bottom;

    if (isOverlapping) {
      // Change to inverse color
      toTopBtn.style.backgroundColor = "#ffffff";
      toTopBtn.style.color = "#000000";
    } else {
      // Initialize to original color
      toTopBtn.style.backgroundColor = "";
      toTopBtn.style.color = "";
    }
  }

  // Check whether the button is visible and whether the toggle + footer overlaps
  function toggleToTopBtn() {
    const isMobile = true; // window.innerWidth <= 1024;
    const hasScrolled = window.scrollY > 200;

    if (isMobile) {
      if (hasScrolled) {
        toTopBtn.style.opacity = "1";
        toTopBtn.style.visibility = "visible";
        toTopBtn.style.pointerEvents = "auto";
      } else {
        toTopBtn.style.opacity = "0";
        toTopBtn.style.visibility = "hidden";
        toTopBtn.style.pointerEvents = "none";
      }
    } else {
      // 데스크탑에서는 버튼 비활성화
      toTopBtn.style.opacity = "0";
      toTopBtn.style.visibility = "hidden";
      toTopBtn.style.pointerEvents = "none";
    }

    // Check if the button and footer overlap
    checkOverlapWithFooter();
  }

  // Initial launch and event registration
  toggleToTopBtn();
  window.addEventListener("scroll", toggleToTopBtn);
  window.addEventListener("resize", toggleToTopBtn);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const menuIcon = toggleButton.querySelector('.menu-icon');
  const menuDrawer = document.querySelector('.menu-drawer');

  let isOpen = false;

  toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;

    // Change icon image
    menuIcon.src = isOpen ? 'icon/close.svg' : 'icon/menu.svg';
    menuIcon.alt = isOpen ? 'Close menu' : 'Menu';

    // Toggle menu drawer
    if (isOpen) {
      menuDrawer.classList.add('open');
    } else {
      menuDrawer.classList.remove('open');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".fade-in-and-move-up-on-load");
  container.classList.add("show");
});

document.addEventListener("DOMContentLoaded", function () {
  requestAnimationFrame(() => {
    document.querySelectorAll(".fade-in-on-load").forEach(el => {
      el.classList.add("show");
    });
  });
});