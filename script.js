document.addEventListener('DOMContentLoaded', function() {
    setInterval(typeWriterEffect, 4000); // เรียกใช้ typeWriterEffect ทุก 5 วินาที
});

function typeWriterEffect() {
    const text = document.querySelector('.GG');
    const textContent = text.textContent;
    text.textContent = '';

    for (let i = 0; i < textContent.length; i++) {
        const char = textContent.charAt(i);
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.1}s`; // กำหนดค่า delay สำหรับแต่ละตัวอักษร
        text.appendChild(span);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var creditImages = [
        "logo/13/credit1.png",
        "logo/13/credit2.png",
        "logo/13/credit3.png",
    ];
    var currentIndex = 0;
    var creditImage = document.getElementById("creditImage");

    function changeCreditImage() {
        currentIndex = (currentIndex + 1) % creditImages.length;
        creditImage.src = creditImages[currentIndex];
    }

    setInterval(changeCreditImage, 5000);
});
   
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function checkPassword() {
    var password = document.getElementById("password").value;
    // เช็ครหัสผ่าน ในที่นี้จะเป็นตัวอย่างเท่านั้น
    if (password === "24062550") {
        window.location.href = "admin.html"; // ลิงก์ถัดไป
    } else {
        alert("รหัสผ่านไม่ถูกต้อง");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showModal();
});

function showModal() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'block';
}

// ปิด Modal เมื่อคลิกที่พื้นหลัง
var modal = document.getElementById('welcomeModal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal();
    }
});

// ปิด Modal โดยซ่อนแบบฟังก์ชัน
function hideModal() {
    modal.style.display = 'none';
}

var creditImages = [
    "logo/13/credit1.png",
    "logo/13/credit2.png",
    "logo/13/credit3.png",
    "logo/13/credit4.png",
    "logo/13/credit5.png",
    "logo/13/credit6.png",
    "logo/13/credit7.png",
    "logo/13/credit8.png",
    "logo/13/credit9.png",
];
var currentIndex = 0;
var creditImage = document.getElementById("creditImage");

function changeCreditImage() {
    currentIndex = (currentIndex + 1) % creditImages.length;
    creditImage.src = creditImages[currentIndex];
}

setInterval(changeCreditImage, 5000);

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
typeWriterEffect();
});

function typeWriterEffect() {
const text = document.querySelector('.GG');
const textContent = text.textContent;
text.textContent = '';

for (let i = 0; i < textContent.length; i++) {
const char = textContent.charAt(i);
const span = document.createElement('span');
span.textContent = char;
span.style.animationDelay = `${i * 0.1}s`; // Adjust the delay as needed
text.appendChild(span);
}
}
document.addEventListener('DOMContentLoaded', function() {
    var creditImages = [
        "logo/13/credit1.png",
        "logo/13/credit2.png",
        "logo/13/credit3.png",
        "logo/13/credit4.png",
        "logo/13/credit5.png",
        "logo/13/credit6.png",
        "logo/13/credit7.png",
        "logo/13/credit8.png",
        "logo/13/credit9.png",
    ];
    var currentIndex = 0;
    var creditImage = document.getElementById("creditImage");

    function changeCreditImage() {
        currentIndex = (currentIndex + 1) % creditImages.length;
        creditImage.src = creditImages[currentIndex];
    }

    setInterval(changeCreditImage, 5000);
});
function showPopup() {
document.getElementById("popup").style.display = "block";
}

function hidePopup() {
document.getElementById("popup").style.display = "none";
}

function checkPassword() {
var password = document.getElementById("password").value;
if (password === "24062550") {
window.location.href = "https://script.google.com/macros/s/AKfycbwj3ZzrBQzG22lYU6SPQxXGlhXVupk0x0H274gEFqaMqyvAiGNv5-zOANXqiax7Pqtj/exec"; // ลิงก์ถัดไป
} else {
alert("รหัสผ่านไม่ถูกต้อง");
}
}
document.addEventListener('DOMContentLoaded', typeWriterEffect);
document.addEventListener('DOMContentLoaded', function() {
  typeWriterEffect();
});

function typeWriterEffect() {
  const text = document.querySelector('.GG');
  const textContent = text.textContent;
  text.textContent = '';

  for (let i = 0; i < textContent.length; i++) {
    const char = textContent.charAt(i);
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`; // Adjust the delay as needed
    text.appendChild(span);
  }
}