const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked");

    Email.send({
        SecureToken: "85a5e1be-bb94-4421-a4bb-513fccb48274",
        To: 'shankerr7780@gmail.com',
        From: "shankerr7780@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
});