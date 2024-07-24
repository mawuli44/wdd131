document.addEventListener('DOMContentLoaded', function () {
    // Populate product options dynamically
    const productNameSelect = document.getElementById('productName');
    const products = ['Product A', 'Product B', 'Product C'];
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productNameSelect.appendChild(option);
    });

    // Handle form submission
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const reviewData = {};
        
        formData.forEach((value, key) => {
            reviewData[key] = value;
        });

        // Save review data to localStorage or pass it to the next page
        localStorage.setItem('reviewData', JSON.stringify(reviewData));
        
        // Redirect to review summary page
        window.location.href = 'review.html';
    });
});

// On the review summary page
document.addEventListener('DOMContentLoaded', function () {
    const reviewSummary = document.getElementById('reviewSummary');
    const reviewData = JSON.parse(localStorage.getItem('reviewData'));
    
    if (reviewData) {
        for (const [key, value] of Object.entries(reviewData)) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            reviewSummary.appendChild(p);
        }
    } else {
        reviewSummary.textContent = 'No review data found.';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedSpan = document.getElementById('lastModifiedDate');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    lastModifiedSpan.textContent = formattedDate;
});