// Array of images, their corresponding titles, and blog links
const images = [
    {
        src: 'https://www.thepositivepsychologypeople.com/wp-content/uploads/2023/05/week-11-blog-image.jpg',  
        title: 'What We Accept In Ourselves, We Accommodate In Others',  
        blog: 'https://www.thepositivepsychologypeople.com/week-11-what-we-accept-in-ourselves-we-accommodate-in-others/'
    },
    {
        src: 'https://www.thepositivepsychologypeople.com/wp-content/uploads/2023/05/week-9-600-400.jpg',  
        title: 'Perfection  The Only Goal We Complete After Life',  
        blog: 'https://www.thepositivepsychologypeople.com/week-9-perfection-the-only-goal-we-complete-after-life/'
    },
    {
        src: 'https://www.thepositivepsychologypeople.com/wp-content/uploads/2023/02/Andrew-week-3-blog-image-small.jpg',  
        title: 'At The Heart Of Winter The Promise Of Spring',  
        blog: 'https://www.thepositivepsychologypeople.com/week-3-at-the-heart-of-winter-the-promise-of-spring/'
    }
];

document.getElementById('randomize-button').addEventListener('click', () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);
    
    // Select a random image and its corresponding blog link and title
    const randomImage = images[randomIndex];

    // Get the image element
    const imageElement = document.getElementById('random-image');

    // Add the rotate-fade class to trigger the animation
    imageElement.classList.add('rotate-fade');

    // Update the image source after the animation reaches halfway (0.75 seconds)
    setTimeout(() => {
        imageElement.src = randomImage.src;
    }, 750);  // Change the image halfway through the animation

    // Remove the rotate-fade class after the animation ends (1.5 seconds)
    setTimeout(() => {
        imageElement.classList.remove('rotate-fade');
        
        // Update the button text after the animation completes
        const buttonElement = document.getElementById('randomize-button');
        buttonElement.textContent = 'Pick Another Card';
    }, 1500);  // Match the duration of the animation (1.5 seconds)

    // Update the title text
    const titleElement = document.getElementById('image-title');
    titleElement.textContent = randomImage.title;

    // Update the "Read More" button link and display it
    const readMoreButton = document.getElementById('read-more-button');
    readMoreButton.href = randomImage.blog; // Link to the relevant blog
    readMoreButton.style.display = 'inline-block'; // Show the button
});