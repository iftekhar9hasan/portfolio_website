const typed = new Typed('.multiple_text', {
  string: ['Fronted Developer','YouTuber','Blogger'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});





function showOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.classList.add("hidden");
}

function displayMessage() {
  var clickMessage = document.querySelector('.click-message');
  clickMessage.style.display = 'block';
}

function hideMessage() {
  var clickMessage = document.querySelector('.click-message');
  clickMessage.style.display = 'none';
}


const form = document.getElementById('emailForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const mailtoLink = `mailto:iftekharhasan05@gmail.com?subject=Email from Portfolio Website&body=${encodeURIComponent(emailMessage)}`;

  window.location.href = mailtoLink;
}); 


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
