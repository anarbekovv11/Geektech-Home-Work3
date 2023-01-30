async function getResponse(){
    let response = await fetch("data.json")
    let content = await response.json()
    content = content.splice(0, 2)

    let list = document.querySelector('.posts')

    for ( key in content) {

        list.innerHTML += `
        <li class="post">
            <h3>${content[key].name}</h3>
            <img src="${content[key].product_img}" width="300" >
            <h5>${content[key].price}</h5>
        </li>
        `

        content[key]
    }
}
getResponse()

