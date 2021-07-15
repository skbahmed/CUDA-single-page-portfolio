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
        }).catch(error => {
            status.value = "try again!"
        });
    }
    form.addEventListener("submit", handleSubmit)