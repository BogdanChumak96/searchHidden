const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
state = false

btn.addEventListener('click', () =>{
    state=!state
    if(state)search.classList.add('active')
    else search.classList.remove('active')

})