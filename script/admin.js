let games = JSON.parse(localStorage.getItem('games'))

let addTag = document.querySelector('.table')
function displayData(){
    games.forEach((item, index) => {
        addTag.innerHTML += `
        <tr class="table__row">
        <td class="table__content" data-heading="ID">${item.id}</td>
        <td class="table__content" data-heading="Title">${item.title}</td>
        <td class="table__content" data-heading="Price">R${item.price}</td>
        <td class="table__content" data-heading="Platform">${item.platform}</td>
        <td class="table__content" data-heading="Cover"><img id="coverImg" src="${item.cover}" alt="Cover"></td>
        <td class="table__content" data-heading="Options">
        <button onclick="editGame(${index})"  data-bs-toggle="modal" data-bs-target="#editModal"><span class="mdi mdi-pencil"></span></button>
        <button onclick="deleteGame(${index})"><span class="mdi mdi-delete"></span></button>
        </td>
        </tr>
        `
    });
}

displayData()


function addItem(){
    let id = games.length + 1
    let title = document.querySelector('.title').value
    let platform = document.querySelector('.platform').value
    let price = document.querySelector('.price').value
    let cover = document.querySelector('.cover').value

    games.push({
        id,
        title,
        platform,
        price,
        cover
    })
    console.log(games);
    localStorage.setItem('games', JSON.stringify(games))
    addTag.innerHTML = ''
    displayData()
}


let gameID

function editGame(index){
    let game = games[index]
    gameID = game.id
    document.querySelector('.etitle').value = game.title
    document.querySelector('.eplatform').value = game.platform
    document.querySelector('.eprice').value = game.price
    document.querySelector('.ecover').value = game.cover
}

function edit(){
    let id = gameID
    let title = document.querySelector('.etitle').value
    let platform = document.querySelector('.eplatform').value
    let price = document.querySelector('.eprice').value
    let cover = document.querySelector('.ecover').value
    let game = games[gameID-1]
    game = {
        id,
        title,
        platform,
        price,
        cover
    }
    games[gameID-1] = game
    localStorage.setItem('games', JSON.stringify(games))
    addTag.innerHTML = `
    <tr>
       <th class="table__heading">ID</th>
       <th class="table__heading">Title</th>
       <th class="table__heading">Price</th>
       <th class="table__heading">Platform</th>
       <th class="table__heading">Cover</th>
       <th class="table__heading">Options</th>
     </tr>
    `
    displayData()
}

function deleteGame(index){
    games.splice(index, 1)
    let i = 1
    games.forEach(item => {
        item.id = i
        i++
    })
    localStorage.setItem('games', JSON.stringify(games))
    addTag.innerHTML = `
    <tr>
       <th class="table__heading">ID</th>
       <th class="table__heading">Title</th>
       <th class="table__heading">Price</th>
       <th class="table__heading">Platform</th>
       <th class="table__heading">Cover</th>
       <th class="table__heading">Options</th>
     </tr>
    `    
    displayData()
}