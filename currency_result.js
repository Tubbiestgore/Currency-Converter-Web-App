// Retrieve result from sessionStorage
const formattedResult = sessionStorage.getItem('conversionResult');
const conversionResult = document.getElementById('conversionResult');
conversionResult.textContent = formattedResult;

// Redirect back to the currency converter page when clicking the button
document.getElementById('backButton').addEventListener('click', () => {
window.location.href = 'currency_converter.html';
});