//make sure the script only runs after the html code is loaded 
document.addEventListener("DOMContentLoaded", function () { 
  //help read what the user types in the search bar
  const searchInput = document.getElementById("search");
  //gives access to every food card on the page 
  const foodItems = document.querySelectorAll(".food");
  //listen to changes in the input field
  searchInput.addEventListener("input", function () {
    //make it lowertcase to type in either way capital or small letters 
    const query = searchInput.value.toLowerCase();
    //check each card on by one 
    foodItems.forEach((item) => {
      //turn the data keywords into text to search through
      const keywords = item.dataset.keywords.toLowerCase();
      //make it able to search with the card title not only the keywords
      const name = item.querySelector("h3").textContent.toLowerCase();
      //check if the word typed is inside the keywords or card title
      if (keywords.includes(query) || name.includes(query)) {
        //show the card if it matches the search input
        item.style.display = "block";
      } else {
        //hide card if it doesn't match with the input search
        item.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add-to-cart");

    if (!addButton) return;

    addButton.addEventListener("click", () => {
        const quantityInput = document.querySelector("input[placeholder='Quantity']");
        const quantity = quantityInput.value.trim();

        if (quantity === "" || isNaN(quantity) || Number(quantity) <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const foodName = addButton.dataset.foodName;
        const foodImage = addButton.dataset.foodImage;

        const item = {
            foodName,
            foodImage,
            quantity
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "cart.html";
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const userForm = document.getElementById("user-form");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        userForm.style.display = "none";
        document.getElementById("submit-order").style.display = "none";
    } else {
        cart.forEach((item) => {
        const itemHTML = `
            <div class="cart-item">
            <img src="${item.foodImage}" alt="${item.foodName}">
            <div class="details">
                <h2>${item.foodName}</h2>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
            </div>
            </div>
        `;
        cartContainer.innerHTML += itemHTML;
        });
    }

    document.getElementById("clear-cart").addEventListener("click", () => {
        localStorage.removeItem("cart");
        window.location.reload();
    });

        document.getElementById("submit-order").addEventListener("click", () => {
        // You can also access the user inputs here if needed
        const name = document.querySelector(".user-name").value.trim();
        const address = document.querySelector(".user-address").value.trim();
        const phone = document.querySelector(".user-phone").value.trim();

        // Clear cart and show confirmation
        localStorage.removeItem("cart");
        document.getElementById("main-content").innerHTML = "<p style='font-size: 24px; color: green;'>The order has been sent.</p>";
    });
    });
