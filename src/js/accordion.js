function accordion(){
    var accordion = document.getElementsByClassName('accordion');
    for(var i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            var collapsible = this.nextElementSibling;
            if(collapsible.style.maxHeight){
                collapsible.style.maxHeight = null;
            } else {
                collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
            }
        });
    }
}

export { accordion };