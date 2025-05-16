 // Sticky header
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        });
    });
    });

    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.getElementById("cartCount");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    const addToCartBtn = document.getElementById("addToCart");
    const quantityInput = document.getElementById("quantity");
    const decreaseQuantityBtn = document.getElementById("decreaseQuantity");
    const increaseQuantityBtn = document.getElementById("increaseQuantity");
    const cartIcon = document.getElementById("cartIcon");

    function updateCartCount() {
    cartCountElement.textContent = cartCount;
    }

    function updateCartModal() {
    cartItems.innerHTML = `
            <div class="cart-item">
                <img src="https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-539325480?$650_519_PNG$" alt="Galaxy S24 Ultra">
                <div class="cart-item-info">
                    <h4>Samsung Galaxy S24 Ultra</h4>
                    <p>Quantity: ${cartCount}</p>
                </div>
            </div>
        `;
    }

    addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quantity = parseInt(quantityInput.value);
    cartCount += quantity;
    updateCartCount();
    updateCartModal();
    cartModal.style.display = "block";
    });

    cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.style.display =
        cartModal.style.display === "none" ? "block" : "none";
    });

    decreaseQuantityBtn.addEventListener("click", () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
    });

    increaseQuantityBtn.addEventListener("click", () => {
    if (quantityInput.value < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
    });