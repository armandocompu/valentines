const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const catGifContainer = document.getElementById('catGifContainer');
const music = document.getElementById('music');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    // Show the cat GIF container
    catGifContainer.style.display = 'block';
    // Play the music
    music.play();
    // Hide the buttons after clicking "Yes"
    document.querySelector('.buttons').style.display = 'none';
});