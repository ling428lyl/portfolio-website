const myEmail = document.getElementById('myEmail');

myEmail.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  const emailText = myEmail.innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    alert('Email address copied: ' + emailText);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});
