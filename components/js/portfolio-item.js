/**************

If javascript is enabled, add all the fun stuff

**************/

window.onload = function() {
    'use strict';
    document.querySelector('#portfolio').classList.add('js');
    // Open full screen gallery of portfolio pieces
    document.querySelector('.img').onclick = function() {
        document.querySelector('aside').classList.add('show-aside');
    }
    // Close full screen gallery
    document.querySelector('#closeAside').onclick = function() {
        document.querySelector('aside').classList.remove('show-aside');
    }
    // Add funtionality to all portfolio-item buttons
    var buttons = document.querySelectorAll('.portfolio-button');
    console.log(buttons);
    buttons.forEach(button => {
        button.onmouseover = function() {
            this.classList.add('button-hover');
        }

        button.onmouseout = function() {
            this.classList.remove('button-hover');
        }
        button.onclick = function() {
            this.classList.remove('button-hover');
            this.querySelector('.button-svg').classList.toggle('turn-svg');
            this.querySelector('.first-path').classList.toggle('turn-first-path');
            this.querySelector('.second-path').classList.toggle('turn-second-path');
            this.parentElement.classList.toggle('portfolio-item-open');
            ga('send', 'click event', 'Someone opened a portfolio item');
        }
    })
}