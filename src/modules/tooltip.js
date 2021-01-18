function tooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((i)=>{
    i.addEventListener('mouseover', onMouseOver )
})

function onMouseOver(e){
    const tooltipBox = createTooltipBox(this)
    tooltipBox.style.top = e.pageY + 'px';
    tooltipBox.style.left = e.pageX + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)

}


const onMouseMove = {
    handleEvent(e){
    this.tooltipBox.style.top = e.pageY + 20 + 'px';
    this.tooltipBox.style.left = e.pageX + 20 +'px';   
    }

}



const  onMouseLeave = {
    handleEvent(){
    this.tooltipBox.remove();
    this.element.removeEventListener('mousemouse', onMouseLeave)
    this.element.removeEventListener('mousemove', onMouseMove)

    }
}


function createTooltipBox(element){
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerHTML = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}


}


export default tooltip();