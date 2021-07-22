/* *************** */
/* LOADER */
/* *************** */
$(window).on('load', function () {
    $('.loader').hide();
})

/* ------------------- */
/* ANIMATE ON SCROLL */
/* ------------------- */
AOS.init({
    offset: 120,
    duration: 1500,
});

/* *************** */
/* LINK ACTIVATION */
/* *************** */
const activeIt = document.querySelectorAll('.activeIt');
function linkAction(){
    activeIt.forEach(n => n.classList.remove('active'))
    this.classList.add('active');
}
activeIt.forEach(n => n.addEventListener('click', linkAction));

/* *************** */
/* HAMBURGER ACTIVATE */
/* *************** */
const mobileNav = () => {
    const hamBurger = document.querySelector(".hamBurger");
    const nav = document.querySelector(".mainNav");
    // activate mobile nav
    hamBurger.addEventListener("click", function(){
        hamBurger.classList.toggle("toggle");
        nav.classList.toggle("mobileNav-active")
    });
    // deactivate mobile nav
    const navItem = document.querySelectorAll('.navItem');
    var i;
    for (i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('click',() => {
        nav.classList.remove("mobileNav-active");
        hamBurger.classList.remove("toggle");
        });
    }
}
mobileNav();

/* *************** */
/* MIXIT UP */
/* *************** */
var conf = document.querySelector('.filterItems');
var mixer = mixitup(conf);

/* *************** */
/* CONNECT FORM */
/* *************** */
var form = document.getElementById("connectForm");
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("formStatus");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            status.value = "submitted!";
            form.reset()
        },setTimeout(response => {
            status.value = "send message"
        }, 3000)).catch(error => {
            status.value = "try again!"
        });
    }
    form.addEventListener("submit", handleSubmit)