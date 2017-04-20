/*jshint esversion: 6,  browser: true, devel: true, strict: true*/

/*You can have as many different javascript files as you like. but you have to 
list them in the gulpfile.js to ensure they concatenate in a specific order. You 
can use CommonJS style npm incudes in the browser "var module = require('module);".
All scripts will all be compiled to ES5, concantenated and linted for the dev build and
minified with comments removed for the dist build.*/

/*This is the basic script to load a service worker for resource caching, push
notifications and home screen icons.
You can learn more at: https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/ */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        'use strict';
        // Register the service worker at your root directory
        navigator.serviceWorker.register('./sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
/**************

If javascript is enabled, add all the fun stuff

**************/

window.onload = function() {
        'use strict';
        document.querySelector('#portfolio').classList.add('js');
        document.querySelector('.img').onclick = function() {
            document.querySelector('aside').classList.add('show-aside');
        }
        document.querySelector('#closeAside').onclick = function() {
            document.querySelector('aside').classList.remove('show-aside');
        }
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
                }
            })
            /*var portfolio = document.querySelector('#portfolio');
            portfolio.addEventListener('click', openPortfolio, false);

            function openPortfolio(e) {
                if (e.target !== e.currentTarget) {
                    thi..classList.toggle('portfolio-item-open');
                    document.querySelector('#buttonSvg').classList.toggle('turn-svg');
                    document.querySelector('.first-path').classList.toggle('turn-first-path');
                    document.querySelector('.second-path').classList.toggle('turn-second-path');
                }
            }*/

    }
    /*nodeList = document.querySelectorAll('li');
    var list = Array.prototype.slice.call(document.querySelectorAll('li'));
    console.log(list);    
      var showText = function (target, message, index, interval) {    
      if (index < message.length) { 
        document.querySelector(target).append(message[index++]); 
        setTimeout(function () { showText(target, message, index, interval); }, interval); 
      } 
      }
     list.forEach(li => {
      showText(li, "Hello, World!", 0, 500); 
       });*/