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

            // Update message box and highlight it
            const messageBox = document.getElementById('message-box');
            if (messageBox) {
                messageBox.value = `I’m interested in the "${selectedPlan}" plan. Please tell me more.`;
                messageBox.classList.add('message-highlight');

                // Remove animation class after animation completes
                setTimeout(() => {
                    messageBox.classList.remove('message-highlight');
                }, 1300);
            }
        });
    });
});