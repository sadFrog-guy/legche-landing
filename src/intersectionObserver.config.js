import anime from "animejs";
import {CountUp} from "countup.js";

const circleLeft = document.querySelector('.round-circle-left')
const circleRight = document.querySelector('.round-circle-right')

export let options = {
    threshold: 0.9,
}

export let sectionCallback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            observer.unobserve(entry.target)
        }

        if(entry.target.classList[0] === 'progress') {
            const numerics = document.querySelectorAll('.numeric')

            for (let numeric of numerics) {
                let count = new CountUp(
                    `${numeric.id}`,
                    Number(numeric.innerText.replaceAll(',', '')),
                    {
                        startVal: 0,
                        useEasing: true,
                        useGrouping: true,
                        duration: 2
                    }
                );

                count.start()
            }
        }

        if(entry.target.classList[0] === 'example' && entry.isIntersecting) {
            circleLeft.style.opacity = '1'
            circleRight.style.opacity = '0'
        }

        if(entry.target.classList[0] === 'partner' && entry.isIntersecting) {
            circleRight.style.opacity = '1'
        }

        if(entry.target.classList[0] === 'team' && entry.isIntersecting) {
            circleRight.style.opacity = '0'
            circleLeft.style.opacity = '0'
        }

        anime.timeline({loop: false})
            .add({
                targets: `.letter`,
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: (el, i) => 100 + 10 * i
            })
    })
}