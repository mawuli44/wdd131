ocument.addEventListener("DOMContentLoaded", () => {
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