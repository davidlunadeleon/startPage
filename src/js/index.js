import '../css/style.css';
import  * as config from '../config/config.json';

//Source of the ready function: http://youmightnotneedjquery.com/

function ready(cb) {
    if (document.readyState != 'loading'){
        cb();
    } else {
        document.addEventListener('DOMContentLoaded', cb);
    }
}

ready(() => {
    document.title = config.name;
    document.getElementById('searchForm').action = config.searchEngine;
    document.getElementById('searchInput').placeholder = config.placeHolderMessage;
})