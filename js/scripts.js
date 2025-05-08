// File: js/scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your request has been submitted. We will contact you shortly!");
        form.reset();
      });
    }
  });
  // File: js/scripts.js

  function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart.`);
  }
  
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tableBody = document.getElementById("cart-items");
    const totalAmount = document.getElementById("cart-total");
  
    if (!tableBody || !totalAmount) return;
  
    tableBody.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
      `;
      tableBody.appendChild(row);
      total += item.price;
    });
  
    totalAmount.textContent = `Total: ₹${total}`;
  }
  
  
  function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
    alert("Cart has been cleared.");
  }
  