    // Dish data with local image file paths
    const dishInfoMap = {
      "Nasi Lemak": {
        image: "recipes/Nasi_LemakD.jpg",
        description: "Malaysia's national dish: fragrant coconut rice served with spicy sambal, fried peanuts, anchovies, cucumber, and egg.",
        price: "RM3–8",
        time: "Morning"
      },
      "Ikan Badar Bakar": {
        image: "recipes/Ikan_BakarD.png",
        description: "Charcoal-grilled badar fish wrapped in banana leaves, marinated in a spicy tamarind-chili paste. Smoky, bold, and deeply nostalgic.",
        price: "RM10–18",
        time: "Evening"
      },
      "Satay": {
        image: "recipes/SatayD.png",
        description: "Grilled skewers of marinated meat served with peanut sauce, cucumber, and rice cakes.",
        price: "RM0.80–1.50 per stick",
        time: "Evening"
      },
      "Mee Udang Muar": {
        image: "recipes/Mee_Bandung_MuarD.png",
        description: "Juicy prawns in a rich, spicy broth over yellow noodles from Muar.",
        price: "RM8–15",
        time: "Lunch"
      },
      "Char Kuey Teow": {
        image: "recipes/Char_Kuey_TeowD.png",
        description: "Flat rice noodles stir-fried with prawns, egg, bean sprouts, and Chinese sausage.",
        price: "RM6–12",
        time: "Evening"
      },
      "Nasi Kerabu": {
        image: "recipes/Nasi_KerabuD.png",
        description: "Blue rice served with herbs, salted egg, fish crackers, and spicy coconut-based gravy.",
        price: "RM5–10",
        time: "Morning"
      },
      "Satar": {
        image: "recipes/SatarD.png",
        description: "Spiced fish paste wrapped in banana leaves and grilled over charcoal.",
        price: "RM3–6",
        time: "Afternoon"
      },
      "Gulai Tempoyak Ikan Patin": {
        image: "recipes/Gulai_Tempoyak_Ikan_PatinD.png",
        description: "Catfish simmered in fermented durian curry - a bold Pahang delicacy.",
        price: "RM12–20",
        time: "Lunch"
      },
      "Hor Fun": {
        image: "recipes/Hor_FunD.png",
        description: "Silky flat rice noodles in light egg gravy or dry-fried with beef.",
        price: "RM6–10",
        time: "Brunch"
      },
      "Siew Pau": {
        image: "recipes/Siew_PauD.png",
        description: "Flaky baked buns filled with savory BBQ pork or chicken.",
        price: "RM2–3 each",
        time: "Tea Time"
      },
      "Chicken Rice Ball": {
        image: "recipes/Chicken_Rice_BallD.png",
        description: "Poached chicken served with rice shaped into compact balls - Melakan specialty.",
        price: "RM8–14",
        time: "Lunch"
      },
      "Otak-otak": {
        image: "recipes/OtakD.png",
        description: "Spiced fish custard grilled in banana leaves - Johor's signature.",
        price: "RM0.80–1.20 per piece",
        time: "Afternoon"
      },
      

    };

    // Storage for reviews
    const reviewData = {};
    Object.keys(dishInfoMap).forEach(dish => reviewData[dish] = []);

    // Render stars function
    function renderStars(avg) {
      if (!avg || isNaN(avg)) return "☆☆☆☆☆";
      const fullStars = Math.floor(avg);
      const hasHalf = avg % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

      return '★'.repeat(fullStars) + (hasHalf ? '⭐' : '') + '☆'.repeat(emptyStars);
    }

    // Render all dishes with reviews
    function renderSummary(searchTerm = '') {
      const container = document.getElementById('reviewDisplay');
      container.innerHTML = '';

      Object.keys(dishInfoMap)
        .filter(dish => dish.toLowerCase().includes(searchTerm.toLowerCase()))
        .forEach(dish => {
          const reviews = reviewData[dish];
          const avgRating = reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length)
            : 0;

          // Get latest 3 reviews
          const latestReviews = reviews.slice(-3).reverse();
          const reviewsHTML = latestReviews.length > 0
            ? latestReviews.map(r => `
                <div class="review-snippet">
                  <strong>${'★'.repeat(r.rating)}</strong> "${r.review}"
                </div>
              `).join('')
            : '<div class="no-reviews">No reviews yet. Be the first to review!</div>';

          const info = dishInfoMap[dish];

          container.innerHTML += `
            <div class="dish-card">
              <img src="${info.image}" alt="${dish}" class="dish-image" 
                   onerror="this.src='https://via.placeholder.com/400x250/ead9c7/362601?text=${encodeURIComponent(dish)}'">
              <div class="dish-content">
                <h3 class="dish-title">${dish}</h3>
                <div class="rating-display">
                  <div class="stars">${avgRating > 0 ? renderStars(avgRating) : '☆☆☆☆☆'}</div>
                  <div class="rating-text">
                    ${avgRating > 0 ? `${avgRating.toFixed(1)} stars` : 'No ratings yet'} 
                    (${reviews.length} review${reviews.length !== 1 ? 's' : ''})
                  </div>
                </div>
                <div class="dish-info">
                  <p>${info.description}</p>
                  <p><strong>💰 Price:</strong> ${info.price}</p>
                  <p><strong>⏰ Best Time:</strong> ${info.time}</p>
                </div>
                <div class="recent-reviews">
                  <h4>Recent Reviews:</h4>
                  ${reviewsHTML}
                </div>
              </div>
            </div>
          `;
        });

      if (container.innerHTML === '') {
        container.innerHTML = '<div class="no-reviews">No dishes found matching your search.</div>';
      }
    }

    // Handle form submission
    document.getElementById('reviewForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const dish = document.getElementById('dish').value;
      const rating = parseFloat(document.getElementById('rating').value);
      const review = document.getElementById('review').value.trim();

      if (!dish || !rating || !review) {
        alert('Please fill in all fields!');
        return;
      }

      // Add review to data
      reviewData[dish].push({ rating, review, date: new Date() });

      // Show success message
      const successMsg = document.getElementById('successMessage');
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 3000);

      // Re-render and reset form
      renderSummary(document.getElementById('searchInput').value);
      this.reset();
    });

    // Handle search
    document.getElementById('searchInput').addEventListener('input', function (e) {
      renderSummary(e.target.value);
    });

    // Add some sample reviews
    reviewData["Nasi Lemak"].push(
      { rating: 5, review: "Best breakfast ever! The sambal was perfectly spicy." },
      { rating: 4, review: "Authentic taste, reminds me of my grandmother's cooking." }
    );
    reviewData["Ikan Badar Bakar"].push(
  { rating: 5, review: "Smoky, spicy, and fresh—just perfect with sambal belacan." },
    );
    reviewData["Char Kuey Teow"].push(
      { rating: 5, review: "Amazing wok hei! The prawns were so fresh." },
      { rating: 4, review: "Great smoky flavor, just like in Penang." }
    );
    reviewData["Satay"].push(
      { rating: 5, review: "Perfect charcoal flavor and the peanut sauce was divine!" }
    );
