var title = document.title;
var title2 = 'DalunCAR | WRÓĆ DO NAS!'

window.addEventListener("blur", function () { 
    document.title = title2;
});

window.addEventListener("focus", function(){ 
    document.title = title; 
});