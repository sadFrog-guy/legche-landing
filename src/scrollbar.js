import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import anime from 'animejs/lib/anime.es.js';

const root = document.querySelector('.root')
let textWrapper = document.querySelectorAll('.letters');
let exampleWrapper = document.querySelectorAll('.example-letters');

class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';

    static defaultOptions = {
        direction: '',
    };

    transformDelta(delta) {
        if (this.options.direction) {
            delta[this.options.direction] = 0;
        }

        return { ...delta };
    }
}

// load the plugin
Scrollbar.use(DisableScrollPlugin);

// usage
const scrl = Scrollbar.init(root, {
    plugins: {
        disableScroll: {
            direction: 'x',
        },
    },
});
//
// textWrapper.forEach(textItem => {
//     textItem.innerHTML = textItem.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// });
//
// scrl.addListener((status) => {
//     console.log(status)
//
//     if(status.offset.y > 1000) {
//         anime.timeline({})
//             .add({
//                 targets: '.heading .letter',
//                 translateY: ["1.1em", 0],
//                 translateX: ["0.55em", 0],
//                 translateZ: 0,
//                 rotateZ: [180, 0],
//                 duration: 450,
//                 easing: "easeOutExpo",
//                 delay: (el, i) => 50 * i
//             });
//     }
// })