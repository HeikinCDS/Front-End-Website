const $places = $("#places");
const $status = $("#status");
const searchInput = document.getElementById("searchInput");
const stateSelect = document.getElementById("stateSelect");

const staticPlaces = [
  {
    title: "Perlis – Ikan Bakar", desc: "It should come as no surprise that numerous well-known Thai cuisine are frequently seen in Perlis, the northernmost state in Peninsular Malaysia, given its strong ties to Thailand. Ikan bakar, though, is undoubtedly the most famous dish here. Charcoal-grilled fish and other meals are readily available in restaurants and kiosks, particularly in Kuala Perlis.", img: "places/ikan_bakar.jpg", links: [
      { label: "Medan Ikan Bakar (Facebook)", url: "https://www.facebook.com/pages/Medan%20Ikan%20Bakar,%20Jeti%20Kuala%20Perlis/149439581882626/#" },
      { label: "Api-Api Ikan Bakar (Facebook)", url: "https://www.facebook.com/apiapiikanbakarkualaperlis/?locale=ms_MY" },
      { label: "Nyiru Klasik Ikan Bakar (Facebook)", url: "https://www.facebook.com/NyiruKlasikanbakar/?locale=ms_MY" },
      { label: "Nyiru Klasik Ikan Bakar (Youtube)", url: "https://www.youtube.com/embed/Ricb182ySRY", type: "youtube" }
    ]
  },
  {
    title: "Kedah – Mee Udang", desc: "Mee udang is the one meal in Kedah that you should not miss if you enjoy seafood. We completely see why the locals love this prawn noodle dish so much; each serving consists of noodles coated in a generous amount of spicy, sweet tomato gravy, and is garnished with a portion of fresh prawns. The mee ketam and mee sotong are more varieties that you should definitely try.", img: "places/mee-udang.jpg", links: [
      { label: "Ombak Lara Mee Udang (Facebook)", url: "https://www.facebook.com/p/Mee-Udang-Ombak-Lara-TM-100048134634115/" },
      { label: "Selera Dataran Tsunami (Facebook)", url: "https://www.facebook.com/SeleraDataranTsunami/" },
      { label: "Warung Rumpun Mambu (Facebook)", url: "https://www.facebook.com/jaafar7421" },
      { label: "Warung Rumpun Mambu (YouTube)", url: "https://www.youtube.com/embed/uGV-NtO5TBw", type: "youtube" }
    ]
  },
  {
    title: "Penang – Char Kuey Teow", desc: "Penang is known as Malaysia's culinary capital, and it's difficult to choose just one of its specialties.  But we'd personally give the top spot to char kuey teow, a regional delicacy so well-liked that it has inspired numerous imitations outside of Penang and even Malaysia!  Who knew something so basic could taste so good? Stir-fried flat rice noodles with garlic chives, cockles, bean sprouts, prawns, egg, and chilli sauce.", img: "places/char_kway_teow.jpg", links: [
      { label: "Siam Road Char Koay Teow (Facebook)", url: "https://www.facebook.com/pages/Siam%20Road%20Char%20Koay%20Teow/176796272339439/#" },
      { label: "B.M Duck Egg Char Koay Teow (Facebook)", url: "https://www.facebook.com/pages/B.M%20Duck%20Egg%20Fried%20Kueh%20Tiao/483697418415272/" },
      { label: "Ah Leng Char Koay Teow (Facebook)", url: "https://www.facebook.com/penangahlengcharkaoyteow" },
      { label: "Siam Road Char Koay Teow (YouTube)", url: "https://www.youtube.com/embed/UIOFRkpA4I4", type: "youtube" }
    ]
  },
  {
    title: "Kelantan – Nasi Kerabu", desc: "Once a basic meal among East Coast villagers, nasi kerabu is a unique dish from the bright blue of the rice.  Blue rice, raw salad (kerabu), sambal, protein (egg, chicken, beef, or fish), and fish crackers are the main ingredients of nasi kerabu, which is also a favorite among urbanites these days in Kelantan.  Mixing the rice with the salad and sambal is the best way to enjoy the meal, even though it may appear complicated! Blue rice with raw herb salad, sambal, proteins, and crackers.", img: "places/Nasi-Kerabu-Kelantan-1.jpg", links: [
      { label: "Lieniey Nasi Kerabu Tumis (Instagram)", url: "https://www.instagram.com/lienieynasikerabutumis/" },
      { label: "Kak Ma Nasi Kerabu (Instagram)", url: "https://www.instagram.com/normaibrahim64/" },
      { label: "Nasi Kerabu Panji (Facebook)", url: "https://www.facebook.com/nasikerabupanji" },
      { label: "Nasi Kerabu Panji (Instagram)", url: "https://www.instagram.com/nasikerabupanji/" },
      { label: "Lieniey Nasi Kerabu Tumis (YouTube)", url: "https://www.youtube.com/embed/UpUdaYDryNA", type: "youtube" }
    ]
  },
  {
    title: "Terengganu – Satar", desc: "Because of its proximity to the sea, Terengganu offers a wide variety of seafood meals.  Satar is a popular food that is available here.  Fish that has been deboned and mashed is combined with desiccated coconut and a variety of herbs and spices before being wrapped in a banana leaf in the shape of a cone.  After that, each cone is skewered and cooked over charcoal, creating a smoky, spicy, and fragrant fish snack!", img: "places/satar.jpg", links: [
      { label: "Warung Aziz Satar (Instagram)", url: "https://www.instagram.com/warung_aziz_satar_kemaman/" },
      { label: "Pok Nok Satar (Facebook)", url: "https://www.facebook.com/poknorsatar" },
      { label: "Warung Otak Otak Satar Che Wan (Facebook)", url: "https://www.facebook.com/otakotakchewan" },
      { label: "Warung Otak Otak Satar Che Wan (Instagram)", url: "https://www.instagram.com/warungotakotakchewan" },
      { label: "Warung Aziz Satar (YouTube)", url: "https://www.youtube.com/embed/Sttonin85lA", type: "youtube" }
    ]
  },
  {
    title: "Pahang – Gulai Tempoyak Ikan Patin", desc: "Gulai tempoyak ikan patin, a meal that is synonymous with Pahang, uses two local staples: durian and ikan patin, both of which are abundant in the state.  Tempoyak, a fermented paste made from durian flesh, is then combined with additional spices including ginger, garlic, turmeric, galangal, and ikan patin in a curry meal.  This meal, which is savory, somewhat spicy, and fragrant, goes well with white rice.", img: "places/Gulai Tempoyak Ikan Patin.jpg", links: [
      { label: "Kancil Raja Patin (Facebook)", url: "https://www.facebook.com/kancilrajapatin" },
      { label: "Kancil Raja Patin (Instagram)", url: "https://www.instagram.com/kancilrajapatin/" },
      { label: "Selera Patin Bangau (Facebook)", url: "https://www.facebook.com/selerapatin.bangautemerloh/" },
      { label: "Gobang Maju Patin Tempoyak (Instagram)", url: "https://www.instagram.com/gobangmaju" },
      { label: "Gobang Maju Patin Tempoyak (Facebook)", url: "https://www.facebook.com/profile.php?id=100067529454971&mibextid=LQQJ4d" },
      { label: "Gobang Maju Patin Tempoyak (YouTube)", url: "https://www.youtube.com/embed/9BoNQQuq4I4", type: "youtube" }
    ]
  },
  {
    title: "Perak – Ipoh Hor Fun", desc: "With its bewildering variety of local street finds, Ipoh is undoubtedly responsible for introducing Perak to the world of food.  One of their many culinary marvels is the straightforward yet incredibly addictive Ipoh hor fun.  From the carefully simmering broth for hours to the rice noodles cooked with local spring water, every element of the dish is prepared with care.  A bowl of noodles made with the freshest ingredients will make you want to visit Ipoh again.", img: "places/ipoh_hor_fun.jpg", links: [
      { label: "Thean Chun Coffee Shop (Facebook)", url: "https://www.facebook.com/pages/Thean%20Chun%20%E5%A4%A9%E6%B4%A5%E8%8C%B6%E5%AE%A4/185205851537341/#" },
      { label: "Restaurant Moon De Moon (Facebook)", url: "https://www.facebook.com/pages/Restoran-Moon-De-Moon/416521285075841?_rdr" },
      { label: "Restoran Pulau Sembilan (Facebook)", url: "https://www.facebook.com/pages/Restoran%20Pulau%20Sembilan/314958629414491/#" },
      { label: "Thean Chun Coffee Shop (YouTube)", url: "https://www.youtube.com/embed/9BzgSq9FcY0", type: "youtube" }
    ]
  },
  {
    title: "Selangor – Satay Kajang", desc: "Although there are many different types of food in Selangor, the residents are particularly fond of their satay!  Because of its excellent reputation, Kajang's satay is likewise a must-try meal anytime you're in Selangor.  There are a variety of meats to suit your palate and go well with the typical peanut dip, from the standard chicken or beef satay to the more unusual clam or rabbit satay.", img: "places/satay.jpg", links: [
      { label: "Willy Satay (Facebook)", url: "https://www.facebook.com/WillySatayOriginalSgRamal" },
      { label: "Sate Kajang HJ Samuri (Website)", url: "https://satekajang.com.my/" },
      { label: "Zaini Satay (Website)", url: "https://zsmelawati.easy.co/" },
      { label: "Satay Hut (Instagram)", url: "https://www.instagram.com/satayhut_official" },
      { label: "Satay Hut (Facebook)", url: "https://www.facebook.com/Sedappadu" },
      { label: "Willy Satay (YouTube)", url: "https://www.youtube.com/embed/nDJBQDERDkA", type: "youtube" }
    ]
  },
  {
    title: "Negeri Sembilan – Siew Pao", desc: "Despite its humble appearance, this famous pastry from Seremban, the capital of Negeri Sembilan, is incredibly powerful.  You'll bite into the most flavorful and luscious meat filling with a flaky shell.  Nowadays, you can find various fillings including chicken and mushrooms in addition to the traditional pork, peas, and other ingredients.  You could easily eat a dozen of these siew pao in one sitting because they are flavorful and light.", img: "places/Negeri Sembilan – Siew Pao.jpg", links: [
      { label: "Seremban Kee Mei Siew Pow (Facebook)", url: "https://www.facebook.com/keemeisiewpow" },
      { label: "Siew Pow Master (Facebook)", url: "https://www.facebook.com/pages/Siew%20Pow%20Master,%20Seremban./139337569472540/#" },
      { label: "Empayar Seremban Siew Pow (Facebook)", url: "https://www.facebook.com/serembansiewpow" },
      { label: "Empayar Seremban Siew Pow (Instagram)", url: "https://www.instagram.com/serembansiewpow/" },
      { label: "Empayar Seremban Siew Pow (YouTube)", url: "https://www.youtube.com/embed/DI1GZY11uEA", type: "youtube" }
    ]
  },
  {
    title: "Melaka – Chicken Rice Balls", desc: "The chicken itself is typically the highlight of chicken rice, but Melaka isn't the same!  The rice balls you get in place of the usual plate of rice are what make this dish so famous in Melaka.  It's not surprising that there are vendors selling these chicken rice balls all over Melaka; they're not only entertaining to eat, but they also taste pretty damn good.", img: "places/chinese_rice_balls.jpg", links: [
      { label: "Kedai Kopi Chung Wah" },
      { label: "Hoe Kee Chicken Rice (Facebook)", url: "https://www.facebook.com/HoeKeeChickenRice/" },
      { label: "Ee Ji Ban Chicken Rice Balls (Facebook)", url: "https://www.facebook.com/profile.php?id=100039658643499" },
      { label: "Kedai Kopi Chung Wah (YouTube)", url: "https://www.youtube.com/embed/qL2Hbav3How", type: "youtube" }
    ]
  },
  {
    title: "Johor – Otak-Otak", desc: "You must visit Muar if you are ever in Johor because they offer what is possibly the tastiest otak-otak you will ever taste!  You can eat them as snacks or as a side dish for your main course. They are delicious fish and/or other seafood combined with a variety of spices, wrapped in coconut leaves, and cooked over hot coals.", img: "places/Johor – Otak-Otak.jpg", links: [
      { label: "Xiao Mei Famous Muar Otak-Otak (Facebook)", url: "https://www.facebook.com/xiaomeiotakmuar" },
      { label: "Otak-Otak Cheng Boi (Facebook)", url: "https://www.facebook.com/p/%E9%98%BF%E6%A2%85%E9%BA%BB%E5%9D%A1%E4%B9%8C%E8%BE%BE-Otak-Otak-Cheng-Boi-61552468568276/" },
      { label: "Otak Shiduoli (Facebook)", url: "https://www.facebook.com/profile.php?id=100054473770687&rdid=1apLHQ4PjlAJSztO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ATfHBRLDi%2F#" },
      { label: "Otak Shidouli (YouTube)", url: "https://www.youtube.com/embed/a8kGB1jKFUE", type: "youtube" }
    ]
  },
  {
    title: "Sabah – Tuaran Mee", desc: "Tuaran mee is arguably Sabah's most famous noodle dish.  The peculiar yellow egg noodles that are cooked before being covered with the dish's distinctive sauce and ingredients are essential to a delicious bowl of tuaran mee.  Typical toppings include green veggies, egg rolls, and grilled pork.", img: "places/tuaran mee.jpg", links: [
      { label: "Tuaran Mee Restoran" },
      { label: "Restoran Lok Kyun" },
      { label: "Seng Hing Coffee Shop (Facebook)", url: "https://www.facebook.com/pages/Kedai-Kopi-Seng-Hing/155823381139947" },
      { label: "Tuaran Mee Restoran (YouTube)", url: "https://www.youtube.com/embed/RT6QxeIQA94", type: "youtube" }
    ]
  },
  {
    title: "Sarawak – Sarawak Laksa", desc: "It's safe to assume that Sarawakians are extremely proud of the state-named laksa dish.  What makes Sarawak laksa so unique is the unique flavor of the curry paste used to prepare it.  After the rice noodles have been soaked in the flavorful broth, omelette strips, chicken, prawns, and fresh veggies are added on top.  Sarawak laksa is so delicious that it was featured on Anthony Bourdain's No Reservations!", img: "places/sarawak_laksa.jpg", links: [
      { label: "Choon Hui Cafe (Facebook)", url: "https://www.facebook.com/pages/Choon%20Hui%20Cafe/200693226619277/#" },
      { label: "Poh Lam Laksa (Facebook)", url: "https://www.facebook.com/p/Chong-Choon-Cafe-%E6%B3%89%E6%98%A5%E8%8C%B6%E5%AE%A4-100063749372195/" },
      { label: "Mom's Laksa Kopitiam (Instagram)", url: "https://www.instagram.com/momslaksasatok/?hl=en" },
      { label: "Choon Hui Cafe (YouTube)", url: "https://www.youtube.com/embed/o5IAIvR3ie0", type: "youtube" }
    ]
  }
];

