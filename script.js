const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click',function(even){
        console.log(even)
        console.log(even.target)
        if(even.target.id==='grey'){
            body.style.backgroundColor=even.target.id;
        }
        if(even.target.id==='brown'){
            body.style.backgroundColor=even.target.id;
        }
        if(even.target.id==='blue'){
            body.style.backgroundColor=even.target.id;
        }
        if(even.target.id==='yellow'){
            body.style.backgroundColor=even.target.id;
        }
    });
});