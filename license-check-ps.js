function licenseCallback(data) {
  if (!data.valid || data.key !== "robotnik-2025") {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "#111";
    overlay.style.color = "#fff";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999999";
    overlay.style.fontFamily = "Arial, sans-serif";

    overlay.innerHTML = `
      <div style="text-align:center;max-width:500px;padding:20px;">
        <h2>Theme License Required</h2>
        <p>This theme requires a valid license to operate.</p>
        <p>Please update or activate your license to restore full functionality.</p>
      </div>
    `;

    document.body.style.overflow = "hidden";

    document.body.appendChild(overlay);

    console.warn("Invalid license.");
  }
}

var script = document.createElement('script');
script.src = "https://nikichh1.github.io/shopify-protection/license-ps.js";
document.head.appendChild(script);
