// ==========================================
// NWU CAMPUS MONEY MARKET
// MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // ==========================================
    // LOCAL STORAGE HELPERS
    // ==========================================

    function getStoredArray(key) {

        try {

            const value = JSON.parse(
                localStorage.getItem(key)
            );

            return Array.isArray(value)
                ? value
                : [];

        } catch (error) {

            console.error(
                "Could not read " + key,
                error
            );

            return [];
        }
    }


    function saveStoredArray(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }


    // ==========================================
    // SEARCH ELEMENTS
    // ==========================================

    const searchForm =
        document.querySelector(".search-box");

    const searchInput =
        document.getElementById("searchInput");

    const categorySelect =
        document.getElementById("categorySelect");


    // ==========================================
    // PRODUCT FILTER
    // ==========================================

    function filterProducts() {

        const productCards =
            document.querySelectorAll(".product-card");

        const searchText =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";

        const selectedCategory =
            categorySelect
                ? categorySelect.value
                    .toLowerCase()
                : "all";


        productCards.forEach(function (card) {

            const productName =
                (
                    card.dataset.name ||
                    card.querySelector("h3")
                        ?.textContent ||
                    ""
                ).toLowerCase();


            const productDescription =
                (
                    card.dataset.description ||
                    card.querySelector("p")
                        ?.textContent ||
                    ""
                ).toLowerCase();


            const productCategory =
                (
                    card.dataset.category ||
                    ""
                ).toLowerCase();


            const matchesSearch =
                productName.includes(searchText) ||
                productDescription.includes(searchText);


            const matchesCategory =
                selectedCategory === "all" ||
                productCategory === selectedCategory;


            card.style.display =
                matchesSearch &&
                matchesCategory
                    ? ""
                    : "none";

        });
    }


    // ==========================================
    // SEARCH FORM
    // ==========================================

    if (searchForm) {

        searchForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                filterProducts();

            }
        );
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProducts
        );
    }


    if (categorySelect) {

        categorySelect.addEventListener(
            "change",
            filterProducts
        );
    }


    // ==========================================
    // CATEGORY CARDS
    // ==========================================

    const categoryCards =
        document.querySelectorAll(
            ".category-card"
        );


    categoryCards.forEach(
        function (card) {

            card.style.cursor = "pointer";

            card.setAttribute(
                "role",
                "button"
            );

            card.setAttribute(
                "tabindex",
                "0"
            );


            function openCategory() {

                const category =
                    card.dataset.category;


                if (
                    category &&
                    categorySelect
                ) {

                    categorySelect.value =
                        category;

                    filterProducts();


                    const marketplace =
                        document.getElementById(
                            "marketplace"
                        );


                    if (marketplace) {

                        marketplace.scrollIntoView({
                            behavior: "smooth"
                        });

                    }
                }
            }


            card.addEventListener(
                "click",
                openCategory
            );


            card.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openCategory();

                    }

                }
            );

        }
    );


    // ==========================================
    // CART
    // ==========================================

    let cart =
        getStoredArray("cart");


    function getCartQuantity() {

        return cart.reduce(
            function (total, item) {

                return total +
                    Number(
                        item.quantity || 1
                    );

            },
            0
        );
    }


    function updateCartCount() {

        const cartCountElements =
            document.querySelectorAll(
                ".cart-count"
            );


        const quantity =
            getCartQuantity();


        cartCountElements.forEach(
            function (element) {

                element.textContent =
                    quantity;

            }
        );
    }


    function createProductId(card) {

        if (card.dataset.id) {
            return card.dataset.id;
        }


        const name =
            card.dataset.name ||
            card.querySelector("h3")
                ?.textContent ||
            "product";


        return name
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }


    function getProductPrice(card) {

        if (card.dataset.price) {

            return Number(
                card.dataset.price
            ) || 0;

        }


        const priceElement =
            card.querySelector(
                ".product-price"
            );


        if (!priceElement) {
            return 0;
        }


        return Number(
            priceElement.textContent
                .replace(/[^\d.,]/g, "")
                .replace(",", ".")
        ) || 0;
    }


    function addProductToCart(card) {

        const id =
            createProductId(card);


        const name =
            card.dataset.name ||
            card.querySelector("h3")
                ?.textContent
                ?.trim() ||
            "Product";


        const price =
            getProductPrice(card);


        const category =
            card.dataset.category ||
            "other";


        const location =
            card.dataset.location ||
            card.querySelector(
                ".product-location"
            )
                ?.textContent
                ?.trim() ||
            "";


        const icon =
            card.dataset.icon ||
            card.querySelector(
                ".product-image"
            )
                ?.textContent
                ?.trim() ||
            "🛍️";


        const existingProduct =
            cart.find(
                function (item) {

                    return item.id === id;

                }
            );


        if (existingProduct) {

            existingProduct.quantity =
                Number(
                    existingProduct.quantity ||
                    1
                ) + 1;

        } else {

            cart.push({

                id: id,
                name: name,
                price: price,
                category: category,
                location: location,
                icon: icon,
                quantity: 1

            });

        }


        saveStoredArray(
            "cart",
            cart
        );


        updateCartCount();


        alert(
            name +
            " was added to your cart."
        );
    }


    // ==========================================
    // ADD TO CART BUTTONS
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

                    const productCard =
                        button.closest(
                            ".product-card"
                        );


                    if (!productCard) {

                        console.warn(
                            "Add-to-cart button must be inside a .product-card."
                        );

                        return;
                    }


                    addProductToCart(
                        productCard
                    );

                }
            );

        }
    );


    // ==========================================
    // CART PAGE
    // ==========================================

    const cartContainer =
        document.querySelector(
            ".cart-items"
        );


    function formatPrice(price) {

        return "R" +
            Number(price || 0)
                .toFixed(2);

    }


    function calculateCartTotal() {

        return cart.reduce(
            function (total, item) {

                return total +
                    (
                        Number(
                            item.price || 0
                        ) *
                        Number(
                            item.quantity || 1
                        )
                    );

            },
            0
        );
    }


    function renderCart() {

        if (!cartContainer) {
            return;
        }


        cartContainer.innerHTML = "";


        if (cart.length === 0) {

            const message =
                document.createElement("p");

            message.className =
                "empty-cart";

            message.textContent =
                "Your cart is empty.";

            cartContainer.appendChild(
                message
            );

        } else {

            cart.forEach(
                function (item) {

                    const cartItem =
                        document.createElement(
                            "div"
                        );

                    cartItem.className =
                        "cart-item";


                    const icon =
                        document.createElement(
                            "div"
                        );

                    icon.className =
                        "cart-item-icon";

                    icon.textContent =
                        item.icon || "🛍️";


                    const details =
                        document.createElement(
                            "div"
                        );

                    details.className =
                        "cart-item-details";


                    const title =
                        document.createElement(
                            "h3"
                        );

                    title.textContent =
                        item.name;


                    const information =
                        document.createElement(
                            "p"
                        );

                    information.textContent =
                        formatPrice(item.price) +
                        (
                            item.location
                                ? " • " +
                                  item.location
                                : ""
                        );


                    details.appendChild(
                        title
                    );

                    details.appendChild(
                        information
                    );


                    const controls =
                        document.createElement(
                            "div"
                        );

                    controls.className =
                        "quantity-controls";


                    const decreaseButton =
                        document.createElement(
                            "button"
                        );

                    decreaseButton.type =
                        "button";

                    decreaseButton.textContent =
                        "−";

                    decreaseButton.setAttribute(
                        "aria-label",
                        "Decrease quantity"
                    );


                    const quantity =
                        document.createElement(
                            "span"
                        );

                    quantity.textContent =
                        item.quantity || 1;


                    const increaseButton =
                        document.createElement(
                            "button"
                        );

                    increaseButton.type =
                        "button";

                    increaseButton.textContent =
                        "+";

                    increaseButton.setAttribute(
                        "aria-label",
                        "Increase quantity"
                    );


                    decreaseButton.addEventListener(
                        "click",
                        function () {

                            item.quantity =
                                Number(
                                    item.quantity ||
                                    1
                                ) - 1;


                            if (
                                item.quantity <= 0
                            ) {

                                cart =
                                    cart.filter(
                                        function (
                                            cartProduct
                                        ) {

                                            return (
                                                cartProduct.id !==
                                                item.id
                                            );

                                        }
                                    );

                            }


                            saveStoredArray(
                                "cart",
                                cart
                            );

                            updateCartCount();

                            renderCart();

                        }
                    );


                    increaseButton.addEventListener(
                        "click",
                        function () {

                            item.quantity =
                                Number(
                                    item.quantity ||
                                    1
                                ) + 1;


                            saveStoredArray(
                                "cart",
                                cart
                            );

                            updateCartCount();

                            renderCart();

                        }
                    );


                    controls.appendChild(
                        decreaseButton
                    );

                    controls.appendChild(
                        quantity
                    );

                    controls.appendChild(
                        increaseButton
                    );


                    const removeButton =
                        document.createElement(
                            "button"
                        );

                    removeButton.type =
                        "button";

                    removeButton.className =
                        "remove-cart";

                    removeButton.textContent =
                        "Remove";


                    removeButton.addEventListener(
                        "click",
                        function () {

                            cart =
                                cart.filter(
                                    function (
                                        cartProduct
                                    ) {

                                        return (
                                            cartProduct.id !==
                                            item.id
                                        );

                                    }
                                );


                            saveStoredArray(
                                "cart",
                                cart
                            );

                            updateCartCount();

                            renderCart();

                        }
                    );


                    cartItem.appendChild(
                        icon
                    );

                    cartItem.appendChild(
                        details
                    );

                    cartItem.appendChild(
                        controls
                    );

                    cartItem.appendChild(
                        removeButton
                    );


                    cartContainer.appendChild(
                        cartItem
                    );

                }
            );
        }


        updateCartSummary();

    }


    // ==========================================
    // CART SUMMARY
    // ==========================================

    function updateCartSummary() {

        const subtotalElement =
            document.querySelector(
                ".cart-subtotal"
            );

        const totalElement =
            document.querySelector(
                ".cart-total-amount"
            );


        const total =
            calculateCartTotal();


        if (subtotalElement) {

            subtotalElement.textContent =
                formatPrice(total);

        }


        if (totalElement) {

            totalElement.textContent =
                formatPrice(total);

        }

    }


    // ==========================================
    // CHECKOUT
    // ==========================================

    const checkoutButton =
        document.querySelector(
            ".checkout-btn"
        );


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            function () {

                if (cart.length === 0) {

                    alert(
                        "Your cart is empty."
                    );

                    return;
                }


                alert(
                    "Checkout is ready to be connected to your order system."
                );

            }
        );
    }


    // ==========================================
    // FAVOURITES
    // ==========================================

    let favourites =
        getStoredArray(
            "favourites"
        );


    function updateFavouriteButton(
        button,
        isFavourite
    ) {

        button.classList.toggle(
            "active",
            isFavourite
        );

        button.textContent =
            isFavourite
                ? "♥"
                : "♡";

        button.setAttribute(
            "aria-label",
            isFavourite
                ? "Remove from favourites"
                : "Add to favourites"
        );

    }


    const favouriteButtons =
        document.querySelectorAll(
            ".favourite-btn"
        );


    favouriteButtons.forEach(
        function (button) {

            const productCard =
                button.closest(
                    ".product-card"
                );


            if (!productCard) {
                return;
            }


            const productId =
                createProductId(
                    productCard
                );


            updateFavouriteButton(
                button,
                favourites.includes(
                    productId
                )
            );


            button.addEventListener(
                "click",
                function () {

                    if (
                        favourites.includes(
                            productId
                        )
                    ) {

                        favourites =
                            favourites.filter(
                                function (id) {

                                    return (
                                        id !==
                                        productId
                                    );

                                }
                            );

                        updateFavouriteButton(
                            button,
                            false
                        );

                    } else {

                        favourites.push(
                            productId
                        );

                        updateFavouriteButton(
                            button,
                            true
                        );

                    }


                    saveStoredArray(
                        "favourites",
                        favourites
                    );

                }
            );

        }
    );


    // ==========================================
    // LOGIN FORM
    // ==========================================

    const loginForm =
        document.querySelector(
            "#loginForm"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                const requiredInputs =
                    loginForm.querySelectorAll(
                        "[required]"
                    );


                let valid = true;


                requiredInputs.forEach(
                    function (input) {

                        if (
                            !input.value.trim()
                        ) {

                            valid = false;

                        }

                    }
                );


                if (!valid) {

                    event.preventDefault();

                    alert(
                        "Please complete all required fields."
                    );

                }

            }
        );
    }


    // ==========================================
    // REGISTER FORM
    // ==========================================

    const registerForm =
        document.querySelector(
            "#registerForm"
        );


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                const password =
                    registerForm.querySelector(
                        "#password"
                    );

                const confirmPassword =
                    registerForm.querySelector(
                        "#confirmPassword"
                    );


                if (
                    password &&
                    confirmPassword &&
                    password.value !==
                    confirmPassword.value
                ) {

                    event.preventDefault();

                    alert(
                        "Passwords do not match."
                    );

                }

            }
        );
    }


    // ==========================================
    // INITIAL PAGE SETUP
    // ==========================================

    updateCartCount();

    renderCart();


    console.log(
        "NWU Campus Money Market JavaScript is ready."
    );

});
