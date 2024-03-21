document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const sendOrdersForm = document.getElementById("send-orders-form");
    const showContactFormBtn = document.getElementById("show-contact-form");
    const showSendOrdersFormBtn = document.getElementById("show-send-orders-form");
  
    showContactFormBtn.addEventListener("click", function() {
      toggleForm(contactForm);
    });
  
    showSendOrdersFormBtn.addEventListener("click", function() {
      toggleForm(sendOrdersForm);
    });
  
    function toggleForm(form) {
      if (form.style.maxHeight) {
        form.style.maxHeight = null;
      } else {
        form.style.maxHeight = form.scrollHeight + "px";
      }
    }
});
