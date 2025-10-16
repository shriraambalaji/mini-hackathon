// script.js
document.getElementById("otpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  if (phone.trim() === "") {
    alert("Please enter a valid phone number.");
  } else {
    alert(OTP sent to ${phone});
    // You can add actual OTP logic here
  }
});
function send(){
    window.location.href="otp.html";
}
