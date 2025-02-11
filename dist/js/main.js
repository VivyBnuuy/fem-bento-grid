"use strict";

// Global variables
// Viewport width and breakpoints
let browserWidth = window.innerWidth;
let tabletBreakpoint = 1067;
let mobileBreakpoint = 753;

// -------------------- Card 3 animation begin --------------------

// Get elements from the graph
let barElements = document.getElementsByClassName("card3__graph__bars__bar");
let activecontElement = document.getElementsByClassName("card3__graph__active")[0];
let dayElements = document.getElementsByClassName("card3__graph__days-day");

// Add event listeners to the days in the graph
function dayElementsListener() {
    for (let i = 0; i < 7;) {
        dayElements[i].addEventListener("click", updateBars);
        i++;
    }
}

document.onload = dayElementsListener();

// Update values for the bars depending on which day was clicked
function updateBars(e) {
    // Get which element was clicked
    let tgt = e.currentTarget;

    // Arrays for the height values for the bars
    let mondayValues = ["50px", "60px", "140px", "100px", "120px", "70px", "55px", "85px"];
    let tuesdayValues = ["42px", "89px", "110px", "74px", "43px", "75px", "140px", "102px"];
    let wednesdayValues = ["55px", "64px", "89px", "43px", "49px", "100px", "140px", "74px"];
    let thursdayValues = ["63px", "42px", "55px", "72px", "140px", "63px", "55px", "41px"];
    let fridayValues = ["89px", "100px", "120px", "140px", "73px", "44px", "68px", "82px"];
    let saturdayValues = ["110px", "140px", "47px", "68px", "87px", "65px", "46px", "56px"];
    let sundayValues = ["103px", "75px", "54px", "67px", "72px", "89px", "140px", "70px"];

    // Reset the styles for all possible selected days on click
    for (let i = 0; i < 7;) {
        dayElements[i].style = "font-weight: unset; color: unset; background-color: unset; padding: unset;";
        i++
    }

    // Apply styles to the selected day on click
    tgt.style = "font-weight: 600; color: var(--red-dark); background-color: var(--red-light); border-radius: 16px; padding: 3.5px 9px;";

    switch (true) {
        // Monday
        case (tgt == dayElements[0]): {
            for (let i = 0; i < 8;) {
                // Bar updates
                barElements[i].style.height = mondayValues[i];
                i++

                // Update browserWidth
                browserWidth = window.innerWidth;

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 2 / 2 / 4; margin: 0 0 0 9px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 2 / 2 / 4; margin: 0 0 0 9px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 2 / 2 / 4; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Tuesday
        case (tgt == dayElements[1]): {
            for (let i = 0; i < 8;) {
                // Update bars to values for Tuesday
                barElements[i].style.height = tuesdayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Wednesday
        case (tgt == dayElements[2]): {
            for (let i = 0; i < 8;) {
                barElements[i].style.height = wednesdayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Thursday
        case (tgt == dayElements[3]): {
            for (let i = 0; i < 8;) {
                barElements[i].style.height = thursdayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1/4/3/6; margin: 0 0 0 5px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 4 / 2 / 6; margin: 0 0 0 5px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 4 / 2 / 6; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Friday
        case (tgt == dayElements[4]): {
            for (let i = 0; i < 8;) {
                barElements[i].style.height = fridayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1/3/3/5; margin: 0 0 0 7px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 3 / 2 / 5; margin: 0 0 0 7px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 3 / 2 / 5; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Saturday
        case (tgt == dayElements[5]): {
            for (let i = 0; i < 8;) {
                barElements[i].style.height = saturdayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1/1/3/3; margin: 0 0 0 11px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 1 / 2 / 3; margin: 0 0 0 7px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 1 / 2 / 3; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }

        // Sunday
        case (tgt == dayElements[6]): {
            for (let i = 0; i < 8;) {
                barElements[i].style.height = sundayValues[i];
                i++

                // Breakpoints for all 3 layouts
                switch(true) {
                    // Desktop
                    case (browserWidth >= tabletBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Tablet
                    case (browserWidth <= tabletBreakpoint && browserWidth >= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }

                    // Mobile
                    case (browserWidth <= mobileBreakpoint): {
                        activecontElement.style = "grid-area: 1 / 6 / 2 / 8; margin: 0 0 0 1px;";
                        break;
                    }
                }
            }

            break;
        }
    }
}

// -------------------- Card 3 animation end --------------------


// -------------------- Card 5 animation begin --------------------

// Adjust socials animation with current card width
let card5ElementWidth = document.getElementsByClassName("card5")[0].clientWidth;
let card5Socials = document.getElementsByClassName("card5__socials-container")[0];

// Add event listeners for the card socials container element
card5Socials.addEventListener("mouseover", card5AnimationIn);
card5Socials.addEventListener("mouseout", card5AnimationOut);

// Mouseover animation
function card5AnimationIn() {
    // Get browser width & set breakpoints
    browserWidth = window.innerWidth;

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