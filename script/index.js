let games = JSON.parse(localStorage.getItem('games')) ?
JSON.parse(localStorage.getItem('games')): 
[
    {
        id: 1,
        title: 'Legend Of Zelda: BoTW',
        platform: 'Nintendo Switch',
        price: 1159,
        cover: '../assets/products/The Legend of Zelda BoTW-Nintendo Switch.jpg'
    },
    {
        id: 2,
        title: 'Dying light 2 Stay Human',
        platform: 'PC',
        price: 852,
        cover: '../assets/products/DyingLight2StayHuman.jpg'
    },    {
        id: 3,
        title: 'Crysis 1',
        platform: 'PC',
        price: 726,
        cover: '../assets/products/Crysis1.jpg'
    }
]
localStorage.setItem('games',JSON.stringify(games))

let section = document.querySelector('.prods')
function displayData(array){
    array.forEach((item, index)=> {
        section.innerHTML += `
        <div class="card">
            <img src="${item.cover}" class="card-img-top" alt="Cover">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">R${item.price}</p>
              <a href="../checkout.html" class="btn btn-primary" onclick="addCheckout(${index})">Add To Checkout</a>
            </div>
        </div>
        `
    })
}
displayData(games)


let filter = document.querySelector('#platforms')

filter.addEventListener('change', (e) => {
    if (e.target.value === 'all') {
        section.innerHTML = ''
        displayData(games)
    } else {
        let filteredArr = games.filter(item => {
            return item.platform === e.target.value
        })
        section.innerHTML = ''
        displayData(filteredArr)
    }
})

let checkoutGames = JSON.parse(localStorage.getItem('checkoutGames'))
function addCheckout(index){
    checkoutGames.push(games[index])
    localStorage.setItem('checkoutGames', JSON.stringify(checkoutGames))
}