let bar = document.querySelector('.fa-bars');
let navs = document.querySelector('.whole_media_nav');




let bita = "logo"
bar.addEventListener('click', () => {
    if (bita == "logo") {
        navs.style.transform = " translateX(-10%)";
        bar.classList.add("fa-xmark");
        bita = "logo_not"
    }
    else {
        bar.classList.remove("fa-xmark");
        bar.classList.add("fa-bars");
        navs.style.transform = " translateX(-100%) rotateY(360deg) rotateX(360deg) rotateZ(360deg)";
        bita = "logo";
    }
});




let photos = document.getElementsByClassName('photos');
let index = photos.length - 1;
const myInterval = setInterval(myTimer, 4500);
function look(x) {
    photos[x].style.display = "none";
};
function looki(x) {
    for (i = x; i >= 0; i--) {
        photos[i].style.display = "block";
    }
    setInterval(myTimer, 3000);
};

function myTimer() {
    if (index == 0) {
        photos[index].style.display = "none";
        index = photos.length - 1;
        looki(index);
    } else {
        let val = index;
        look(val);
        index--
    }
}

function hello() {

    let item = document.querySelectorAll('.accodian_item');
    item.forEach(element => {

        let tittle = element.querySelector('.accodian_tittle');
        let contain = element.querySelector('.accodian_contain');
        tittle.addEventListener('click', () => {

            for (var i = 0; i < item.length; i++) {
                if (item[i] != element) {
                    item[i].classList.remove('active');

                } else {

                    item[i].classList.toggle('active');

                }
            }
        })
    })
}

hello();





let smartslider = document.getElementById('smart_slider');
let dots = document.querySelectorAll('.dots li');

dots.forEach((tik, key) => {
    tik.addEventListener('click', () => {
        smartslider.style.transform = `translateX(-${(key) * 250}px)`;
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[key].classList.add('active');

    })

})


let loc = 0;
setInterval(() => {
    if (loc == dots.length) {
        loc = 0;
        smartslider.style.transform = `translateX(-${(loc) * 250}px)`;
        dots[loc-1].classList.add('active');
    }
    else {
        smartslider.style.transform = `translateX(-${(loc) * 250}px)`;

        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[loc].classList.add('active');
        loc++;
    }

},2500)

































































// gsap.from('.photos', {
//     x: 100,
//     opacity: 0,
//     stagger: 3,
//     repeat: -1,
//     scale: 1.1,
// })


// let t1=gsap.timeline();
// t1.from('.Grow_up_bands',{

// opacity:0,
// y:100,
// stagger:0.3,
// scrollTrigger:{
// trigger:".Grow_up_bands",
// start:"top 20%",
// end:"top 0%",
// }

// })



























//















