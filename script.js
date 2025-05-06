document.getElementById('prediction-form').addEventListener('submit', function() {
    const button = this.querySelector('button');
    button.textContent = 'Predicting...';
    button.disabled = true;
});
