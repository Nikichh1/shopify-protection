(async function () {
  const requiredScriptSrc = "https://nikichh1.github.io/shopify-protection/license-check.js";

  // Проверка дали скриптът е изтрит или променен
  const scripts = Array.from(document.getElementsByTagName('script'));
  const found = scripts.some(s => s.src === requiredScriptSrc);

  if (!found) {
    document.body.innerHTML = "<h1 style='color:red;text-align:center;'>Unauthorized modification detected. Site disabled.</h1>";
    throw new Error("Protection script missing!");
  }

  // Зареждане на лиценз файла
  try {
    const response = await fetch("https://nikichh1.github.io/shopify-protection/license.json");
    const license = await response.json();

    const domain = window.location.hostname;

    const isValid = license.allowed_domains.some(allowed => domain.includes(allowed));

    if (!isValid) {
      document.body.innerHTML = "<h1 style='color:red;text-align:center;'>License invalid for this domain.</h1>";
      throw new Error("Invalid license");
    }

  } catch (err) {
    console.error("License check failed:", err);
    document.body.innerHTML = "<h1 style='color:red;text-align:center;'>License check failed.</h1>";
  }
})();
