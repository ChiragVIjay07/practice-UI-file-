document.addEventListener('DOMContentLoaded', () => {

    
    const bmiForm = document.getElementById('bmiForm');

    if (bmiForm) {
    bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = 'Please check your inputs (must be positive numbers).';
return;
}

        
const bmi = weight / (height * height); 
const roundedBMI = bmi.toFixed(1);
let category = '';

    
if (bmi < 18.5) {
category = 'Underweight';
} else if (bmi <= 24.9) {
category = 'Normal';
} else if (bmi <= 29.9) {
category = 'Overweight';
} else {
category = 'Obese';
}

resultDiv.innerHTML = `Your BMI is **${roundedBMI}**. **${category}**`;}); }

    
const animatedElements = document.querySelectorAll('.fade-element');
    
function checkScroll() {
animatedElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;
if (elementTop < (window.innerHeight * 0.75)) {
element.classList.add('scrolled');
}
});
}

 window.addEventListener('scroll', checkScroll);
    checkScroll(); 
    
const appointmentForm = document.getElementById('appointmentForm');

if (appointmentForm) {
appointmentForm.addEventListener('submit', function(event) {
event.preventDefault(); 
            
const statusDiv = document.getElementById('appointment-status');
statusDiv.textContent = 'Appointment request received! We will confirm by phone or email shortly.';
appointmentForm.reset();
});
}
    
    
});