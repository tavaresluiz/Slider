let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemOnclik('next')
btnBack.onclick = () => moveItemOnclik('back')

function moveItemOnclik(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumItems = document.querySelectorAll('.thumb .thumb-item')
    
    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);


}