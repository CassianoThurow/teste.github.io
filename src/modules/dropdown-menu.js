import outsideClick from './outsideclick.js'



function dropdownMenu(){
    
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach((i)=>{
    ['touchstart', 'click'].forEach(userEvent =>{
        i.addEventListener(userEvent, handleClick)
    })
    })
    function handleClick(e){
        e.preventDefault()
       this.classList.add('active')
       outsideClick(this, ['touchstart', 'click'], ()=>{
         this.classList.remove('active')
       })
    };
}








export default dropdownMenu;