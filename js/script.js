// ==========================================
// NWU CAMPUS MONEY MARKET
// MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("NWU Campus Money Market loaded successfully.");

    // ==========================================
    // REGISTRATION BUTTONS
    // ==========================================

    const registerButtons =
        document.querySelectorAll(".register-btn");

    registerButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link =
                button.getAttribute("href");

            // If the button already has a real page,
            // allow it to open normally.
            if (
                link &&
                link !== "#" &&
                !link.startsWith("javascript:")
            ) {
                return;
            }

            event.preventDefault();

            window.location.href = "pages/register.html";

        });

    });


    // ==========================================
    // SELL ITEM BUTTON
    // ==========================================

    const sellButtons =
        document.querySelectorAll(".sell-btn");

    sellButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link =
                button.getAttribute("href");

            if (
                link &&
                link !== "#" &&
                !link.startsWith("javascript:")
            ) {
                return;
            }

            event.preventDefault();

            window.location.href =
                "pages/seller-dashboard.html";

        });

    });


    // ==========================================
    // LOGIN BUTTON
    // ==========================================

    const loginButtons =
        document.querySelectorAll(".login-btn");

    loginButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link =
                button.getAttribute("href");

            if (
                link &&
                link !== "#" &&
                !link.startsWith("javascript:")
            ) {
                return;
            }

            event.preventDefault();

            window.location.href =
                "pages/login.html";

        });

    });


    // ==========================================
    // SMOOTH NAVIGATION
    // ==========================================

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ==========================================
    // SEARCH
    // ==========================================

    const searchForm =
        document.querySelector(".search-box");

    if (searchForm) {

        searchForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const searchInput =
                    searchForm.querySelector("input");

                const category =
                    searchForm.querySelector("select");

                const searchValue =
                    searchInput
                        ? searchInput.value.trim()
                        : "";

                const categoryValue =
                    category
                        ? category.value
                        : "all";


                if (
                    searchValue === "" &&
                    categoryValue === "all"
                ) {

                    alert(
                        "Please enter a product or select a category."
                    );

                    return;

                }


                localStorage.setItem(
                    "marketSearch",
                    searchValue
                );

                localStorage.setItem(
                    "marketCategory",
                    categoryValue
                );


                window.location.href =
                    "pages/marketplace.html";

            }
        );

    }


    // ==========================================
    // CATEGORY CARDS
    // ==========================================

    const categoryCards =
        document.querySelectorAll(
            ".category-card"
        );

    categoryCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const category =
                    card.dataset.category;

                if (!category) {
                    return;
                }

                localStorage.setItem(
                    "marketCategory",
                    category
                );

                window.location.href =
                    "pages/marketplace.html";

            }
        );

    });


    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navbar nav");

    if (
        menuButton &&
        navigation
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "mobile-open"
                );

            }
        );

    }


    // ==========================================
    // LOCATION
    // ==========================================

    const locationButtons =
        document.querySelectorAll(
            ".location-btn"
        );

    locationButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (
                    !navigator.geolocation
                ) {

                    alert(
                        "Location services are not supported by this browser."
                    );

                    return;

                }


                navigator.geolocation.getCurrentPosition(

                    function (position) {

                        const latitude =
                            position.coords.latitude;

                        const longitude =
                            position.coords.longitude;


                        localStorage.setItem(
                            "userLatitude",
                            latitude
                        );

                        localStorage.setItem(
                            "userLongitude",
                            longitude
                        );


                        alert(
                            "Your location has been detected."
                        );

                    },

                    function () {

                        alert(
                            "Location access was not allowed."
                        );

                    }

                );

            }
        );

    });


    // ==========================================
    // STUDENT LOGIN CHECK
    // ==========================================

    const studentNumber =
        localStorage.getItem(
            "nwuStudentNumber"
        );

    if (studentNumber) {

        const studentElements =
            document.querySelectorAll(
                ".student-number"
            );

        studentElements.forEach(
            function (element) {

                element.textContent =
                    studentNumber;

            }
        );

    }


    // ==========================================
    // LOGOUT
    // ==========================================

    const logoutButtons =
        document.querySelectorAll(
            ".logout-btn"
        );

    logoutButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                localStorage.removeItem(
                    "nwuStudentNumber"
                );

                localStorage.removeItem(
                    "nwuStudentName"
                );

                localStorage.removeItem(
                    "nwuEmail"
                );

                localStorage.removeItem(
                    "accountType"
                );

                localStorage.removeItem(
                    "cart"
                );


                window.location.href =
                    "../index.html";

            }
        );

    });


    // ==========================================
    // CART COUNT
    // ==========================================

    function updateCartCount() {

        const cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        let totalItems = 0;


        cart.forEach(function (item) {

            totalItems +=
                Number(item.quantity) || 0;

        });


        const cartCounters =
            document.querySelectorAll(
                ".cart-count"
            );


        cartCounters.forEach(
            function (counter) {

                counter.textContent =
                    totalItems;

            }
        );

    }


    updateCartCount();


    // ==========================================
    // ADD TO CART
    // ==========================================

    const addToCartButtons =
        document.querySelectorAll(
            ".add-to-cart"
        );

    addToCartButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const name =
                        button.dataset.name ||
                        "Product";


                    const price =
                        Number(
                            button.dataset.price
                        ) || 0;


                    const image =
                        button.dataset.image ||
                        "🛍️";


                    let cart =
                        JSON.parse(
                            localStorage.getItem(
                                "cart"
                            )
                        ) || [];


                    const existing =
                        cart.find(
                            function (item) {

                                return (
                                    item.name === name
                                );

                            }
                        );


                    if (existing) {

                        existing.quantity += 1;

                    } else {

                        cart.push({

                            name: name,

                            price: price,

                            image: image,

                            quantity: 1

                        });

                    }


                    localStorage.setItem(
                        "cart",
                        JSON.stringify(cart)
                    );


                    updateCartCount();


                    alert(
                        name +
                        " was added to your cart."
                    );

                }
            );

        }
    );


    // ==========================================
    // FAVOURITES
    // ==========================================

    const favouriteButtons =
        document.querySelectorAll(
            ".favourite-btn"
        );

    favouriteButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    button.classList.toggle(
                        "active"
                    );


                    if (
                        button.classList.contains(
                            "active"
                        )
                    ) {

                        button.textContent =
                            "♥";

                    } else {

                        button.textContent =
                            "♡";

                    }

                }
            );

        }
    );


    // ==========================================
    // FINAL MESSAGE
    // ==========================================

    console.log(
        "NWU Campus Money Market JavaScript is ready."
    );

});
