var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var resumeHTML = "\n  <h2>Personal Information</h2>\n  \n  <h3>Name</h3>\n  <p>".concat(formData.get('name'), "</p>\n  <h3>Email</h3>\n  <p>").concat(formData.get('email'), "</p> \n  <h3>Phone</h3>\n  <p>").concat(formData.get('phone'), "</p>\n  <h3>Linkedin</h3>\n  <p>").concat(formData.get('linkedin'), "</p>\n    \n  <h2>Education</h2>\n  <p>").concat(formData.get('education'), "</p>\n\n  <h2>Work Experience</h2>\n  <p>").concat(formData.get('experience'), "</p>\n\n  <h2>Skills</h2>\n  <p>").concat(formData.get('skills'), "</p>\n  ");
    resumeOutput.innerHTML = resumeHTML;
});
