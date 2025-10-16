document.getElementById("verifyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const otp = document.getElementById("otp").value;
  if (otp.trim().length !== 6 || isNaN(otp)) {
    alert("Please enter a valid 6-digit OTP.");
  } else {
    alert("OTP verified successfully. Logging you in...");
    // Add actual login logic here
  }
});
function home(){
window.location.href="home.html";
alert("login succesfully");
}
