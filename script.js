// Page navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link and corresponding page
            const target = e.currentTarget;
            if (target && target.classList) {
                target.classList.add('active');
            }

            const dataPage = target && target.getAttribute ? target.getAttribute('data-page') : null;
            if (dataPage) {
                const pageId = dataPage + '-page';
                const pageEl = document.getElementById(pageId);
                if (pageEl && pageEl.classList) {
                    pageEl.classList.add('active');
                }
            }
        });
    });

    // Update the current time in milliseconds
    function updateTime() {
        const timeElement = document.querySelector('[data-testid="test-user-time"]');
        if(timeElement) {
            timeElement.textContent = Date.now();
        }
    }

    // Initial update
    updateTime();

    // Update every 100ms for a more dynamic feel
    setInterval(updateTime,100);

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinksContainer.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksContainer.classList.contains('show')) {
                    navLinksContainer.classList.remove('show');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    if (contactForm) {
        // timeout id for auto-hiding the success message
        let successTimeoutId = null;
        // Cache inputs and their error elements
        const fullNameInput = document.getElementById('full-name');
        const fullNameError = document.querySelector('[data-testid="test-contact-error-name"]');

        const emailInput = document.getElementById('email');
        const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const subjectInput = document.getElementById('subject');
        const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');

        const messageInput = document.getElementById('message');
        const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

        // Helper functions to clear or show error states
        function clearError(inputEl, errorEl) {
            if (!inputEl || !errorEl) return;
            if (inputEl.classList.contains('error')) {
                inputEl.classList.remove('error');
            }
            if (errorEl.classList.contains('show')) {
                errorEl.classList.remove('show');
            }
        }

        function showError(inputEl, errorEl) {
            if (!inputEl || !errorEl) return;
            inputEl.classList.add('error');
            errorEl.classList.add('show');
        }

        // Live input listeners to remove errors as soon as the field becomes valid
        if (fullNameInput && fullNameError) {
            fullNameInput.addEventListener('input', () => {
                if (fullNameInput.value.trim()) {
                    clearError(fullNameInput, fullNameError);
                }
            });
        }

        if (emailInput && emailError) {
            emailInput.addEventListener('input', () => {
                if (emailPattern.test(emailInput.value.trim())) {
                    clearError(emailInput, emailError);
                }
            });
        }

        if (subjectInput && subjectError) {
            subjectInput.addEventListener('input', () => {
                if (subjectInput.value.trim()) {
                    clearError(subjectInput, subjectError);
                }
            });
        }

        if (messageInput && messageError) {
            messageInput.addEventListener('input', () => {
                if (messageInput.value.trim().length >= 10) {
                    clearError(messageInput, messageError);
                }
            });
        }

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Reset previous error states
            const errorMessages = document.querySelectorAll('.error-message');
            const inputs = document.querySelectorAll('.form-control');

            errorMessages.forEach(msg => msg.classList.remove('show'));
            inputs.forEach(input => input.classList.remove('error'));

            if (successMessage) successMessage.classList.remove('show');

            let isValid = true;

            // Validate full name
            if (!fullNameInput || !fullNameInput.value.trim()) {
                showError(fullNameInput, fullNameError);
                isValid = false;
            }

            // Validate email
            if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
                showError(emailInput, emailError);
                isValid = false;
            }

            // validate subject
            if (!subjectInput || !subjectInput.value.trim()) {
                showError(subjectInput, subjectError);
                isValid = false;
            }

            // Validate message
            if (!messageInput || !messageInput.value.trim() || messageInput.value.trim().length < 10) {
                showError(messageInput, messageError);
                isValid = false;
            }

            // If the form is valid, show the inline success message at the top of the form
            if (isValid) {
                if (successMessage) {
                    // clear any previous timeout
                    if (successTimeoutId) {
                        clearTimeout(successTimeoutId);
                        successTimeoutId = null;
                    }

                    successMessage.classList.add('show');
                    // scroll the form into view for visibility
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // reset the form fields and focus the first input
                    try {
                        contactForm.reset();
                        if (fullNameInput && fullNameInput.focus) fullNameInput.focus();
                    } catch (err) {
                        // ignore reset errors
                    }

                    // auto-hide after 5 seconds
                    successTimeoutId = setTimeout(() => {
                        successMessage.classList.remove('show');
                        successTimeoutId = null;
                    }, 5000);
                }
            }
        });
    }
})

