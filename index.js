// // Add your code here
function submitData(name, email){
    return fetch ('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            "Content-Type" : "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name : name,
            email : email
        })
    })
    .then(res => res.json())
    .then(data => {
        const newId = data.id;
        document.body.innerHTML += `<p>New user ID: ${newId}</p>`;
      })
      .catch(error => {
        console.log(error.message);
         document.body.append(error.message);
         });
}



// function submitData(name, email) {
//     const userData = {name: name, email: email};
  
//     return fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       document.body.append(data.id);
//     })
//     .catch(error => {
//       console.log(error.message);
//       document.body.append(error.message);
//     });
//   }