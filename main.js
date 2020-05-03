function projectDetails(name, details) {
	document.getElementById("projectName").innerHTML = name;
	document.getElementById("projectDetails").innerHTML = details;
}

function sendEmail() {
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "shirishak04@gmail.com",
    Password : "france04",
    To : 'shirishak04@gmail.com',
    From : "shirishak04@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}

//shirishak04@gmail.com
//france04