document.addEventListener('DOMContentLoaded', function() {
    const featuredImage = document.getElementById('featured-image');
    const imageInfo = document.getElementById('image-info');
    const thumbnailList = document.getElementById('thumbnail-list');

    // Define an array of image objects
    const images = [
        { filename: 'flowers-pink', alt: 'Sunflowers', title: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany' },
        { filename: 'flowers-purple', alt: 'Poppies', title: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany' },
        { filename: 'flowers-yellow', alt: 'Daffodils', title: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany' },
        { filename: 'flowers-white', alt: 'Sentmaring Park', title: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany' },
        { filename: 'flowers-yellow', alt: 'Market in Münster', title: 'Market in Münster, North Rhine-Westphalia, Germany' }
    ];

    // Dynamically build the thumbnail list
    images.forEach(function(image, index) {
        const listItem = document.createElement('li');
        const img = document.createElement('img');

        img.src = `images/${image.filename}-small.jpg`;
        img.alt = image.alt;
        img.width = 240;
        img.height = 160;

        listItem.appendChild(img);
        thumbnailList.appendChild(listItem);

        // Add click event listener to each thumbnail
        img.addEventListener('click', function() {
            // Update the featured image and information
            featuredImage.src = `images/${image.filename}-large.jpg`;
            featuredImage.alt = image.alt;
            imageInfo.textContent = image.title;

            // Remove the 'selected' class from all thumbnails
            images.forEach(function(imgObj) {
                const thumbnail = document.querySelector(`img[alt="${imgObj.alt}"]`);
                thumbnail.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked thumbnail
            img.classList.add('selected');
        });
    });
});
