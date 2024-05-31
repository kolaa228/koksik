window.addEventListener("load", () => {
    const cart_elem = JSON.parse(localStorage.getItem("cart"))

    const cart_count = cart_elem.reduce((total, item) => total + +item.quantity, 0);

    document.documentElement.style.setProperty("--cart_count",`"${cart_count} !important"`)
})