document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const forgotModal = document.getElementById('forgotModal');
    const closeModal = document.querySelector('.close-modal');
    const toast = document.getElementById('toast');

    // Event Listeners
    registerBtn.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        forgotModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        forgotModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === forgotModal) {
            forgotModal.style.display = 'none';
        }
    });

    // Form Submissions
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Simple validation
        if (password !== confirmPassword) {
            showToast('Passwords do not match!', 'error');
            return;
        }
        
        if (password.length < 6) {
            showToast('Password must be at least 6 characters!', 'error');
            return;
        }
        
        // In a real app, you would send this data to your server
        console.log('Registration Data:', { name, email, password });
        showToast('Registration successful!', 'success');
        
        // Reset form
        this.reset();
        container.classList.remove("right-panel-active");
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            showToast('Please fill in all fields!', 'error');
            return;
        }
        
        // In a real app, you would send this data to your server
        console.log('Login Data:', { email, password });
        showToast('Login successful! Redirecting...', 'success');
        
        // Reset form
        this.reset();
        
        // Simulate redirect
        setTimeout(() => {
            // window.location.href = 'dashboard.html';
            showToast('Redirect would happen here', 'info');
        }, 1500);
    });

    document.getElementById('forgotForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('resetEmail').value;
        
        if (!email) {
            showToast('Please enter your email!', 'error');
            return;
        }
        
        // In a real app, you would send this to your server
        console.log('Password Reset Email:', email);
        showToast('Password reset link sent to your email!', 'success');
        
        // Reset form and close modal
        this.reset();
        forgotModal.style.display = 'none';
    });

    // Helper function to show toast notifications
    function showToast(message, type = 'info') {
        toast.textContent = message;
        toast.className = 'toast show';
        
        // Add type class for styling
        if (type === 'error') {
            toast.style.backgroundColor = '#ff4b2b';
        } else if (type === 'success') {
            toast.style.backgroundColor = '#4CAF50';
        } else if (type === 'info') {
            toast.style.backgroundColor = '#2196F3';
        }
        
        // Hide after 3 seconds
        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
        }, 3000);
    }
});