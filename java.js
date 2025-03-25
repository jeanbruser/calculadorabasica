document.getElementById("display").addEventListener("input", function() {
    if (this.value.length > 13) {
        this.scrollLeft = this.scrollWidth; // Sempre mostrar o final do número
    }
});
