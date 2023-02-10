import {sectionCallback, options} from './intersectionObserver.config'

let sectionObserver = new IntersectionObserver(sectionCallback, options)

window.addEventListener('DOMContentLoaded', (event) => {
    const sections = Array.from(document.getElementsByTagName('section'));
    const headings = document.querySelectorAll('.heading')
    let textWrapper = document.querySelectorAll('.letters');

    if(window.innerWidth >= 1920) {
        console.log('fits')

        textWrapper.forEach(textItem => {
            textItem.innerHTML = textItem.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        });

        for (let section of sections) {
            sectionObserver.observe(section);
        }
    }
});