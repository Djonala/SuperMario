console.log('ca marche ! ');

document.addEventListener('DOMContentLoaded',function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const prenom = document.getElementById('prenom');
            console.log(prenom.value);
        const nom = document.getElementById('nom');
            console.log(nom.value);

        const email = document.getElementById('email');
        console.log(email.value);
    });
});




// function onContentLoaded() {
//     console.log('chargement page terminé');

//     const submit = document.querySelector('input[type="submit"]');
//     console.log (submit);

//     submit.addEventListener('click',onClickSubmit);
// }


// function onClickSubmit() {
//     console.log('click submit');
// }