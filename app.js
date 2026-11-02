const CATEGORIES = [
  { id: "telefon", name: "Telefonlar", icon: "phone", tint: "#1e4d40" },
  { id: "noutbuk", name: "Noutbuklar", icon: "laptop", tint: "#1c3d5a" },
  { id: "ehtiyot", name: "Ehtiyot qismlar", icon: "parts", tint: "#6b3a2a" },
  { id: "planshet", name: "Planshetlar", icon: "tablet", tint: "#3d3a6b" },
  { id: "televizor", name: "Televizorlar", icon: "tv", tint: "#1a3f3f" },
  { id: "audio", name: "Audio", icon: "audio", tint: "#5a2e45" },
  { id: "oyin", name: "O'yin texnikasi", icon: "game", tint: "#2c3d1e" },
  { id: "aksessuar", name: "Aksessuarlar", icon: "acc", tint: "#3e3428" },
  { id: "maishiy", name: "Maishiy texnika", icon: "home", tint: "#3a2e1e" },
  { id: "foto", name: "Kameralar", icon: "foto", tint: "#243044" }
];

const PRODUCTS = [
  { id: 1, name: "iPhone 15 Pro 256GB", category: "telefon", condition: "yangi", price: 16490000, stock: 4, year: 2024, specs: ["256 GB", "Titanium", "48 MP"], desc: "Qadoqdagi yangi iPhone. Titan korpus, yorqin ekran va uzoq zaryad. 12 oy rasmiy kafolat.", featured: true, keywords: "iphone telefon apple" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", category: "telefon", condition: "yangi", price: 14990000, stock: 3, year: 2024, specs: ["256 GB", "S Pen", "200 MP"], desc: "Yangi flagman. Qalam bilan yozish, katta ekran va kuchli kamera.", keywords: "samsung telefon galaxy" },
  { id: 3, name: "Xiaomi 14", category: "telefon", condition: "yangi", price: 8490000, stock: 6, year: 2024, specs: ["256 GB", "Leica", "90 Vt"], desc: "Yangi, yengil flagman. Tez zaryad va tiniq kamera.", keywords: "xiaomi telefon" },
  { id: 4, name: "iPhone 13 128GB", category: "telefon", condition: "eski", price: 7200000, stock: 2, year: 2021, specs: ["128 GB", "Batareya 89%", "Face ID"], desc: "Holati yaxshi, chizigsiz ekran. Do'konda tekshirilgan, 30 kun kafolat.", keywords: "iphone telefon apple ishlatilgan" },
  { id: 5, name: "Samsung Galaxy A54", category: "telefon", condition: "eski", price: 3450000, oldPrice: 3990000, stock: 3, year: 2023, specs: ["128 GB", "Batareya 91%"], desc: "Kundalik ish uchun qulay o'rta sinf. Tekshirilgan, korpusi toza.", keywords: "samsung telefon" },
  { id: 6, name: "Redmi Note 12", category: "telefon", condition: "eski", price: 2190000, stock: 5, year: 2023, specs: ["128 GB", "Batareya 84%"], desc: "Arzon va ishchi telefon. Ekran va zaryad tekshirilgan.", keywords: "xiaomi redmi telefon" },
  { id: 7, name: "iPhone 11 64GB", category: "telefon", condition: "eski", price: 2500000, stock: 0, year: 2019, specs: ["64 GB", "Batareya almashtiriladi"], desc: "Hozircha sotuvda yo'q. Navbatga yozib qo'yish uchun do'konga qo'ng'iroq qiling.", keywords: "iphone telefon" },
  { id: 8, name: "MacBook Air 13 M3", category: "noutbuk", condition: "yangi", price: 18900000, stock: 3, year: 2024, specs: ["8 GB", "256 GB SSD", "13 dyuym"], desc: "Yangi, yengil noutbuk. O'qish va ish uchun tinch va uzoq zaryad.", featured: true, keywords: "laptop macbook apple noutbuk" },
  { id: 9, name: "ASUS ROG Strix G16", category: "noutbuk", condition: "yangi", price: 16500000, stock: 2, year: 2024, specs: ["16 GB", "RTX 4060", "1 TB"], desc: "O'yin va montaj uchun yangi noutbuk. Kuchli sovutish tizimi.", keywords: "laptop asus oyin noutbuk" },
  { id: 10, name: "Lenovo IdeaPad Slim 5", category: "noutbuk", condition: "yangi", price: 9800000, stock: 4, year: 2024, specs: ["16 GB", "512 GB", "AMD"], desc: "Ofis va dars uchun yangi yupqa noutbuk.", keywords: "laptop lenovo noutbuk" },
  { id: 11, name: "Dell Latitude 5420", category: "noutbuk", condition: "eski", price: 5600000, stock: 2, year: 2021, specs: ["16 GB", "512 GB", "Intel i5"], desc: "Biznes klassidagi ishlatilgan noutbuk. Klaviatura va batareya tekshirilgan.", keywords: "laptop dell noutbuk" },
  { id: 12, name: "HP ProBook 450 G8", category: "noutbuk", condition: "eski", price: 4200000, oldPrice: 4700000, stock: 2, year: 2021, specs: ["8 GB", "256 GB", "15 dyuym"], desc: "Ish uchun ishonchli eski model. Xotirani do'konda ko'paytirish mumkin.", keywords: "laptop hp noutbuk" },
  { id: 13, name: "iPhone 13 ekran moduli", category: "ehtiyot", condition: "yangi", price: 890000, stock: 8, year: 2024, specs: ["OLED", "Originalga yaqin", "O'rnatish bor"], desc: "Yangi ekran. Xohlasangiz do'konda 40 daqiqada o'rnatib beramiz.", featured: true, keywords: "extiyot ehtiyot zapchast ekran iphone" },
  { id: 14, name: "MacBook batareyasi", category: "ehtiyot", condition: "yangi", price: 720000, stock: 5, year: 2024, specs: ["A2681", "Yangi sikl", "O'rnatish bor"], desc: "Air modellari uchun yangi batareya. Sig'im pasaygan noutbukni jonlantiradi.", keywords: "extiyot ehtiyot laptop batareya" },
  { id: 15, name: "Kingston SSD 512GB", category: "ehtiyot", condition: "yangi", price: 650000, stock: 10, year: 2024, specs: ["NVMe", "512 GB", "O'qish 3500 MB/s"], desc: "Noutbuk yoki kompyuter uchun yangi xotira. Eskisini tezlashtiradi.", keywords: "extiyot ehtiyot ssd xotira" },
  { id: 16, name: "DDR4 16GB RAM", category: "ehtiyot", condition: "yangi", price: 480000, stock: 12, year: 2024, specs: ["16 GB", "3200 MHz", "Noutbuk"], desc: "Noutbuk operativ xotirasi. 8 GB dan 16 GB ga o'tkazish mumkin.", keywords: "extiyot ehtiyot ram xotira" },
  { id: 17, name: "Noutbuk klaviaturasi", category: "ehtiyot", condition: "eski", price: 280000, stock: 4, year: 2020, specs: ["HP / Lenovo", "Tekshirilgan", "Lotin"], desc: "Yechib olingan, tugmalari ishlaydigan klaviatura. Modelni do'konda solishtiramiz.", keywords: "extiyot ehtiyot keyboard laptop" },
  { id: 18, name: "65W zaryadlagich", category: "ehtiyot", condition: "eski", price: 160000, stock: 7, year: 2022, specs: ["Type-C", "65 Vt", "Tekshirilgan"], desc: "Ishlatilgan, lekin simi butun va quvvati barqaror zaryadlagich.", keywords: "extiyot ehtiyot adapter quvvat" },
  { id: 19, name: "iPad Air 11", category: "planshet", condition: "yangi", price: 9200000, stock: 3, year: 2024, specs: ["128 GB", "M2", "11 dyuym"], desc: "Yangi planshet. Dars, rasm va yengil ish uchun.", keywords: "ipad apple planshet" },
  { id: 20, name: "Samsung Galaxy Tab S9", category: "planshet", condition: "yangi", price: 8100000, stock: 2, year: 2023, specs: ["128 GB", "S Pen", "11 dyuym"], desc: "Yangi, qalam bilan. Film va chizma uchun yorqin ekran.", keywords: "samsung planshet tab" },
  { id: 21, name: "iPad 9-avlod", category: "planshet", condition: "eski", price: 3800000, stock: 2, year: 2021, specs: ["64 GB", "Batareya 86%"], desc: "Uy va bola darsi uchun tekshirilgan planshet. 30 kun kafolat.", keywords: "ipad apple planshet" },
  { id: 22, name: "Samsung 55 QLED", category: "televizor", condition: "yangi", price: 9990000, stock: 2, year: 2024, specs: ["55 dyuym", "4K", "Smart TV"], desc: "Yangi QLED televizor. Yorug' xona uchun ham rasmi tiniq.", keywords: "tv televizor samsung" },
  { id: 23, name: "LG 50 4K", category: "televizor", condition: "yangi", price: 7200000, stock: 3, year: 2024, specs: ["50 dyuym", "webOS", "4K"], desc: "Yangi smart televizor. YouTube va ilovalar o'rnatilgan.", keywords: "tv televizor lg" },
  { id: 24, name: "Artel 43 LED", category: "televizor", condition: "eski", price: 2800000, stock: 1, year: 2020, specs: ["43 dyuym", "Full HD", "Tekshirilgan"], desc: "Ishlatilgan, lekin paneli sof. Uy uchun arzon variant. Oxirgi dona.", keywords: "tv televizor artel" },
  { id: 25, name: "Sony WH-1000XM5", category: "audio", condition: "yangi", price: 3200000, stock: 4, year: 2024, specs: ["Shovqin yopish", "30 soat", "Bluetooth"], desc: "Yangi quloqchin. Yo'l va ofisda tashqi shovqinni pasaytiradi.", keywords: "naushnik quloqchin sony audio" },
  { id: 26, name: "AirPods Pro 2", category: "audio", condition: "yangi", price: 2450000, stock: 5, year: 2023, specs: ["USB-C", "Shovqin yopish", "Apple"], desc: "Yangi, qadoqda. iPhone bilan bir zumda juftlashadi.", keywords: "airpods quloqchin apple" },
  { id: 27, name: "JBL Charge 5", category: "audio", condition: "eski", price: 980000, stock: 2, year: 2022, specs: ["Bluetooth", "Suvga chidamli", "Tekshirilgan"], desc: "Ovozi baland karnay. Tashqi ko'rinishi ozgina ishlatilgan, ovozi sof.", keywords: "kolonka jbl karnay" },
  { id: 28, name: "Marshall Major IV", category: "audio", condition: "eski", price: 750000, stock: 1, year: 2022, specs: ["80 soat", "Simli ham", "Tekshirilgan"], desc: "Quloq ustidagi quloqchin. Yostiqchalari almashtirilgan.", keywords: "naushnik marshall quloqchin" },
  { id: 29, name: "PlayStation 5", category: "oyin", condition: "yangi", price: 7800000, stock: 3, year: 2024, specs: ["Diskli", "825 GB", "1 geympad"], desc: "Yangi konsol, bitta rasmiy geympad bilan. 12 oy kafolat.", featured: true, keywords: "ps5 playstation oyin konsol" },
  { id: 30, name: "Xbox Series S", category: "oyin", condition: "eski", price: 3900000, stock: 1, year: 2022, specs: ["512 GB", "Raqamli", "Tekshirilgan"], desc: "Ishlatilgan, lekin ventilyatori tinch va hisob toza. Oxirgi dona.", keywords: "xbox oyin konsol" },
  { id: 31, name: "DualSense geympad", category: "oyin", condition: "yangi", price: 890000, stock: 6, year: 2024, specs: ["PS5", "Bluetooth", "Oq"], desc: "Yangi pult. Stiklarida lyuft yo'q.", keywords: "geympad pult ps5" },
  { id: 32, name: "Logitech MX Master 3S", category: "aksessuar", condition: "yangi", price: 1150000, stock: 5, year: 2024, specs: ["Simsiz", "8000 DPI", "USB-C"], desc: "Ish uchun yangi sichqoncha. Noutbuk va planshetda birga ishlaydi.", keywords: "mouse sichqoncha logitech" },
  { id: 33, name: "Anker powerbank 20000", category: "aksessuar", condition: "yangi", price: 420000, stock: 9, year: 2024, specs: ["20 000 mAh", "22.5 Vt", "2 port"], desc: "Telefonni bir necha marta to'ldiradigan yangi tashqi batareya.", keywords: "powerbank zaryad" },
  { id: 34, name: "TP-Link Archer AX55", category: "aksessuar", condition: "yangi", price: 690000, stock: 4, year: 2024, specs: ["Wi-Fi 6", "Gigabit", "4 antenna"], desc: "Uy uchun yangi router. Katta xonadonda internetni barqaror tutadi.", keywords: "router wifi modem" },
  { id: 35, name: "LG 27 dyuymli monitor", category: "aksessuar", condition: "yangi", price: 3100000, stock: 3, year: 2024, specs: ["27 dyuym", "IPS", "75 Gs"], desc: "Ish va o'qish uchun yangi monitor. Ko'z charchashini pasaytiradi.", keywords: "monitor kompyuter ekran" },
  { id: 36, name: "Apple Watch SE", category: "aksessuar", condition: "eski", price: 2100000, stock: 1, year: 2022, specs: ["40 mm", "Batareya 90%", "GPS"], desc: "Tekshirilgan aqlli soat. Tasma yangi almashtirilgan.", keywords: "soat watch apple" },
  { id: 37, name: "HP LaserJet printer", category: "aksessuar", condition: "eski", price: 1800000, oldPrice: 2100000, stock: 1, year: 2019, specs: ["Lazer", "Wi-Fi", "Tekshirilgan"], desc: "Uy va kichik ofis uchun ishlatilgan printer. Sinov varag'i chiqarib beriladi.", keywords: "printer ofis" },
  { id: 38, name: "Xiaomi robot changyutgich", category: "maishiy", condition: "yangi", price: 2800000, stock: 4, year: 2024, specs: ["Nam artish", "Xarita", "Ilova"], desc: "Yangi robot. Xonani o'zi aylanib, polni yig'ishtiradi.", keywords: "changyutgich robot maishiy" },
  { id: 39, name: "Artel konditsioner 12", category: "maishiy", condition: "yangi", price: 4900000, stock: 3, year: 2024, specs: ["12 BTU", "Inverter", "O'rnatish alohida"], desc: "Xona uchun yangi konditsioner. O'rnatishni usta kelib qiladi.", keywords: "konditsioner artel sovutish" },
  { id: 40, name: "Dyson V8 changyutgich", category: "maishiy", condition: "eski", price: 4200000, stock: 1, year: 2021, specs: ["Simsiz", "Batareya yangilangan", "Tekshirilgan"], desc: "Ishlatilgan, batareyasi yaqinda almashtirilgan. So'rish kuchi yaxshi.", keywords: "dyson changyutgich" },
  { id: 41, name: "Samsung kir yuvish 7 kg", category: "maishiy", condition: "yangi", price: 6200000, stock: 2, year: 2024, specs: ["7 kg", "Inverter", "A++"], desc: "Yangi kir yuvish mashinasi. Toshkent bo'ylab olib borib beramiz.", keywords: "stiralka kir yuvish samsung" },
  { id: 42, name: "Canon EOS 2000D", category: "foto", condition: "yangi", price: 6500000, stock: 2, year: 2023, specs: ["24 MP", "Komplekt obyektiv", "Wi-Fi"], desc: "O'rganish uchun yangi kamera. Sumka sovg'a.", keywords: "kamera canon foto" },
  { id: 43, name: "GoPro Hero 10", category: "foto", condition: "eski", price: 2800000, stock: 1, year: 2021, specs: ["4K", "Suvga chidamli", "2 batareya"], desc: "Sayohat uchun tekshirilgan ekshn-kamera. Korpusida mayda iz bor, video sof.", keywords: "gopro kamera foto" }
];

const ICONS = {
  phone: '<rect x="8" y="2.5" width="8" height="19" rx="2"/><path d="M11 18.5h2"/>',
  laptop: '<rect x="3" y="4.5" width="18" height="11" rx="1.5"/><path d="M2 19h20"/>',
  parts: '<rect x="8" y="8" width="8" height="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
  tablet: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 18h.01"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  audio: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M4 12v6a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2zM20 12v6a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z"/>',
  game: '<path d="M7 9h10a5 5 0 0 1 5 5 5 5 0 0 1-5 5H7a5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/><path d="M8 12h4M10 10v4M16.5 12h.01M18.5 14h.01"/>',
  acc: '<rect x="8" y="3" width="8" height="18" rx="4"/><path d="M12 7v3"/>',
  home: '<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/>',
  foto: '<path d="M4 8h4l2-2h4l2 2h4v10H4z"/><circle cx="12" cy="13" r="3"/>'
};

const state = {
  category: "barchasi",
  condition: "barchasi",
  sort: "default",
  query: "",
  cart: loadCart()
};

let lastFocus = null;
let toastTimer = 0;

const $ = (id) => document.getElementById(id);

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem("yetd-cart")) || [];
    return raw.filter((item) => getProduct(item.id) && item.qty > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("yetd-cart", JSON.stringify(state.cart));
}

