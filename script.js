document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let carGrid = document.getElementById('carGrid');
    let carCards = carGrid.getElementsByClassName('car-card');

    for (let i = 0; i < carCards.length; i++) {
        let title = carCards[i].getElementsByClassName('car-title')[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            carCards[i].style.display = "";
        } else {
            carCards[i].style.display = "none";
        }
    }
});
