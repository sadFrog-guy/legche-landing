import Rellax from 'rellax'

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('root').scrollLeft = 0
})

const rellax = new Rellax('.rellax', {
    vertical: true,
    horizontal: false
});