import * as config from '../config/config.json';

function makeTree() {
    config.sitesTree.forEach(section => {
        var htmlSection = document.createElement('li');
        htmlSection.classList.add('accordion');
        var headerSection = document.createElement('h1');
        headerSection.textContent = section.sectionName;
        htmlSection.appendChild(headerSection);
        var sectionList = document.createElement('ul');
        sectionList.classList.add('collapsible');
        section.sites.forEach(site => {
            var siteItem = document.createElement('li');
            var siteHeader = document.createElement('h2');
            var link = document.createElement('a');
            link.href = site.url;
            link.textContent = site.siteName;
            siteHeader.appendChild(link);
            siteItem.appendChild(siteHeader);
            sectionList.appendChild(siteItem);
        });
        document.getElementById('tree').appendChild(htmlSection);
        htmlSection.parentNode.insertBefore(sectionList, htmlSection.nextSibling);
    });
}

export { makeTree };