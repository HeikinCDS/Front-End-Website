
const foods = [
    { name: "Nasi Lemak", img: "top10/nasi_lemak.jpg", desc: "Fragrant rice with sambal, eggs, peanuts, and anchovies.", link: "https://share.google/images/qufs0SzGAFEVLw5sl" },
    { name: "Char Kway Teow", img: "top10/char_kway_teow.jpg", desc: "Stir-fried noodles with prawns, egg, and Chinese sausage.", link: "https://share.google/images/pLmwmRzQ0JSGJ5shP" },
    { name: "Roti Canai", img: "top10/roti_canai.jpg", desc: "Flaky flatbread served with dhal or curry.", link: "https://share.google/images/NUlY5jxxduZ5aJBEn" },
    { name: "Satay", img: "top10/satay.jpg", desc: "Grilled skewered meat served with peanut sauce.", link: "https://share.google/images/ZfrBoO1PHjrkWMq1d" },
    { name: "Sarawak Laksa", img: "top10/sarawak_laksa.jpg", desc: "Spicy noodle soup with coconut milk or sour tamarind.", link: "https://share.google/images/K8SmHVc4XAr40pnQk" },
    { name: "Hainanese Chicken Rice", img: "top10/chicken_rice.jpg", desc: "Poached chicken with fragrant rice and chili sauce.", link: "https://share.google/images/cm4v9rqqCELADf2wF" },
    { name: "Mee Goreng Mamak", img: "top10/mee_goreng.jpg", desc: "Spicy fried noodles with egg, tofu, and seafood.", link: "https://share.google/images/k41GRjgVoXSPXLB2R" },
    { name: "Nasi Kandar", img: "top10/nasi_kandar.jpg", desc: "Rice with mixed curries and side dishes.", link: "https://share.google/images/Y82wTXy0O0ABW87HJ" },
    { name: "Teh Tarik", img: "top10/teh_tarik.jpg", desc: "Popular Malaysian milk tea, 'pulled' for frothiness.", link: "https://share.google/images/EftUUPvdNhOQqoDI1" },
    { name: "Cendol", img: "top10/cendol.jpg", desc: "Iced dessert with coconut milk, green jelly, and palm sugar.", link: "https://share.google/images/6x50X9oZuZ0WMXkR0" }
];


$(document).ready(function () {
    let topFood = foods[0];
    let topOneHTML = `
        <div class="col-12">
          <div class="food-card position-relative top-one">
            <span class="rank-badge rank-1">Top 1</span>
            <img src="${topFood.img}" class="food-image" alt="${topFood.name}">
            <div class="p-3">
              <h3>${topFood.name}</h3>
              <p>${topFood.desc}</p>
              <p>Source: ${topFood.link}</p>
            </div>
          </div>
        </div>
      `;
    $("#topOne").html(topOneHTML);

    let foodHTML = "";
    $.each(foods.slice(1), function (index, food) {
        let rankClass = "rank-default";
        if (index === 0) rankClass = "rank-2";
        else if (index === 1) rankClass = "rank-3";

        foodHTML += `
          <div class="col-md-4 mb-4">
            <div class="food-card position-relative">
              <span class="rank-badge ${rankClass}">Top ${index + 2}</span>
              <img src="${food.img}" class="food-image" alt="${food.name}">
              <div class="p-3">
                <h5>${food.name}</h5>
                <p>${food.desc}</p>
                <p>Source: ${food.link}</p>
              </div>
            </div>
          </div>
        `;
    });
    $("#foodList").html(foodHTML);
});