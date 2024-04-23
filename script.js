<script>
        document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('logo/music/im.MP3');
    audio.loop = true;
    audio.play();
    
    showModal();
});

function showModal() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'block';
}

function hideModal() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'none';
}

// ปิด Modal เมื่อคลิกที่พื้นหลัง
var modal = document.getElementById('welcomeModal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal();
    }
});

// เปลี่ยนรูปเครดิตทุก ๆ 5 วินาที
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

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "24062550") {
        window.location.href = "https://script.google.com/macros/s/AKfycbzlZ3LMHwPSualzfm3HAmLCgSHgJQ2jnBF225yP-nUlWo7FwssNG6s9K1i1XTnqLyNS/exec"; // ลิงก์ถัดไป
    } else {
        alert("รหัสผ่านไม่ถูกต้อง");
    }
}
console.log(creditImage);


</script>