const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    tab.classList.add('active');

    // Hide all content
    contents.forEach(content => content.classList.add('hidden'));
    // Show corresponding content
    const contentId = tab.getAttribute('data-tab');
    document.getElementById(contentId).classList.remove('hidden');
  });
});
