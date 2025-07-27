document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const planButtons = document.querySelectorAll('.choose-plan');

    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update hidden input
            const hiddenField = document.getElementById('selected-plan');
            if (hiddenField) {
                hiddenField.value = selectedPlan;
            }

            // Pre-fill message box (if empty)
            const messageBox = document.getElementById('message-box');
            if (messageBox && messageBox.value.trim() === '') {
                messageBox.value = `I’m interested in the "${selectedPlan}" plan. Please tell me more.`;
            }
        });
    });
});