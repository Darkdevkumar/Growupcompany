



var slideIndex = 0;
change();
function change() {
    var i;
    var x = document.getElementsByClassName("photos");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    
    setTimeout(change, 2000);
}





function logo(){
    let lists=document.getElementById('lists');
    lists.style.display="none";
    let serch=document.getElementById('srch');
    let mag=document.getElementById('magne');
    serch.addEventListener('click',()=>{
    lists.style.display="block";
    });
    mag.addEventListener('click',()=>{
        lists.style.display="block";
        });
    
    lists.addEventListener('mouseleave',()=>{
        lists.style.display="none";
    })
}

logo();




let three =document.querySelector('.threebut');
let thor=document.querySelector('.threedot');
let cut=document.getElementById('cut');

let dots=document.getElementById('dots');
dots.addEventListener('click',()=>{
three.style.display="block";
})
cut.addEventListener('click',()=>{
three.style.display="none";
})



























function gap(){
    gsap.to('.nav_main_2',{
        position:"fixed",
        height:"35vh",
        duration:2,
        top:"0",
        scrollTrigger:{
            trigger:".nav_main_3",
            start:"top -10%",
            end:"top -20%",
            scrub:5,
        }
        })
}
gap();









