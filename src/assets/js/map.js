// Google Maps with Shades of Grey styling for Storm Inc Contact Page

// Custom map styling - Clean and modern
const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9c9c9c",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7b7b7b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#ff8700",
      },
      {
        saturation: "1",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#ff9500",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c8d7d4",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#070707",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
];

// Storm Inc location coordinates (3 Argus Place, Hillcrest, Auckland 0627)
const stormIncLocation = {
  lat: -36.785857, // Exact latitude for Storm Inc
  lng: 174.741898, // Exact longitude for Storm Inc
};

// Map center adjusted to show more ocean (east of the marker)
const mapCenter = {
  lat: -36.785857, // Same latitude
  lng: 174.755, // Shifted east to show more ocean
};

// Initialize map
function initMap() {
  // Create map
  const map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 13, // Zoomed out to show wider area
    center: mapCenter,
    styles: mapStyles,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    draggable: true,
    keyboardShortcuts: false,
    disableDefaultUI: false,
  });

  // Create custom SVG icon for marker
  const customIcon = {
    url:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="61" height="93" viewBox="0 0 61 93" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.4053 91.8423C29.3585 93.3932 30.9322 93.3932 31.8964 91.8641C31.8964 91.8641 61 46.6584 61 30.068C61 13.4776 47.3459 0 30.5 0C13.6541 0 0 13.4558 0 30.0571C0 46.6584 28.4053 91.8423 28.4053 91.8423ZM30.2118 45.3368C38.934 45.3368 46.016 38.3686 46.016 29.7622C46.016 21.1557 38.9451 14.1876 30.2118 14.1876C21.4786 14.1876 14.4077 21.1557 14.4077 29.7622C14.4077 38.3686 21.4786 45.3368 30.2118 45.3368Z" fill="#FF5964"/></svg>'
      ),
    scaledSize: new google.maps.Size(40, 60), // Scale down the icon size
    anchor: new google.maps.Point(20, 60), // Center the anchor at the bottom of the pin
  };

  // Create marker with custom icon
  const marker = new google.maps.Marker({
    position: stormIncLocation,
    map: map,
    title: "Storm Inc",
    icon: customIcon,
    animation: google.maps.Animation.DROP,
  });

  // Make map responsive
  google.maps.event.addDomListener(window, "resize", function () {
    const center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}

// Initialize map when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if Google Maps API is loaded
  if (typeof google !== "undefined" && google.maps) {
    initMap();
  } else {
    console.error("Google Maps API not loaded");
  }
});

// Global function for Google Maps callback
window.initMap = initMap;
