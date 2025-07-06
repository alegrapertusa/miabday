document.addEventListener('DOMContentLoaded', () => {
  // Fade-in logic for the title
  const title = document.getElementById('main-title');
  if (title) {
    if (!localStorage.getItem('titleFadedIn')) {
      title.classList.add('fade-in');
      localStorage.setItem('titleFadedIn', 'true');
    }
  }

  // Password logic
  if (localStorage.getItem('birthdayAccess') === 'granted') {
    return;
  }
  const password = prompt("Enter the secret code (hint: how old are you?):");
  if (password === '20') { // Replace with your shared joke
    localStorage.setItem('birthdayAccess', 'granted');
  } else {
    alert("Good try... you're a year older!");
    window.location.reload();
  }
});