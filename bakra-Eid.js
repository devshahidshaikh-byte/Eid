// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Setup a timeline linked to scrolling on Page 1
gsap.timeline({
  scrollTrigger: {
      trigger: "#page1",
          start: "top top",
              end: "+=200%", // Extends pinning time so all texts have space to cycle
                  scrub: 1,      // Tracks mouse scroll beautifully
                      pin: true      // Locks screen in place
                        }
                        })
                        // Moves the entire stack of text lines clean up through the viewport screen
                        .to("#page1-text-wrapper", { 
                          y: "-120%", 
                            ease: "none" 
                            });
                            