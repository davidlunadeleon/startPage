import '../css/style.css';
import  * as config from '../config/config.json';
import backgroundImage from '../assets/background.jpg'
import { makeTree } from './tree.js';
import { greetings } from './greetings.js';
import { clock } from '../js/clock.js';

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
    document.getElementById('backgroundImage').src = backgroundImage;
    makeTree();
    greetings();
    clock();
    document.body.setInterval(() => {
       greetings();
       clock();
    }, 60000);
})