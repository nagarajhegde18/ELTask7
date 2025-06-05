function fetchUserData() {
  const container = document.getElementById('user-container');
  container.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      container.innerHTML = ''; // Clear the loading message
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(userCard);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Failed to load data: ${error.message}</p>`;
    });
}

// Initial fetch on page load
window.onload = fetchUserData;
