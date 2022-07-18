const currency = function(number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
};

const ulCard = document.getElementById('listProductCard')
const ulCart = document.getElementById('listShoppingCart')
const productsCount = document.getElementById('productsCount')
const valueCount = document.getElementById('valueCount')
let count = 0
let fullValue = 0
const all = document.getElementById('all')
const accessories = document.getElementById('accessories')
const shoes = document.getElementById('shoes')
const tshirts = document.getElementById('tshirts')
const emptyCart = document.getElementById('emptyCart')
const fullCart = document.getElementById('fullCart')





function createLiCard(){
    let liCard = document.createElement('li')

    let spanSearchTerm = document.createElement('span')
    spanSearchTerm.classList.add('searchTerm')
    spanSearchTerm.innerText = data[i].nameItem
    liCard.appendChild(spanSearchTerm)
    
    let divCardImg = document.createElement('div')
    
    let imgCard = document.createElement('img')
    imgCard.src = data[i].img
    
    liCard.appendChild(divCardImg)
    divCardImg.appendChild(imgCard)
    
    let divCardInfo = document.createElement('div')
    divCardInfo.classList.add('cardContent')
    
    let categoryCard = document. createElement('span')
    categoryCard.classList.add('category')
    categoryCard.innerText = data[i].tag
    
    
    let h2CardInfo = document.createElement('h2')
    h2CardInfo.innerText = data[i].nameItem
    
    let descriptionCardInfo = document.createElement('span')
    descriptionCardInfo.innerText = data[i].description
    
    let valueStrongCardInfo = document.createElement('strong')
    valueStrongCardInfo.innerText  = currency(data[i].value)
    let value = data[i].value
    
    let spanAddCart = document.createElement('span')
    spanAddCart.classList.add('addToCart')
    spanAddCart.innerText = 'Adicionar ao carrinho'
    
    divCardInfo.append(categoryCard, h2CardInfo, descriptionCardInfo, valueStrongCardInfo, spanAddCart)
    liCard.appendChild(divCardInfo)
    ulCard.appendChild(liCard)
    
    spanAddCart.addEventListener('click', function(){
        count += 1
        fullValue = fullValue + value
        
        console.log(fullValue)
        
        let liCart = document.createElement('li')
        
        let divCartImg = document.createElement('div')
        let imgCart = document.createElement('img')
        imgCart.src = imgCard.src
        divCartImg.appendChild(imgCart)
        
        let divCartInfo = document.createElement('div')
        divCartInfo.classList.add('cardContent')
        
        let h2CartInfo = document.createElement('h2')
        h2CartInfo.innerText = h2CardInfo.innerText
        
        let valueStrongCartInfo = document.createElement('strong')
        valueStrongCartInfo.innerText = valueStrongCardInfo.innerText
        
        let spanRemove = document.createElement('span')
        spanRemove.classList.add('remove')
        spanRemove.innerText = 'Remove'
        
        divCartInfo.append(h2CartInfo,valueStrongCartInfo, spanRemove)
        liCart.append(divCartImg, divCartInfo)
        ulCart.appendChild(liCart)
        
        productsCount.innerText = count
        valueCount.innerText = currency(fullValue)
        
        fullCart.style.display = 'flex'
        emptyCart.style.display = 'none'

        spanRemove.onclick = function(){
            count = count - 1
            fullValue = fullValue - value
            productsCount.innerText = count
            valueCount.innerText = currency(fullValue)
            liCart.remove()
            if(count == 0){
                fullCart.style.display = 'none'
                emptyCart.style.display = 'flex'
            }
        }
        
        
    })
    
}

for(i in data){
    createLiCard()
}



all.addEventListener('click', function(){
    ulCard.innerHTML = ''
    for(i in data){
        createLiCard()        
    }
})

accessories.addEventListener('click', function(){
    ulCard.innerHTML = ''
    for(i in data){
        if(data[i].tag == 'Acessórios'){
            createLiCard()
        }
        
    }
})

shoes.addEventListener('click', function(){
    ulCard.innerHTML = ''
    for(i in data){
        if(data[i].tag == 'calçados'){
            createLiCard()
        }
        
    }
})

tshirts.addEventListener('click', function(){
    ulCard.innerHTML = ''
    for(i in data){
        if(data[i].tag == 'Camisetas'){
            createLiCard()
        }
        
    }
})


const list = document.querySelector('.card')
const searchBar = document.forms['search-bar'].querySelector('input')

searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase()
    const products = list.getElementsByTagName('li')
    Array.from(products).forEach(function(product){
        const title = product.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            product.style.display = 'block'
        }else{
            product.style.display = 'none'
        }
    })
})




























