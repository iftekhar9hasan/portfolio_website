
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.sliding');
  hiddenElements.forEach((el) => observer.observe(el));
  




const textElement = document.getElementById('title1');
  const text = "Iftekhar Hasan";  
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.innerText += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); 
    }
  }
  
 

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


// This is for the Profile Picture
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".parallax-layer").forEach((el) => {
    const speed = el.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});


// for Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
