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

