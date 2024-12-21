const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct(){
    const searchValue = searchInput.value.toLowerCase(); //becz we've also initialize data-category in small
    const productItems = document.querySelectorAll(".product-item");

    const activeCategory = document.querySelector(".category-btn.active").dataset.category;

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase(); // Get the title of the product
        const category = item.dataset.category; // Get the category from the dataset

        // Show product if title includes search value or if search value is empty
        if((title.includes(searchValue) || searchValue ==="") && 
        (category === activeCategory || activeCategory === 'all')){
            item.style.display="block";
        }
        else{
            item.style.display="none";

        }
    });

}

function setCategory(e){
    categoryBtns.forEach(btn => btn.classList.remove("active")); // Remove 'active' class from all category buttons
        e.target.classList.add("active"); // Add 'active' class to the clicked button
        filterProduct();
}

// Event listeners for search
searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);

// Attach event listeners to category buttons
categoryBtns.forEach(btn =>{
    btn.addEventListener("click", setCategory);
});

filterProduct(); // Initial filtering when the page loads