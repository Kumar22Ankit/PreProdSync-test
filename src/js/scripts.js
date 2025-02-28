document.addEventListener('DOMContentLoaded', function() {
    // Function to validate login form
    const validateLoginForm = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            return false;
        }
        errorMessage.textContent = '';
        return true;
    };

    // Event listener for login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }

    // Function to handle responsive navigation
    const toggleNav = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    };

    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }
});