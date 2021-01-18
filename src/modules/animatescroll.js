const sections = document.querySelectorAll('[data-anime= "scroll"]');
const windowHalf = window.innerHeight * 0.6

export default function animeScroll(){
    sections.forEach((section) =>{
        const sectionTop =section.getBoundingClientRect().top
        const visibleSection = (sectionTop -  windowHalf) < 0
        if (visibleSection){
            section.classList.add('ativo')
        }
    })
}


window.addEventListener('scroll', animeScroll);