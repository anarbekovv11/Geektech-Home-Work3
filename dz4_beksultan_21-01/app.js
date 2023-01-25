const getData = document.querySelector('.get')
const wrapper  = document.querySelector(".wrapper")


getData.onclick = () => {
    const req =() =>{
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()

    request.addEventListener("load", ()=>{
        const data = JSON.parse(request.response)
        console.log(request.response)

        data.map((item) =>{
            const block = document.createElement("div")
            const div   = document.createElement('span')
            block.style.height = "150px"
            block.style.width = "150px"
            block.style.border = "1px solid red"
            block.style.marginTop = "10px"

            block.innerHTML = item.name
            div.innerHTML = item.price
            let product_img = document.createElement("image")
            document.appendChild(product_img)
            wrapper.append(block,div)

        })
    })
}

req()
}