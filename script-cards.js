window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 0) {
    header.classList.add('scrolling');
  } else {
    header.classList.remove('scrolling');
  }
});

//Color changing for cards
function setColorByGenre(genre) {
  const quoteCards = document.querySelectorAll('.quote-card');
  quoteCards.forEach(quoteCard => {
    quoteCard.style.backgroundColor = getColorByGenre(genre);
  });
}

function getColorByGenre(genre) {
  switch (genre) {
    case 'inspirational':
      return '#82B74B'; // Green
    case 'funny':
      return '#F5A623'; // Orange
    case 'love':
      return '#E71D36'; // Red
    case 'motivational':
      return '#4A90E2'; // Blue
    default:
      return '#f0f0f0'; // Default color
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const genreCards = document.querySelectorAll('.quote-category');
  genreCards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default behavior of anchor links
      const genre = card.getAttribute('href').slice(0, -5); // Get genre from href attribute
      setColorByGenre(genre);
      setTimeout(() => {
        window.location.href = card.getAttribute('href'); // Navigate to the genre page after setting color
      }, 300); // Delay the navigation slightly to allow the color change to be visible
    });
  });
});
