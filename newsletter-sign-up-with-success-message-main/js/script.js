document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting immediately

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailValue = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Valid email required";
    emailInput.classList.add("input-error");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("input-error");

    const newsletterCard = document.querySelector(".newsletter-card");
    newsletterCard.style.display = "none";

    const successMessage = document.querySelector(".success-message");
    successMessage.classList.remove("hide-before-subscribe");

    const emailSpan = successMessage.querySelector("strong");
    if (emailSpan) {
      emailSpan.textContent = emailValue;
    }

    const dismissBtn = successMessage.querySelector(".dismiss-btn");

    dismissBtn.addEventListener("click", function () {
      successMessage.style.display = "none";

      const newsletterCard = document.querySelector(".newsletter-card");
      newsletterCard.style.display = "flex";
    });
  }
});
