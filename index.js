// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify({
     name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((newUser) => {
      const newUserId = newUser.id;
      const newUserInfo = document.createElement('p');
      newUserInfo.textContent = `Your ID is ${newUserId}`;
      document.body.appendChild(newUserInfo);
    })
    .catch((err) => {
         console.error('Error:', err);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${err.message}`;
      document.body.appendChild(errorMessage);
      console.log('Error:', err);
    });
}
submitData('Steve', 'steve@steve.com');
