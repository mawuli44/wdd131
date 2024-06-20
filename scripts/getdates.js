const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;