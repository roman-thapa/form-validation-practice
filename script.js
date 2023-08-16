document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const emailInput = document.getElementById("email");
    const countryInput = document.getElementById("country");
    const zipInput = document.getElementById("zip");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    
    emailInput.addEventListener("input", function () {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity("Please enter a valid email address");
        } else {
            emailInput.setCustomValidity("");
        }
    });

    countryInput.addEventListener("input", function () {
        if (countryInput.value.trim() === "") {
            countryInput.setCustomValidity("Please enter a country");
        } else {
            countryInput.setCustomValidity("");
        }
    });

    zipInput.addEventListener("input", function () {
        if (zipInput.value.trim() === "") {
            zipInput.setCustomValidity("Please enter a zip code");
        } else {
            zipInput.setCustomValidity("");
        }
    });

    passwordInput.addEventListener("input", function () {
        if (passwordInput.value.length < 6) {
            passwordInput.setCustomValidity("Password must be at least 6 characters long");
        } else {
            passwordInput.setCustomValidity("");
        }
    });

    confirmPasswordInput.addEventListener("input", function () {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    });

    form.addEventListener("submit", function (event) {
        // Check validity before form submission
        if (!form.checkValidity()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