function getProduct(id) {
  return PRODUCTS.find((item) => item.id === Number(id));
}

function catById(id) {
  return CATEGORIES.find((item) => item.id === id);
}

function money(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.parts}</svg>`;
}

function warranty(product) {
  return product.condition === "yangi" ? "12 oy kafolat" : "30 kun kafolat";
}

function conditionLabel(condition) {
  return condition === "yangi" ? "Yangi" : "Eski";
}

function inCartQty(id) {
  return state.cart.find((item) => item.id === id)?.qty || 0;
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
}

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function filteredProducts() {
  const query = state.query.toLowerCase();
  let list = PRODUCTS.filter((product) => {
    const category = catById(product.category);
    const blob = [product.name, product.desc, product.keywords || "", category.name, product.specs.join(" ")]
      .join(" ")
      .toLowerCase();
    if (state.category !== "barchasi" && product.category !== state.category) return false;
    if (state.condition !== "barchasi" && product.condition !== state.condition) return false;
    if (query && !blob.includes(query)) return false;
    return true;
  });

  if (state.sort === "cheap") list.sort((a, b) => a.price - b.price);
  else if (state.sort === "expensive") list.sort((a, b) => b.price - a.price);
  else if (state.sort === "yangi") list.sort((a, b) => Number(b.condition === "yangi") - Number(a.condition === "yangi"));
  else list.sort((a, b) => Number(b.featured || false) - Number(a.featured || false) || Number(b.stock > 0) - Number(a.stock > 0));

  return list;
}

function renderStatic() {
  $("statProducts").textContent = String(PRODUCTS.length);
  $("statCats").textContent = String(CATEGORIES.length);
  $("year").textContent = String(new Date().getFullYear());

  $("catGrid").innerHTML = CATEGORIES.map((category) => {
    const count = PRODUCTS.filter((product) => product.category === category.id).length;
    return `<button class="cat-card" type="button" data-action="cat" data-cat="${category.id}" data-scroll="katalog">
      <span class="cat-ico" style="--tint:${category.tint}">${icon(category.icon)}</span>
      <span><strong>${esc(category.name)}</strong><small>${count} ta</small></span>
    </button>`;
  }).join("");

  $("chips").innerHTML = [`<button class="chip" type="button" data-action="cat" data-cat="barchasi">Barchasi</button>`]
    .concat(CATEGORIES.map((category) => `<button class="chip" type="button" data-action="cat" data-cat="${category.id}">${esc(category.name)}</button>`))
    .join("");

  const picks = PRODUCTS.filter((product) => product.featured).slice(0, 3);
  $("showcase").innerHTML = picks.map((product) => {
    const category = catById(product.category);
    return `<button class="show-card" type="button" data-action="open" data-id="${product.id}">
      <span class="mini" style="background:${category.tint}">${icon(category.icon)}</span>
      <span><em>${esc(conditionLabel(product.condition))} · ${esc(category.name)}</em><strong>${esc(product.name)}</strong></span>
      <b>${money(product.price)}</b>
    </button>`;
  }).join("");
}

function syncControls() {
  document.querySelectorAll("[data-cat]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.cat === state.category);
  });
  document.querySelectorAll(".seg [data-condition]").forEach((button) => {
    const active = button.dataset.condition === state.condition;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderProducts() {
  const list = filteredProducts();
  const categoryName = state.category === "barchasi" ? "Barcha texnikalar" : catById(state.category).name;
  const conditionName = state.condition === "barchasi" ? "" : ` · ${conditionLabel(state.condition).toLowerCase()}`;
  $("resultMeta").textContent = list.length
    ? `${categoryName}${conditionName} — ${list.length} ta`
    : "Hech narsa topilmadi";

  if (!list.length) {
    $("grid").innerHTML = `<div class="empty">
      <h3>Bu filtrda texnika yo'q</h3>
      <p>Boshqa so'z yozing yoki filtrlarni tozalang.</p>
      <button class="btn btn-ink" type="button" data-action="reset">Filtrlarni tozalash</button>
    </div>`;
    return;
  }

  $("grid").innerHTML = list.map((product) => {
    const category = catById(product.category);
    const left = product.stock - inCartQty(product.id);
    const out = product.stock <= 0;
    const label = out ? "Tugagan" : left <= 0 ? "Savatda" : "Savatga";
    const stockLine = out ? "Hozircha tugagan" : product.stock === 1 ? "Oxirgi dona" : `${product.stock} dona bor`;
    return `<article class="card${out ? " is-out" : ""}">
      <button class="media" type="button" data-action="open" data-id="${product.id}" style="--tint:${category.tint}">
        <span class="stamp ${product.condition}">${conditionLabel(product.condition)}</span>
        ${product.oldPrice ? '<span class="sale">Chegirma</span>' : ""}
        ${icon(category.icon)}
      </button>
      <div class="card-body">
        <p class="eyebrow">${esc(category.name)}</p>
        <h3>${esc(product.name)}</h3>
        <p class="meta">${esc(product.specs.slice(0, 2).join(" · "))} · ${product.year}</p>
        <p class="meta">${esc(stockLine)} · ${esc(warranty(product))}</p>
        <div class="card-foot">
          <div class="price">${product.oldPrice ? `<s>${money(product.oldPrice)}</s>` : ""}${money(product.price)}</div>
          <button class="add-btn" type="button" data-action="add" data-id="${product.id}" ${out || left <= 0 ? "disabled" : ""}>${label}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function updateCartCount() {
  $("cartCount").textContent = String(cartCount());
}

