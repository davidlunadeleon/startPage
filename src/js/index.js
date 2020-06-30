import '../css/style.css';
import  * as config from '../config/config.json';
import backgroundImage from '../assets/background.jpg'
import { makeTree } from './tree.js';
import { greetings } from './greetings.js';
import { clock, currentDate } from './clock.js';
import { accordion } from './accordion.js'

//Source of the ready function: http://youmightnotneedjquery.com/

function ready(cb) {
    if (document.readyState != 'loading'){
        cb();
    } else {
        document.addEventListener('DOMContentLoaded', cb);
    }
}

ready(() => {
    document.title = config.pageTitle;
    document.getElementById('searchForm').action = config.searchEngine;
    document.getElementById('searchInput').placeholder = config.placeHolderMessage;
    makeTree();
    greetings();
    clock();
    currentDate()
    setInterval(() => {
       clock();
    }, 1000); 
    setInterval(() => {
       currentDate();
       greetings();
    }, 60000);
    accordion();
})