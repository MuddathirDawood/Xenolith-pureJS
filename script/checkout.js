let checkoutGames = JSON.parse(localStorage.getItem('checkoutGames'))

let total = 0
checkoutGames.forEach(game => {
    document.querySelector('.checkoutGames').innerHTML += `
        <div class="card">
        <h5>R ${game.price}</h5>
        <h4>${game.title}</h4>
        <p>${game.platform}</p>
        </div>
    `
    total += parseInt(game.price)
});

document.querySelector('.total').innerHTML = 'R ' + total

function checkout(){
    let empty = []
    localStorage.setItem('checkoutGames', JSON.stringify(empty))
}