function renderCart() {
  updateCartCount();
  const box = $("cartItems");
  if (!state.cart.length) {
    box.innerHTML = `<div class="empty"><h3>Savat bo'sh</h3><p>Telefon, noutbuk yoki ehtiyot qism qo'shing.</p><button class="btn btn-line" type="button" data-action="close" data-scroll="katalog">Katalogga qaytish</button></div>`;
    $("cartTotal").textContent = money(0);
    $("toCheckout").disabled = true;
    return;
  }
  $("toCheckout").disabled = false;
  box.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.id);
    return `<div class="cart-item">
      <div>
        <strong>${esc(product.name)}</strong>
        <p>${esc(conditionLabel(product.condition))} · ${money(product.price)}</p>
        <div class="qty">
          <button type="button" data-action="dec" data-id="${product.id}" aria-label="Kamaytirish">−</button>
          <span>${item.qty}</span>
          <button type="button" data-action="inc" data-id="${product.id}" aria-label="Ko'paytirish" ${item.qty >= product.stock ? "disabled" : ""}>+</button>
        </div>
      </div>
      <div>
        <strong>${money(product.price * item.qty)}</strong>
        <button class="remove" type="button" data-action="remove" data-id="${product.id}">O'chirish</button>
      </div>
    </div>`;
  }).join("");
  $("cartTotal").textContent = money(cartTotal());
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product || product.stock <= 0) {
    toast("Bu texnika tugagan");
    return;
  }
  const current = inCartQty(product.id);
  if (current >= product.stock) {
    toast("Omborda bundan ko'p yo'q");
    return;
  }
  const item = state.cart.find((entry) => entry.id === product.id);
  if (item) item.qty += 1;
  else state.cart.push({ id: product.id, qty: 1 });
  saveCart();
  renderProducts();
  if (!$("drawer").hidden && !$("viewCart").hidden) renderCart();
  else updateCartCount();
  toast("Savatga qo'shildi");
}

