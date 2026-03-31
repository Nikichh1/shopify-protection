function licenseCallback(data) {
  if (!data.valid || data.key !== "robotnik-202") {
    document.body.innerHTML = "";
    console.warn("Error");
  }
}

var script = document.createElement('script');
script.src = "https://nikichh1.github.io/shopify-protection/license-ps.js";
document.head.appendChild(script);
