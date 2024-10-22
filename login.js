document.addEventListener('DOMContentLoaded', () => {
console.log('Script loaded!');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const validUsername = 'Namo';
const validPassword = 'alina';

function handleLogin() {
    event.preventDefault();
  
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (username === validUsername && password === validPassword) {
      window.location.href = 'hub.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
  document.querySelector('button[type="submit"]').addEventListener('click', handleLogin);

const guestButton = document.getElementById('guest-button');

guestButton.addEventListener('click', () => {
    console.log('Guest button clicked!');
    window.location.href = 'home.html';
});});