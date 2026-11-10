const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const yearLabel = document.querySelector("#current-year");

if (yearLabel) {
  yearLabel.textContent = String(new Date().getFullYear());
}

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    primaryNav.classList.toggle("is-open", isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

const filters = [...document.querySelectorAll("[data-filter]")];
const articles = [...document.querySelectorAll("[data-category]")];
const articleSearch = document.querySelector("#article-search");
let activeCategory = "all";

const updateArticles = () => {
  const searchTerm = articleSearch instanceof HTMLInputElement
    ? articleSearch.value.trim().toLocaleLowerCase()
    : "";
  let visibleCount = 0;

  articles.forEach((article) => {
    const categoryMatches = activeCategory === "all" || article.dataset.category === activeCategory;
    const searchMatches = !searchTerm || article.textContent.toLocaleLowerCase().includes(searchTerm);
    article.hidden = !categoryMatches || !searchMatches;
    if (!article.hidden) {
      visibleCount += 1;
    }
  });

  const emptyState = document.querySelector(".article-empty");
  if (emptyState instanceof HTMLElement) {
    emptyState.hidden = visibleCount > 0;
  }
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter || "all";
    filters.forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });
    updateArticles();
  });
});

articleSearch?.addEventListener("input", updateArticles);

const contactForm = document.querySelector("#contact-form");

if (contactForm instanceof HTMLFormElement) {
  const status = contactForm.querySelector(".form-status");
  const requiredFields = [...contactForm.querySelectorAll("input[required], textarea[required], select[required]")];

  const getFieldError = (field) => {
    if (field instanceof HTMLInputElement && field.type === "checkbox" && !field.checked) {
      return "Please confirm this notice before continuing.";
    }
    const value = field.value.trim();
    if (!value) {
      return "This field is required.";
    }
    if (!field.validity.valid) {
      if (field.type === "email") {
        return "Enter a valid email address.";
      }
      if ((field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.validity.tooShort) {
        return `Enter at least ${field.minLength} characters.`;
      }
      return "Check the value entered.";
    }
    return "";
  };

  requiredFields.forEach((field) => {
    const clearError = () => {
      const error = field.parentElement.querySelector(".field-error");
      field.removeAttribute("aria-invalid");
      if (error) {
        error.textContent = "";
      }
      if (status) {
        status.textContent = "";
      }
    };
    field.addEventListener("input", clearError);
    field.addEventListener("change", clearError);
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalidField;

    requiredFields.forEach((field) => {
      const errorMessage = getFieldError(field);
      const error = field.parentElement.querySelector(".field-error");
      field.setAttribute("aria-invalid", String(Boolean(errorMessage)));
      if (error) {
        error.textContent = errorMessage;
      }
      if (errorMessage && !firstInvalidField) {
        firstInvalidField = field;
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      if (status) {
        status.textContent = "Please correct the highlighted fields.";
      }
      return;
    }

    if (status) {
      status.textContent =
        "Your details pass the browser checks. No message was sent; connect this form to an approved WordPress form integration or secure backend to receive enquiries.";
    }
  });
}
