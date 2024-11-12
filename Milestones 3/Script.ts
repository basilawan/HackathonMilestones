const form = document.getElementById('resume-form') as HTMLFormElement; 
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
  const formData = new FormData(form);

  const resumeHTML = `
  <h2>Personal Information</h2>
  
  <h3>Name</h3>
  <p>${formData.get('name')}</p>
  <h3>Email</h3>
  <p>${formData.get('email')}</p> 
  <h3>Phone</h3>
  <p>${formData.get('phone')}</p>
  <h3>Linkedin</h3>
  <p>${formData.get('linkedin')}</p>
    
  <h2>Education</h2>
  <p>${formData.get('education')}</p>

  <h2>Work Experience</h2>
  <p>${formData.get('experience')}</p>

  <h2>Skills</h2>
  <p>${formData.get('skills')}</p>
  `;

  resumeOutput.innerHTML = resumeHTML;

});