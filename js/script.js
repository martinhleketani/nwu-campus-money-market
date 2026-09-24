// NWU Campus Money Market
// Main JavaScript file

document.addEventListener("DOMContentLoaded", () => {

    // Search functionality
    const searchButton = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");
    const categorySelect = document.querySelector(".search-box select");

    searchButton.addEventListener("click", () => {

        const searchText = searchInput.value.trim();
        const category = categorySelect.value;

        if (searchText === "" && category === "All Categories") {
            alert("Please enter a product or select a category.");
            return;
        }

        alert(
            `Searching for: ${searchText || "All Products"}\nCategory: ${category}`
        );
    });


    // Category cards
    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const categoryName = card.querySelector("h3").textContent;

            searchInput.value = "";
            categorySelect.value = categoryName;

            document
                .querySelector("#marketplace")
                .scrollIntoView({
                    behavior: "smooth"
                });
        });

    });


    // Login button
    const loginButton = document.querySelector(".login-btn");

    loginButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Login system will be available soon.");
    });


    // Register button
    const registerButton = document.querySelector(".register-btn");

    registerButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Registration system will be available soon.");
    });


    // Sell item button
    const sellButtons = document.querySelectorAll(
        ".secondary-btn, .cta-section .primary-btn"
    );

    sellButtons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "Seller registration and product listing will be available soon."
            );
        });

    });


    // Smooth navigation
    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    console.log(
        "NWU Campus Money Market loaded successfully."
    );

});
