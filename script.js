// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(() => {
        console.log('Service Worker Registered');
      }).catch(error => {
        console.error('Service Worker Registration failed:', error);
      });
    });
  }
  
  // Fetch Fox Image on button click
  document.addEventListener("DOMContentLoaded", () => {  // Ensure DOM is loaded
    const fetchFoxButton = document.getElementById("fetchFox");
    const foxImage = document.getElementById("foxImage");
  
    fetchFoxButton.addEventListener("click", async () => {
      try {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        foxImage.src = data.image;
        foxImage.style.display = "block";  // Show the image
      } catch (error) {
        console.error('Error fetching the fox image:', error);
        foxImage.style.display = "none";  // Hide the image if there's an error
      }
    });
  });
