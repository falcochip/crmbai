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
        button.addEventListener('click', function(e) {
            const selectedPlan = this.getAttribute('data-plan');
            const messageBox = document.getElementById('message-box');
            const hiddenField = document.getElementById('selected-plan');

            // Smooth scroll to the message box
            if (messageBox) {
                messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Slight delay to allow scroll before highlighting
                setTimeout(() => {
                    messageBox.value = `I’m interested in the "${selectedPlan}" plan. Please tell me more.`;
                    messageBox.classList.add('message-highlight');

                    // Remove the animation class after it runs
                    setTimeout(() => {
                        messageBox.classList.remove('message-highlight');
                    }, 1300);
                }, 500);
            }

            // Set hidden field (immediately okay)
            if (hiddenField) {
                hiddenField.value = selectedPlan;
            }
        });
    });
});