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
            const messageBox = document.getElementById('message-box');
            const hiddenField = document.getElementById('selected-plan');

            // Scroll to message box
            if (messageBox) {
                messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

                setTimeout(() => {
                    messageBox.value = `I’m interested in the "${selectedPlan}" plan. Please tell me more.`;
                    messageBox.focus(); // 👈 autofocus cursor inside textarea
                    messageBox.classList.add('message-highlight');

                    setTimeout(() => {
                        messageBox.classList.remove('message-highlight');
                    }, 1300);
                }, 500);
            }

            if (hiddenField) {
                hiddenField.value = selectedPlan;
            }
        });
    });
});

document.querySelectorAll('.contact-cta').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const messageBox = document.querySelector('#contact textarea');
        const message = this.getAttribute('data-message');

        messageBox.value = message;

        // Highlight message box
        messageBox.classList.add('highlight-box');

        // Scroll to form and focus
        messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            messageBox.focus();
        }, 500);

        // Remove highlight after 3 seconds
        setTimeout(() => {
            messageBox.classList.remove('highlight-box');
        }, 3000);
    });
});