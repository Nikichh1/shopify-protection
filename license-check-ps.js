function licenseCallback(data) {
  if (!data.valid || data.key !== "robotnik-2025") {
    document.body.innerHTML = "";
    console.warn("Invalid license.");
  }
}

var script = document.createElement('script');
script.src = "https://nikichh1.github.io/shopify-protection/license-ps.js";
document.head.appendChild(script);
