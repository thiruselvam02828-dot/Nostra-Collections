var products = [
    {
        id: 1,
        name: "White Summer Shirt",
        occasion: "summer",
        color: "white",
        ideal: "men",
        price: 150,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        name: "Party Blue Dress",
        occasion: "party",
        color: "blue",
        ideal: "women",
        price: 220,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        name: "Red Beach Shirt",
        occasion: "beach",
        color: "red",
        ideal: "men",
        price: 180,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 4,
        name: "Cozy Winter Sweater",
        occasion: "winter",
        color: "white",
        ideal: "women",
        price: 250,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 5,
        name: "Cute Winter Wool Jacket",
        occasion: "winter",
        color: "blue",
        ideal: "men",
        price: 320,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 6,
        name: "Stylish Rainy Trench Coat",
        occasion: "rainy",
        color: "red",
        ideal: "women",
        price: 290,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 7,
        name: "Waterproof Raincoat",
        occasion: "rainy",
        color: "blue",
        ideal: "men",
        price: 210,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 8,
        name: "Floral Summer Dress",
        occasion: "summer",
        color: "white",
        ideal: "women",
        price: 200,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400"
    }
];

var productsGrid = document.getElementById("productsGrid");

// Render products function without clickable heart actions
function displayProducts(productList) {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";
    
    if (productList.length === 0) {
        productsGrid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #777;'>No products found matching your criteria.</p>";
        return;
    }

    productList.forEach(function(product) {
        var productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}">
                <i class="fa-regular fa-heart wishlist-icon"></i>
            </div>
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
        `;

        productsGrid.append(productCard);
    });
}

// Initial display
displayProducts(products);

// Search & Filter Logic
var searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        applyFilters();
    });
}

var checkboxes = document.querySelectorAll('.filter-box input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", applyFilters);
});

function applyFilters() {
    var searchValue = searchInput ? searchInput.value.toUpperCase() : "";
    
    var selectedOccasions = Array.from(document.querySelectorAll('input[name="occasion"]:checked')).map(cb => cb.value);
    var selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
    var selectedIdeals = Array.from(document.querySelectorAll('input[name="ideal"]:checked')).map(cb => cb.value);

    var filtered = products.filter(function(product) {
        var matchesSearch = product.name.toUpperCase().includes(searchValue);
        var matchesOccasion = selectedOccasions.includes("all") || selectedOccasions.includes(product.occasion);
        var matchesColor = selectedColors.includes("all") || selectedColors.includes(product.color);
        var matchesIdeal = selectedIdeals.includes("all") || selectedIdeals.includes(product.ideal);

        return matchesSearch && matchesOccasion && matchesColor && matchesIdeal;
    });

    displayProducts(filtered);
}