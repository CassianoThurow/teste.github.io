import outsideClick from './outsideclick.js'

function menuMobile(){
    const menuButton = document.querySelector('[data-menu="mobile"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const events =   ['click', 'touchstart']



    function openMenu(e){
    menuList.classList.toggle('active')
    menuButton.classList.add('active')
    
    outsideClick(menuList, events, ()=>{
        menuList.classList.remove('active')
        menuButton.classList.remove('active') 
    });


}


events.forEach((evento)=>{
    menuButton.addEventListener(evento, openMenu)
})

}












export default menuMobile;