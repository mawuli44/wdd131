document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 20;
    const windSpeed = 10;

    function calculateWindChill(temperature, windSpeed) {
        return (temperature <= 10 && windSpeed > 4.8) ? 
        Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : 'N/A';
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = (windChill !== 'N/A') ? `Windchill: ${windChill}°C` : 'Windchill: N/A';
});