function ratingWords() {
    rating = localStorage.getItem('rating');
    document.getElementById('rating-out-of-five').innerHTML = `You selected ${rating} out of 5`;
}; 