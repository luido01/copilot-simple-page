document.getElementById('image1').addEventListener('click', toggleMenu);
function toggleMenu() {
    const menu = document.getElementById('navbar');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

document.getElementById('image1').addEventListener('click', toggleMenu);
/**
 * Toggles the display of the navigation menu.
 * If the menu is currently hidden, it will be shown.
 * If the menu is currently shown, it will be hidden.
 */

/**
 * Filters the projects based on the selected category.
 * @param {string} category - The category to filter projects by.
 */
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
// Add event listener to the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display feedback to the user
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = 'Thank you for your message, ' + name + '! We will get back to you at ' + email + ' soon.';
    feedback.style.display = 'block';

    // Clear the form
    document.getElementById('contactForm').reset();
});