function setQty(id, qty) {
  const product = getProduct(id);
  if (!product) return;
  if (qty <= 0) state.cart = state.cart.filter((item) => item.id !== product.id);
  else {
    const item = state.cart.find((entry) => entry.id === product.id);
    if (!item) return;
    item.qty = Math.min(qty, product.stock);
  }
  saveCart();
  renderCart();
  renderProducts();
}

function openDrawer(mode) {
  lastFocus = document.activeElement;
  $("drawer").hidden = false;
  $("overlay").hidden = false;
  document.body.classList.add("lock");
  showDrawer(mode);
  $("drawer").querySelector(".icon-x").focus();
}

function showDrawer(mode) {
  $("viewCart").hidden = mode !== "cart";
  $("cartFoot").hidden = mode !== "cart";
  $("viewCheckout").hidden = mode !== "checkout";
  $("viewSuccess").hidden = mode !== "success";
  $("drawerTitle").textContent = mode === "checkout" ? "Buyurtma" : mode === "success" ? "Tayyor" : "Savat";
  if (mode === "cart") renderCart();
}

function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;
  const category = catById(product.category);
  const left = product.stock - inCartQty(product.id);
  const out = product.stock <= 0;
  lastFocus = document.activeElement;
  $("modalBody").innerHTML = `<div class="modal-grid">
    <div class="modal-media" style="--tint:${category.tint};background:${category.tint}">
      <span class="stamp ${product.condition}">${conditionLabel(product.condition)}</span>
      ${icon(category.icon)}
    </div>
    <div class="modal-copy">
      <p class="eyebrow">${esc(category.name)} · ${product.year}</p>
      <h2 id="modalTitle">${esc(product.name)}</h2>
      <p>${esc(product.desc)}</p>
      <ul class="specs">${product.specs.map((spec) => `<li>${esc(spec)}</li>`).join("")}<li>${esc(warranty(product))}</li></ul>
      <div class="price">${product.oldPrice ? `<s>${money(product.oldPrice)}</s>` : ""}${money(product.price)}</div>
      <button class="btn btn-ink" type="button" data-action="add" data-id="${product.id}" ${out || left <= 0 ? "disabled" : ""}>${out ? "Tugagan" : "Savatga qo'shish"}</button>
    </div>
  </div>`;
  $("modal").hidden = false;
  $("overlay").hidden = false;
  document.body.classList.add("lock");
  $("modal").querySelector(".icon-x").focus();
}