reviewData["Mee Udang Muar"].push(
  { rating: 5, review: "Huge prawns and rich broth, worth every bite." },
  { rating: 4, review: "Delicious, though a little too spicy for me." },
  { rating: 5, review: "Authentic flavor, generous seafood portion." }
);

reviewData["Nasi Kerabu"].push(
  { rating: 5, review: "The blue rice was stunning and the herbs were so fresh." },
  { rating: 4, review: "Unique flavors, especially the budu sauce." }
);

reviewData["Satar"].push(
  { rating: 5, review: "Smoky banana leaf wrapped fish, absolutely delicious." },
  { rating: 5, review: "Fresh and flavorful, loved the spices." },
  { rating: 3, review: "Good but slightly too dry." }
);

reviewData["Gulai Tempoyak Ikan Patin"].push(
  { rating: 5, review: "Rich, creamy, and tangy from the tempoyak—amazing!" }
);

reviewData["Hor Fun"].push(
  { rating: 5, review: "Silky smooth noodles with flavorful gravy." },
  { rating: 4, review: "Tasty, though the sauce was a bit salty." },);

reviewData["Siew Pau"].push(
  { rating: 5, review: "Crispy, flaky pastry with juicy BBQ pork filling." },
  { rating: 4, review: "Delicious snack, though a bit too sweet." }
);

reviewData["Chicken Rice Ball"].push(
  { rating: 5, review: "Rice balls were firm and tasty." }
  
);

reviewData["Otak-otak"].push(
  { rating: 5, review: "The smoky flavor was amazing, loved every bite." }
);

    // Initial render
    renderSummary();