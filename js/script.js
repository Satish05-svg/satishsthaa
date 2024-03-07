document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  const sendOrdersForm = document.getElementById("send-orders-form");
  const priceListContent = document.getElementById("price-list-content");

  const showContactFormBtn = document.getElementById("show-contact-form");
  const showSendOrdersFormBtn = document.getElementById("show-send-orders-form");
  const togglePriceListBtn = document.getElementById("toggle-price-list");

  const contactResponse = document.getElementById("contact-response");
  const ordersResponse = document.getElementById("orders-response");

  showContactFormBtn.addEventListener("click", function() {
    toggleForm(contactForm);
  });

  showSendOrdersFormBtn.addEventListener("click", function() {
    toggleForm(sendOrdersForm);
  });

  togglePriceListBtn.addEventListener("click", function() {
    togglePriceList();
  });

  function toggleForm(form) {
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

  function togglePriceList() {
    if (priceListContent.style.display === "none" || priceListContent.style.display === "") {
      priceListContent.style.display = "block";
    } else {
      priceListContent.style.display = "none";
    }
  }

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Simulate form submission
    contactResponse.textContent = "Thank you for contacting us, hope we'll reach out to you soon.";
    contactResponse.style.display = "block";
    // Optional: You may clear the form fields here
    contactForm.reset();
  });

  sendOrdersForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Simulate form submission
    ordersResponse.textContent = "Thank you for sending your orders.";
    ordersResponse.style.display = "block";
    // Optional: You may clear the form fields here
    sendOrdersForm.reset();
  });

  const payNowButtons = document.querySelectorAll('.pay-now');
  payNowButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Handle pay now action
      alert('Redirecting to payment gateway...');
    });
  });
});
