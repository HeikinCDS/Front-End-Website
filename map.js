function initMap() {
    const locations = [
        {
            position: { lat: 3.1432, lng: 101.7085 },
            title: "Jalan Alor Food Street",
            info: "Famous food street with countless hawker stalls"
        },
        {
            position: { lat: 3.1436, lng: 101.6973 },
            title: "Petaling Street",
            info: "Historic Chinatown area known for delicious street food"
        },
        {
            position: { lat: 3.1725, lng: 101.7000 },
            title: "Kampung Baru",
            info: "Traditional Malay village offering authentic Malay cuisine"
        },
        {
            position: { lat: 3.1487, lng: 101.6955 },
            title: "Central Market",
            info: "Cultural market with various local food vendors"
        }
    ];

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 3.1390, lng: 101.6869 },
        zoom: 13,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{ "visibility": "off" }]
            }
        ]
    });

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.title}</h3><p>${location.info}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

window.addEventListener('error', function (e) {
    if (e.target.tagName === 'SCRIPT' && e.target.src.includes('maps.googleapis.com')) {
        document.getElementById('map').innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #666;">
          <h3>Map Could Not Be Loaded</h3>
          <p>Please check your Google Maps API key and connection.</p>
          <p>In the meantime, here are some great street food locations in Kuala Lumpur:</p>
          <ul style="list-style: none; margin-top: 1rem;">
            <li>📍 Jalan Alor Food Street</li>
            <li>📍 Petaling Street (Chinatown)</li>
            <li>📍 Kampung Baru</li>
            <li>📍 Central Market</li>
          </ul>
        </div>
      `;
    }
});