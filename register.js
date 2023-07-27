document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form field values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (!username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Perform additional validation if needed
    // ...

    // Submit the registration data
    submitRegistration(username, email, password);

    // Redirect the user to index.html upon successful registration
    window.location.href = 'index.html';
  });

  function submitRegistration(username, email, password) {
    // Here, you can perform additional tasks like making an API request to register the user
    // You can replace the console.log statements with your actual registration logic

    console.log('Submitting registration...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // You can also display a success message or perform other actions
    // Example:
    // alert('Registration successful!');
  }
  