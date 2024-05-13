import React, { Fragment, useState } from 'react';
import gallery1 from '../../Assets/images/Frame 11.png';
import gallery2 from '../../Assets/images/arrowright.png';
import gallery3 from '../../Assets/images/arrowleft.png';
import gallery4 from '../../Assets/images/Rectangle 18.png';
import gallery5 from '../../Assets/images/Rectangle 18.png'
import gallery6 from '../../Assets/images/Rectangle 20.png'
import gallery7 from '../../Assets/images/Rectangle 21.png'
import gallery8 from '../../Assets/images/Frame 11.png'
import gallery9 from '../../Assets/images/frsme.png'
import gallery10 from '../../Assets/images/4.png'

const Residence = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const mainImages = [
        gallery5,
        gallery6,
        gallery7
    ];
    const childImages = [
        gallery8,
        gallery9,
        gallery10
    ];


    const imageTexts1 = ["Next", "Next", "Next"]; 
    const imageTexts2 = ["Swimming Pool", "Gardening", "Residences"]; 
    const headingTexts = ["The Residences", "Swimming Pool", "Gardening"];

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % mainImages.length);
        demo()
        toggleScrollAnimation(); // Toggle the scroll animation
        checkButtonState(); // Check the state of the button after updating the image
        resetOverlayPosition(); // Reset overlay position when next button is clicked
    };

    const prevImage = () => {
        demo()
        setCurrentIndex((currentIndex - 1 + mainImages.length) % mainImages.length);
        toggleScrollAnimation();
        checkButtonState();
        updateOverlayPosition();
    };

    const demo = () => {
        const mainImage = document.getElementById("mainImage");
        const overlayImgMain = document.querySelector('.child-residence-image .overlay img'); // Overlay for main image
        const childImage = document.getElementById("childImage");
        const overlayImgChild = document.querySelector('.child-image .child-main img'); // Overlay for child image

        const overlayMain = document.querySelector('.child-residence-image .overlay');
        const overlayChild = document.querySelector('.child-image .child-main');

        if (mainImage && overlayImgMain && childImage && overlayImgChild && overlayMain && overlayChild) {
            // Update currentIndex only once
            const newIndex = currentIndex;

            // Update main image
            overlayImgMain.src = mainImages[newIndex];
            overlayImgMain.style.display = 'block';
            overlayMain.classList.add('active');
            setTimeout(function () {
                mainImage.src = mainImages[newIndex];
                overlayMain.classList.remove('active');
            }, 2000);

            // Update child image
            overlayImgChild.src = childImages[newIndex];
            overlayImgChild.style.display = 'block';
            overlayChild.classList.add('active');
            setTimeout(function () {
                childImage.src = childImages[newIndex];
                overlayChild.classList.remove('active');
            }, 2000);

            setTimeout(function () {
                var imageText = document.getElementById("imageText");
                var childText = document.getElementById("childText");
                imageText.textContent = imageTexts1[newIndex];
                childText.textContent = imageTexts2[newIndex];
            }, 2000);

            // Update heading text
            const headingText = document.getElementById("headingText");
            if (headingText) {
                headingText.textContent = headingTexts[newIndex];
            }
        }

        console.log('child1', childImage);


    };



    const updateOverlayPosition = () => {
        const overlayMain = document.querySelector(".child-residence-image .overlay");
        const overlayChild = document.querySelector(".child-image .child-main");

        // Add class to overlay elements after a delay
        setTimeout(function () {
            overlayMain.classList.add("move-left");
            overlayChild.classList.add("move-left");
        }, 20);
    };

    const resetOverlayPosition = () => {
        const overlayMain = document.querySelector(".child-residence-image .overlay");
        const overlayChild = document.querySelector(".child-image .child-main");

        // Remove class from overlay elements after a delay
        setTimeout(function () {
            overlayMain.classList.remove("move-left");
            overlayChild.classList.remove("move-left");
        }, 20);
    };

    const checkButtonState = () => {
        var prevButton = document.getElementById("prevButton");

        if (currentIndex === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
    };

    const toggleScrollAnimation = () => {
        var headingText = document.getElementById("headingText");
        if (headingText) {
            headingText.classList.toggle("animate-scroll");
            setTimeout(() => {
                headingText.classList.remove("animate-scroll");
            }, 1000); // Adjust the duration as per your requirement (in milliseconds)
        }
    };


    return (
        <Fragment>
            <section className="residence-section-wrapper" id="section5">
                <div className="residence-container">
                    <div className="child-image">
                        <img id="childImage" src={gallery1} alt="Child" />
                        <div className="child-main">
                            <img src="" alt="" />
                        </div>
                        <div className="image-text-container">
                            <p className="image-text1" id="imageText" >Next</p>
                            <p className="image-text1" id="childText">Swimming Pool</p>
                        </div>
                    </div>
                    <div className="residence-rightsection-wrapper">
                        <div className="gallery-residence-container">
                            <h5>Gallery</h5>
                            <div className="gallery-residence-buttons">
                                <div className="scroll">
                                    <h5 id="headingText">The Residences</h5>
                                </div>
                                <div className="overallellipse-image" id="ellipseButtons">
                                    <button id="prevButton" onClick={prevImage}>
                                        <img src={gallery2} alt="Previous" />
                                    </button>
                                    <button id="nextButton" onClick={nextImage}>
                                        <img src={gallery3} alt="Next" />
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="child-residence-container">
                            <div className="child-residence-para">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Porttitor tellus
                                    tempus nisl neque felis non vestibulum. Mi tristique id.
                                </p>
                                <button>View More</button>
                            </div>
                            <div className="child-residence-image">
                                <img id="mainImage" src={gallery4} alt="Main" />
                                <div className="overlay">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Residence;
