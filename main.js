var typed = new Typed(".text",{
strings: ["Software Developer","Website Developer"],
typeSpeed: 40,
backSpeed: 40,
backDelay: 650,
loop: true
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function openGoogleMaps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Get current latitude and longitude
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Create a link to open in Google Maps
        const mapLink = `https://www.google.com/maps/place/${lat},${lng}`;

        // Open the link in the same tab
        window.location.href = mapLink;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }