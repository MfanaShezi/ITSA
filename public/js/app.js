// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Thank you for your message. We will get back to you soon!');
      document.getElementById('contactForm').reset();
    } else {
      throw new Error(data.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Sorry, there was an error sending your message. Please try again later.');
  }
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
});