$(document).on('click', '.place-image', function () {
  const imgSrc = $(this).attr('src'); // Get image URL

  // Create overlay with full-size image
  const overlay = $(`
    <div class="image-overlay">
      <img src="${imgSrc}" alt="Zoomed image">
    </div>
  `);

  // Add overlay to body
  $('body').append(overlay);

  // Close overlay on click
  overlay.on('click', function () {
    $(this).remove();
  });
});

function renderStatic(list) {
  $places.empty();
  list.forEach(function (p, idx) {
    const card = $(
      `
          <div class="place-card">
            <img class="place-image" alt="Place image">
            <div class="place-content">
              <h4 class="place-title"></h4>
              <div class="place-meta"></div>
              <div class="recommended"></div>
              <div class="place-actions"></div>
            </div>
          </div>
          `
    );
    card.find(".place-image").attr("src", p.img).attr("alt", p.title);
    card.find(".place-title").text(p.title);
    card.find(".place-meta").text(p.desc);
    const $actions = card.find(".place-actions");
    const $recommended = card.find(".recommended");

    if (Array.isArray(p.links)) {
      // Facebook Page Plugin – first valid official FB page only
      const fbLink = p.links.find(link =>
        link.url &&
        /facebook\.com/i.test(link.url) &&
        !/\/people\/|\/groups\//i.test(link.url) &&
        !/unofficial|fanpage|community|random/i.test(link.label.toLowerCase())
      );

      if (fbLink) {
        $actions.append(`
              <div class="fb-page"
              data-href="${fbLink.url}"
              data-tabs=""
              data-width=""
              data-height="120"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"></div>
            `);
      }

      // Instagram embed – first valid post/reel only
      const igLink = p.links.find(link => link.url && /instagram\.com/i.test(link.url) && /\/p\/|\/reel\//i.test(link.url));
      if (igLink) {
        $actions.append(`
              <blockquote class="instagram-media" 
              data-instgrm-permalink="${igLink.url}" 
              data-instgrm-version="14" 
              style="margin:8px 0"></blockquote>
            `);
      }

      // YouTube embed – allow multiple videos
      const ytLinks = p.links.filter(link => link.url && /youtube\.com\/embed/i.test(link.url));
      ytLinks.forEach(ytLink => {
        $actions.append(`
              <div class="youtube-embed" style="margin-top:10px">
              <h5 style="font-size:18px; font-weight:bold; margin:6px 0; text-align: center;">
                ${ytLink.label.replace("(YouTube)", "")}
              </h5>
              <iframe width="360" height="215"
              src="${ytLink.url}"
              title="${ytLink.label}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
              </iframe>
              </div>
            `);
      });

      // Recommended list (icons + links)
      const listItems = p.links.map(function (link) {
        if (!link) return '';
        const isFb = /facebook\.com/i.test(link.url);
        const isIg = /instagram\.com/i.test(link.url);
        const isYt = /youtube\.com/i.test(link.url);

        // Skip YouTube links in the list (already embedded separately)
        if (isYt) return '';

        // Proper inline SVGs with paths (so logos show)
        const icon = isFb
          ? '<svg class="icon-fb" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12"/></svg>'
          : isIg
            ? '<svg class="icon-ig" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7m10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10m-5 2.3A4.7 4.7 0 0 0 7.3 11 4.7 4.7 0 0 0 12 15.7 4.7 4.7 0 0 0 16.7 11 4.7 4.7 0 0 0 12 6.3m0 2c1.5 0 2.7 1.2 2.7 2.7S13.5 13.7 12 13.7 9.3 12.5 9.3 11 10.5 8.3 12 8.3m4.8-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"/></svg>'
            : isYt
              ? '<svg class="icon-yt" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10 15l5.2-3L10 9v6z"/><path fill="currentColor" d="M21 6.5s-.2-1.4-.8-2.1c-.6-.6-1.5-.9-2.1-1-2.6-.2-6.1-.2-6.1-.2s-3.5 0-6.1.2c-.6.1-1.5.4-2.1 1C3.2 5.1 3 6.5 3 6.5s-.2 1.7-.2 3.4v1.2c0 1.7.2 3.4.2 3.4s.2 1.4.8 2.1c.6.6 1.5.9 2.1 1 2.6.2 6.1.2 6.1.2s3.5 0 6.1-.2c.6-.1 1.5-.4 2.1-1 .6-.7.8-2.1.8-2.1s.2-1.7.2-3.4V9.9c0-1.7-.2-3.4-.2-3.4z"/></svg>'
              : '<svg class="icon-web" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2m1 17.9V15h3l-4-8-4 8h3v4.9a8 8 0 1 1 2 0z"/></svg>';

        if (link.url) {
          return `<li><a class="social-link" href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}">${icon}</a><span>${link.label}</span></li>`;
        }
        return `<li class="no-icon"><span>${link.label}</span></li>`;
      }).filter(Boolean).join('');

      if (listItems) {
        $recommended.html(`<div class="recommended-title">Recommended Places:</div><ul class="recommended-list">${listItems}</ul>`);
      }
    } else {
      if (p.fb && p.fb !== "#") $actions.append(`<a href="${p.fb}" target="_blank" rel="noopener">Facebook</a>`);
      if (p.ig && p.ig !== "#") $actions.append(`<a href="${p.ig}" target="_blank" rel="noopener">Instagram</a>`);
    }

    $places.append(card);
  });

  $status.text(list.length + ' places');

}

function applyFilters() {
  const q = searchInput.value.toLowerCase();
  const state = stateSelect.value;
  const filtered = staticPlaces.filter(function (p) {
    const matchesText = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const placeState = p.title.split(" – ")[0];
    const matchesState = state === "all" ? true : (placeState === state);
    return matchesText && matchesState;
  });

  renderStatic(filtered);

}

searchInput.addEventListener("input", applyFilters);
stateSelect.addEventListener("change", applyFilters);

renderStatic(staticPlaces);