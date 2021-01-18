function showModal(){
const btnOpen = document.querySelector('[data-modal="open"]')
const btnClose = document.querySelector('[data-modal="close"]')
const containerModal = document.querySelector('[data-modal="container"]')

if(btnOpen && btnClose && containerModal){

function toggleModal(e){
e.preventDefault()
containerModal.classList.toggle('active')
}



function outSideClick(e){
    if(e.target === this)
    toggleModal(e)
}


btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
containerModal.addEventListener('click', outSideClick)

}

}

export default showModal();