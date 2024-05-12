document.addEventListener("DOMContentLoaded", function () {
    // Get references to sidebar elements and the main window
    const loginElement = document.getElementById("loginB");
    const signupElement = document.getElementById("signupB");
  
    // Get references to content divs
    const loginContent = document.getElementById("loginContent");
    const signupContent = document.getElementById("signupContent");
    // Function to hide all content divs
    function hideAllContent() {
      loginContent.style.display = "none";
      signupContent.style.display = "none";

    }
  
    // Event listeners for sidebar elements
    loginElement.addEventListener("click", function () {
      console.log("login");
      hideAllContent();
      loginContent.style.display = "block";
     
    });
  
    signupElement.addEventListener("click", function () {
      console.log("signup");
      hideAllContent();
      signupContent.style.display = "block";
     
    });
});