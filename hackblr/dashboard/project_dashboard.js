document.addEventListener("DOMContentLoaded", function () {
    // Get references to sidebar elements and the main window
    const fundingElement = document.getElementById("funding");
    const offersElement = document.getElementById("offers");
    const statisticsElement = document.getElementById("statistics");
    const interactionsElement = document.getElementById("interactions");
  
    // Get references to content divs
    const fundingContent = document.getElementById("fundingContent");
    const offersContent = document.getElementById("offersContent");
    const statisticsContent = document.getElementById("statisticsContent");
    const interactionsContent = document.getElementById("interactionsContent");
  
    // Function to hide all content divs
    function hideAllContent() {
      fundingContent.style.display = "none";
      offersContent.style.display = "none";
      statisticsContent.style.display = "none";
      interactionsContent.style.display = "none";
    }
  
    // Event listeners for sidebar elements
    fundingElement.addEventListener("click", function () {
      hideAllContent();
      fundingContent.style.display = "block";
    });
  
    offersElement.addEventListener("click", function () {
      hideAllContent();
      offersContent.style.display = "block";
    });
  
    statisticsElement.addEventListener("click", function () {
      hideAllContent();
      statisticsContent.style.display = "block";
    });
  
    interactionsElement.addEventListener("click", function () {
      hideAllContent();
      interactionsContent.style.display = "block";
    });
  });
  