
function startAnimation() {
    let textWidth = document.querySelector('#text-holder h1').offsetWidth; // Get the width of the text
    let windowWidth = window.innerWidth; // Get the window width
  
    gsap.fromTo("#text-holder h1", 
      { x: windowWidth }, // Start off-screen on the right
      { 
        x: -textWidth, // Move it to the left end
        duration: 15, // Duration of the movement (adjust for speed)
        ease: "linear", // Smooth and constant movement
        repeat: -1, // Infinite repeat
        onRepeat: () => {
          gsap.set("#text-holder h1", { x: windowWidth }); // Reset to start position on the right
        }
      }
    );
  }
  
  startAnimation();
