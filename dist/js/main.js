"use strict";

// -------------------- Card 5 animation start --------------------

// Adjust socials animation with current card width
let card5ElementWidth = document.getElementsByClassName("card5")[0].clientWidth;
let card5Socials = document.getElementsByClassName("card5__socials-container")[0];

// Add event listeners for the card socials container element
card5Socials.addEventListener("mouseover", card5AnimationIn);
card5Socials.addEventListener("mouseout", card5AnimationOut);

// Mouseover animation
function card5AnimationIn() {
    // Get browser width & set breakpoints
    let browserWidth = window.innerWidth;
    let tabletBreakpoint = 1067;
    let mobileBreakpoint = 753;

    // Set initial values for desktop as a starting point for the math
    let highestLeft = -149;
    let highestWidth = 256;

    // Update width value on mouseover
    card5ElementWidth = document.getElementsByClassName("card5")[0].clientWidth;

    // Checks which statement is true and updates left value accordingly
    switch (true) {
        // Mobile desktop animation
        case (browserWidth >= tabletBreakpoint): {
            // Get adjusted left value depending on card size and convert to string before updating
            let leftAdjust = highestLeft + ((highestWidth - card5ElementWidth) * 2);
            let slideLeft = card5ElementWidth + leftAdjust;
            let slideLeftValue = slideLeft.toString();

            // Update left position with calculated value
            card5Socials.style.left = "-" + slideLeftValue + "px";

            break;
        }

        // Tablet layout animation
        case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
            card5Socials.style.left = "-18px";

            break;
        }

        // Mobile layout animation
        case (browserWidth <= mobileBreakpoint): {
            card5Socials.style.left = "0";

            break;
        }
    }
}

// Mouseout animation/Reset to original value
function card5AnimationOut() {
    card5Socials.style.left = "0";
}

// -------------------- Card 5 animation end --------------------

