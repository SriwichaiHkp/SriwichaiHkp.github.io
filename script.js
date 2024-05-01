document.addEventListener('DOMContentLoaded', function() {
    setInterval(typeWriterEffect, 5000); // เรียกใช้ typeWriterEffect ทุก 5 วินาที
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
