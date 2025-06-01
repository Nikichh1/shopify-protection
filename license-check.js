fetch("https://nikichh1.github.io/shopify-protection/license.json")
  .then(res => res.json())
  .then(data => {
    if (!data.valid || data.key !== "robotnik-2025") {
      document.body.innerHTML = "";
      console.warn("Invalid license.");
    }
  })
  .catch(() => {
    document.body.innerHTML = "";
    console.error("License check failed.");
  });
