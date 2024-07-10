class MobileSlider {
    constructor(sliderWrapper, interval = 5000, duration = 300) {
        this.sliderWrapper = sliderWrapper; // Wrapper element containing the slider
        this.interval = interval; // Time interval for auto sliding

        this.duration = duration; // Transition duration
        this.transitionProperty = `transform ${this.duration / 1000}s ease-in-out`; // Transition property

        this.slider = this.sliderWrapper.querySelector('.slider'); // The slider element
        this.slider.style.transition = this.transitionProperty; // Set the transition property
        this.items = this.slider.querySelectorAll('.slide-item'); // All slide items

        // Create indicators for each slide
        const indicatorsDiv = document.createElement('div'); // Create a div for indicators
        indicatorsDiv.classList.add('indicators'); // Add class to the indicators div

        const numberOfIndicatorsToAdd = this.items.length; // Number of indicators based on slide items

        // Create a document fragment to hold the indicators
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < numberOfIndicatorsToAdd; i++) {
            const newIndicator = document.createElement('i'); // Create each indicator element
            fragment.appendChild(newIndicator); // Append indicator to the fragment
        }

        // Append the fragment containing all indicators to the indicatorsDiv
        indicatorsDiv.appendChild(fragment);

        this.sliderWrapper.appendChild(indicatorsDiv); // Append indicators div to the slider wrapper

        this.indicators = this.sliderWrapper.querySelectorAll('.indicators i'); // Get all indicators
        this.indicators[0].classList.add('active'); // Set the first indicator as active

        // Clone the first and last slides for circular effect
        this.firstItem = this.items[0].cloneNode(true); // Clone the first item
        this.lastItem = this.items[this.items.length - 1].cloneNode(true); // Clone the last item

        this.slider.appendChild(this.firstItem); // Append clone of first item at the end
        this.slider.insertBefore(this.lastItem, this.items[0]); // Insert clone of last item at the beginning

        // Update the items NodeList after cloning
        this.items = this.slider.querySelectorAll('.slide-item');

        this.currentIndex = 1; // Start at the second element (first original slide)
        this.startX = 0; // Starting X coordinate for touch events
        this.currentX = 0; // Current X coordinate for touch events
        this.isDragging = false; // Flag to check if the user is dragging
        this.autoSlideInterval = null; // Interval ID for auto sliding

        this.init(); // Initialize the slider
    }

    // Initialize the slider
    init() {
        this.updateSlide(); // Set the initial position of the slide
        this.startAutoSlide(); // Start the auto slide functionality
        this.addEventListeners(); // Add event listeners for user interactions
    }

    // Update the position of the slide
    updateSlide() {
        const offset = -this.currentIndex * 100; // Calculate the offset
        //this.slider.style.transition = transitionProperty; // Set the transition
        this.slider.style.transform = `translateX(${offset}%)`; // Set the transform property
    }

    // Update the position of the slide without transition effect to make a seamless loop
    updateSlideNoTrans() {
        setTimeout(() => {
            this.slider.style.transition = 'none'; // Disable transition
            this.updateSlide(); // Update the slide position

            setTimeout(() => {
                this.slider.style.transition = this.transitionProperty;
            }, this.duration / 5); // Re-enable transition
        }, this.duration); // Wait for the transition to finish (and then disable transition)
    }

    // Show the next slide
    showNext() {
        this.currentIndex++; // Increment the index
        this.updateSlide(); // Update the slide position

        // Check if the current index is the last cloned slide
        if (this.currentIndex === this.items.length - 1) {
            this.currentIndex = 1; // Reset index to the first original slide
            this.updateSlideNoTrans(); // Update the position of the slide without transition effect to make a seamless loop
        }

        this.updateIndicators(); // Update the indicators
    }

    // Show the previous slide
    showPrev() {
        this.currentIndex--; // Decrement the slide index
        this.updateSlide(); // Update the slide position

        // Check if the current index is the first cloned slide
        if (this.currentIndex === 0) {
            this.currentIndex = this.items.length - 2; // Reset index to the last original slide
            this.updateSlideNoTrans();
        }

        this.updateIndicators(); // Update the indicators
    }

    // Handle the start of a touch event
    handleTouchStart(event) {
        this.startX = event.touches[0].clientX; // Record the starting X coordinate
        this.isDragging = true; // Set the dragging flag to true
        this.slider.style.transition = 'none'; // Disable transition while dragging
        this.stopAutoSlide(); // Stop the auto slide functionality
    }

    // Handle the movement during a touch event
    handleTouchMove(event) {
        if (!this.isDragging) return; // If not dragging, return
        
        this.currentX = event.touches[0].clientX; // Record the current X coordinate
        const moveX = this.currentX - this.startX; // Calculate the distance moved
        const offset = -this.currentIndex * 100 + (moveX / this.slider.clientWidth) * 100; // Calculate the offset
        this.slider.style.transform = `translateX(${offset}%)`; // Set the transform property
    }

    // Handle the end of a touch event
    handleTouchEnd(event) {
        this.isDragging = false; // Set the dragging flag to false
        this.slider.style.transition = this.transitionProperty; // Re-enable transition
        const moveX = this.currentX - this.startX; // Calculate the distance moved
        
        // Determine if the slide should change based on the movement
        if (moveX > 50) {
            this.showPrev(); // Show the previous slide if moved sufficiently left
        } else if (moveX < -50) {
            this.showNext(); // Show the next slide if moved sufficiently right
        } else {
            this.updateSlide(); // Snap back to the current item if the swipe is not significant
        }

        this.startAutoSlide(); // Restart the auto slide functionality
    }

    // Update the indicators to reflect the current slide
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.remove('active'); // Remove the active class from the active indicator
            if (this.currentIndex - 1 === index) {
                indicator.classList.add('active'); // Add the active class to the current indicator
            }
        });
    }

    // Start the auto slide functionality
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.showNext(), this.interval); // Change slide at specified interval
    }

    // Stop the auto slide functionality
    stopAutoSlide() {
        clearInterval(this.autoSlideInterval); // Clear the interval
    }

    // Add event listeners for user interactions
    addEventListeners() {
        // Add touch event listeners to the slider
        this.slider.addEventListener('touchstart', (event) => this.handleTouchStart(event));
        this.slider.addEventListener('touchmove', (event) => this.handleTouchMove(event));
        this.slider.addEventListener('touchend', (event) => this.handleTouchEnd(event));
    }
}

// Export the MobileSlider class as a module
export default MobileSlider;