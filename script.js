
// Declare variables of different data types
let myString = "Hello, World!"; // string
let myNumber = 42; // number
let myBoolean = true; // boolean

// Define and call functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Use console.log() to print output and debug code
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);

console.log("Add 10 + 5:", add(10, 5));
console.log("Subtract 10 - 5:", subtract(10, 5));
console.log("Divide 10 / 5:", divide(10, 5));
console.log("Multiply 10 * 5:", multiply(10, 5));

// DOM elements
const messageElement = document.getElementById('message');
const inputField = document.getElementById('inputField');
const updateButton = document.getElementById('updateButton');
const toggleButton = document.getElementById('toggleButton');
const highlightButton = document.getElementById('highlightButton');

// Event listeners
updateButton.addEventListener('click', () => {
    const newText = inputField.value;
    messageElement.textContent = newText;
});

toggleButton.addEventListener('click', () => {
    messageElement.classList.toggle('hidden');
});

highlightButton.addEventListener('click', () => {
    messageElement.classList.toggle('highlight');
});

// Chart.js example
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
