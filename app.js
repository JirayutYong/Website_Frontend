let typeString = ["Welcome to Clearnote !              "];
let i = 0;
let count =0;
let SelectedText = '';
let text ='';

(function type(){
    if(count == typeString.length){
        count = 0;
    }
    SelectedText = typeString[count];
    text = SelectedText.slice(0,++i);
    document.getElementById("typing").innerHTML = text;
    if(text.length === SelectedText.length){
        count++;
        i=0;
    }
    setTimeout(type,190);

}());

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click",function(){
    mainNav.classList.toggle('active')
})

