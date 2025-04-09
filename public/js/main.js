/**
 * Main JavaScript file for Laser Technology Quiz
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes
    const animatedElements = document.querySelectorAll('.card, .btn-primary, .btn-secondary');
    animatedElements.forEach(element => {
        element.classList.add('animate-fadeIn');
    });

    // Enable tooltips for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.dataset.tooltip) {
            button.addEventListener('mouseenter', (e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'absolute bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-10 -ml-2 z-10';
                tooltip.textContent = button.dataset.tooltip;
                button.style.position = 'relative';
                button.appendChild(tooltip);
            });

            button.addEventListener('mouseleave', () => {
                const tooltip = button.querySelector('.bg-gray-800');
                if (tooltip) {
                    button.removeChild(tooltip);
                }
            });
        }
    });

    // Add form validation for login and registration
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            
            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('border-red-500');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = field.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('p');
                        errorMsg.className = 'text-red-500 text-xs mt-1 error-message';
                        errorMsg.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.classList.remove('border-red-500');
                    
                    // Remove error message if it exists
                    const errorMsg = field.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        field.parentNode.removeChild(errorMsg);
                    }
                }
            });
            
            // Validate email format
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    valid = false;
                    emailField.classList.add('border-red-500');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = emailField.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('p');
                        errorMsg.className = 'text-red-500 text-xs mt-1 error-message';
                        errorMsg.textContent = 'Please enter a valid email address';
                        emailField.parentNode.appendChild(errorMsg);
                    } else {
                        errorMsg.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            // Validate password length
            const passwordField = form.querySelector('input[type="password"]');
            if (passwordField && passwordField.value.trim() && form.id === 'registerForm') {
                if (passwordField.value.length < 8) {
                    valid = false;
                    passwordField.classList.add('border-red-500');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = passwordField.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('p');
                        errorMsg.className = 'text-red-500 text-xs mt-1 error-message';
                        errorMsg.textContent = 'Password must be at least 8 characters long';
                        passwordField.parentNode.appendChild(errorMsg);
                    } else {
                        errorMsg.textContent = 'Password must be at least 8 characters long';
                    }
                }
            }
            
            if (!valid) {
                e.preventDefault();
            }
        });
    });
}); 