function closeAll() {
  $("drawer").hidden = true;
  $("modal").hidden = true;
  $("overlay").hidden = true;
  document.body.classList.remove("lock");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function resetFilters() {
  state.category = "barchasi";
  state.condition = "barchasi";
  state.sort = "default";
  state.query = "";
  $("search").value = "";
  $("sort").value = "default";
  syncControls();
  renderProducts();
}

function clearErrors() {
  document.querySelectorAll("[data-err]").forEach((el) => {
    el.textContent = "";
  });
}

function setErr(name, message) {
  const el = document.querySelector(`[data-err="${name}"]`);
  if (el) el.textContent = message;
}

function submitOrder(event) {
  event.preventDefault();
  clearErrors();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const address = String(data.get("address") || "").trim();
  const delivery = String(data.get("delivery") || "olibketish");
  const note = String(data.get("note") || "").trim();
  let invalid = false;
  if (name.length < 2) {
    setErr("name", "Ismingizni yozing");
    invalid = true;
  }
  if (phone.replace(/\D/g, "").length < 9) {
    setErr("phone", "Telefon raqamini to'liq yozing");
    invalid = true;
  }
  if (delivery === "yetkazish" && address.length < 8) {
    setErr("address", "Yetkazish uchun manzil kerak");
    invalid = true;
  }
  if (!state.cart.length) {
    toast("Savat bo'sh");
    return;
  }
  if (invalid) return;

  const lines = state.cart.map((item) => {
    const product = getProduct(item.id);
    return `<li>${esc(product.name)} × ${item.qty}</li>`;
  });
  const total = cartTotal();
  const orderNo = "YE-" + String(1000 + Math.floor(Math.random() * 9000));
  const how = delivery === "yetkazish" ? "Yetkazib beramiz" : "Do'kondan olib ketasiz";
  $("viewSuccess").innerHTML = `<div class="success">
    <p class="kicker">Buyurtma qabul qilindi</p>
    <h3>Rahmat, ${esc(name)}</h3>
    <p class="order-no">${orderNo}</p>
    <p>${how}. Tez orada ${esc(phone)} raqamiga qo'ng'iroq qilamiz.</p>
    <ul>${lines.join("")}</ul>
    <p><strong>Jami: ${money(total)}</strong></p>
    ${address ? `<p>Manzil: ${esc(address)}</p>` : ""}
    ${note ? `<p>Izoh: ${esc(note)}</p>` : ""}
    <button class="btn btn-ink" type="button" data-action="close">Yopish</button>
  </div>`;
  state.cart = [];
  saveCart();
  form.reset();
  form.querySelector('input[value="olibketish"]').checked = true;
  $("addrHint").textContent = "ixtiyoriy";
  renderProducts();
  updateCartCount();
  showDrawer("success");
}

function apply() {
  syncControls();
  renderProducts();
}

document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;
  const id = Number(el.dataset.id);
  if (action === "add") addToCart(id);
  if (action === "open") openProduct(id);
  if (action === "cat") {
    state.category = el.dataset.cat;
    apply();
  }
  if (action === "condition") {
    state.condition = el.dataset.condition;
    if (el.dataset.resetCat) state.category = "barchasi";
    apply();
  }
  if (action === "open-cart") openDrawer("cart");
  if (action === "checkout") openDrawer("checkout");
  if (action === "back-cart") showDrawer("cart");
  if (action === "close") closeAll();
  if (action === "inc") setQty(id, inCartQty(id) + 1);
  if (action === "dec") setQty(id, inCartQty(id) - 1);
  if (action === "remove") setQty(id, 0);
  if (action === "reset") resetFilters();
  if (el.dataset.scroll) document.getElementById(el.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAll();
});

$("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("katalog").scrollIntoView({ behavior: "smooth" });
});

$("search").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  apply();
});

$("sort").addEventListener("change", (event) => {
  state.sort = event.target.value;
  apply();
});

$("viewCheckout").addEventListener("submit", submitOrder);
$("viewCheckout").addEventListener("change", (event) => {
  if (event.target.name === "delivery") {
    $("addrHint").textContent = event.target.value === "yetkazish" ? "kerak" : "ixtiyoriy";
  }
});

renderStatic();
apply();
updateCartCount();
