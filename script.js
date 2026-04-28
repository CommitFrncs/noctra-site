/* ============================================
Noctra  — MAIN SCRIPT
Product data · Rendering · Gallery · WA links
============================================ */

// ---- CONFIG ---------------------------------
const CONFIG = {
    // Replace with your actual WhatsApp number (no + or spaces)
    WA_NUMBER: "2347081427486",
    // Replace with your actual WhatsApp Channel invite link
    WA_CHANNEL_URL: "https://whatsapp.com/channel/0029VbCBl6R7j6gEZdhRBV21",
    // Brand name
    BRAND: "Noctra"
};

// ---- PRODUCT DATA ---------------------------
const PRODUCTS = [
    // GAMING GEAR
    {
        id: 1,
        name: "Wireless Gaming Headset",
        category: "Gaming Gear",
        images: [
            "images/headset-1.jpg",
            "images/headset-2.jpg",
            "images/headset-3.jpg"
        ],
        desc: "Crystal clear audio with booming bass. 20hr battery, 3.5mm + USB compatible. Works on PS4, PS5, PC, and mobile.",
        price: "₦22,000"
    },
    {
        id: 2,
        name: "RGB Gaming Keyboard",
        category: "Gaming Gear",
        images: [
            "images/keyboard-1.jpg",
            "images/keyboard-2.jpg",
            "images/keyboard-3.jpg"
        ],
        desc: "Compact TKL layout, tactile switches, full RGB backlighting. Plug-and-play USB. Great for students and gamers.",
        price: "₦18,500"
    },
    {
        id: 3,
        name: "Gaming Mouse – 6400 DPI",
        category: "Gaming Gear",
        images: ["images/mouse-1.jpg", "images/mouse-2.jpg"],
        desc: "Adjustable 6400 DPI, 6 programmable buttons, RGB side lighting. Wired, ultra-responsive for FPS games.",
        price: "₦9,500"
    },
    {
        id: 4,
        name: "Phone Gamepad Controller",
        category: "Gaming Gear",
        images: [
            "images/gamepad-1.jpg",
            "images/gamepad-2.jpg",
            "images/gamepad-3.jpg"
        ],
        desc: 'Telescopic clip fits phones 4.5–6.8". Bluetooth 5.0, 10hr playtime. Compatible with iOS and Android.',
        price: "₦8,000"
    },
    {
        id: 5,
        name: "Cooling Laptop Stand",
        category: "Gaming Gear",
        images: [
            "images/laptop-stand-1.jpg",
            "images/laptop-stand-2.jpg",
            "images/laptop-stand-3.jpg"
        ],
        desc: 'Dual-fan active cooling pad, adjustable height, RGB ring fans. For laptops 12–17". USB powered.',
        price: "₦7,200"
    },

    // TECH ACCESSORIES
    {
        id: 6,
        name: "65W GaN Fast Charger",
        category: "Tech",
        images: ["images/charger-1.jpg", "images/charger-2.jpg"],
        desc: "3-port GaN charger (2 USB-C + 1 USB-A). Charges phone + laptop simultaneously. Foldable plug, travel-ready.",
        price: "₦12,000"
    },
    {
        id: 7,
        name: "20,000mAh Power Bank",
        category: "Tech",
        images: ["images/powerbank-1.jpg", "images/powerbank-2.jpg"],
        desc: "Dual USB output, 1 USB-C PD port, LED power indicator. Fast charge support. Certified, no fake capacity.",
        price: "₦14,500"
    },
    {
        id: 8,
        name: "Wireless Earbuds – ANC",
        category: "Tech",
        images: [
            "images/earbuds-1.jpg",
            "images/earbuds-2.jpg",
            "images/earbuds-3.jpg"
        ],
        desc: "Active noise cancellation, 28hr total battery, IPX4 water resistant. Seamless pairing with any Bluetooth device.",
        price: "₦15,000"
    },
    {
        id: 9,
        name: "USB-C Hub – 7-in-1",
        category: "Tech",
        images: ["images/usb-hub-1.jpg", "images/usb-hub-2.jpg"],
        desc: "HDMI 4K, 3x USB-A, SD card, TF card, USB-C PD pass-through. Compact, no driver needed.",
        price: "₦11,000"
    },
    {
        id: 10,
        name: 'Laptop Sleeve 15.6"',
        category: "Tech",
        images: [
            "images/sleeve-1.jpg",
            "images/sleeve-2.jpg",
            "images/sleeve-3.jpg"
        ],
        desc: 'Water-resistant neoprene, accessories pocket, smooth zipper. Fits most 14–15.6" laptops and tablets.',
        price: "₦4,500"
    },

    // HOME ESSENTIALS
    {
        id: 11,
        name: "LED Smart Desk Lamp",
        category: "Home",
        images: ["images/lamp-1.jpg", "images/lamp-2.jpg", "images/lamp-3.jpg"],
        desc: "Touch dimmer, 5 colour temperatures, USB charging port on base. Foldable arm, eye-care mode. Study & work friendly.",
        price: "₦6,800"
    },
    {
        id: 12,
        name: "Mini Bluetooth Speaker",
        category: "Home",
        images: [
            "images/speaker-1.jpg",
            "images/speaker-2.jpg",
            "images/speaker-3.jpg"
        ],
        desc: "360° surround sound, IPX5 waterproof, 12hr battery, built-in mic. Works as a hands-free speaker too.",
        price: "₦9,000"
    },
    {
        id: 13,
        name: "Extension Board – 4 Socket",
        category: "Home",
        images: ["images/extension-1.jpg", "images/extension-2.jpg"],
        desc: "4 universal sockets + 2 USB ports, 2m braided cord, surge protection fuse. Ideal for dorms and home offices.",
        price: "₦5,500"
    },
    {
        id: 14,
        name: "Cable Management Kit",
        category: "Home",
        images: [
            "images/cable-kit-1.jpg",
            "images/cable-kit-2.jpg",
            "images/cable-kit-3.jpg"
        ],
        desc: "50-piece set: clips, velcro ties, cable sleeves, adhesive mounts. Clean up your desk setup for good.",
        price: "₦2,800"
    },
    {
        id: 15,
        name: "Phone Stand – Adjustable",
        category: "Home",
        images: ["images/phone-stand-1.jpg", "images/phone-stand-2.jpg"],
        desc: 'Aluminium alloy, foldable, 360° rotation, fits phones and tablets 4–13". Great for video calls and streaming.',
        price: "₦3,200"
    }
    {
  id: 16,
  name: "Wasp Fingers – Gaming Thumb Sleeves (Pair)",
  category: "Gaming Gear",
  images: [
    "images/wasp-fingers-1.jpg",
    "images/wasp-fingers-2.jpg",
    "images/wasp-fingers-3.jpg"
  ],
  desc: "Ultra-responsive gaming thumb sleeves with max touch sensitivity. One size fits all — no more sweaty thumbs or missed shots. Perfect for PUBG, COD Mobile, Free Fire, and everyday scrolling. One pair per pack.",
  price: "₦1,000"
}
];

// ---- HELPERS --------------------------------

/**
 * Build a WhatsApp API link with a prefilled message
 * @param {string} productName
 * @returns {string} WA link
 */
function buildWAOrderLink(productName) {
    const msg = encodeURIComponent(
        `Hi Noctra Gadgets! I'd like to order: *${productName}*. Please send me more details and how to complete my purchase. 🙏`
    );
    return `https://wa.me/${CONFIG.WA_NUMBER}?text=${msg}`;
}

/**
 * Escape HTML to prevent XSS
 */
function esc(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
}

// ---- GALLERY STATE ---------------------------
const galleryState = {
    product: null,
    currentIndex: 0
};

// ---- GALLERY DOM REFERENCES ------------------
let galleryOverlay = null;
let galleryImage = null;
let dotsContainer = null;

// ---- NAVIGATION (mobile burger) -------------
function initNav() {
    const burger = document.getElementById("navBurger");
    const mobileMenu = document.getElementById("navMobile");
    if (!burger || !mobileMenu) return;

    burger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        burger.setAttribute("aria-expanded", isOpen);
        const spans = burger.querySelectorAll("span");
        if (isOpen) {
            spans[0].style.cssText =
                "transform: rotate(45deg) translate(5px,5px)";
            spans[1].style.cssText = "opacity: 0; transform: translateX(-8px)";
            spans[2].style.cssText =
                "transform: rotate(-45deg) translate(5px,-5px)";
        } else {
            spans.forEach(s => (s.style.cssText = ""));
        }
    });

    mobileMenu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            burger
                .querySelectorAll("span")
                .forEach(s => (s.style.cssText = ""));
        });
    });
}

// ---- CATALOG RENDERING ----------------------

let activeFilter = "All";

function renderProducts(filter) {
    const grid = document.getElementById("productsGrid");
    const countEl = document.getElementById("productsCount");
    if (!grid) return;

    const list =
        filter === "All"
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === filter);

    if (countEl) {
        countEl.textContent = `${list.length} product${list.length !== 1 ? "s" : ""} ${
            filter !== "All" ? `in ${filter}` : "available"
        }`;
    }

    if (list.length === 0) {
        grid.innerHTML = `<div class="products-empty">No products in this category yet. Check back soon!</div>`;
        return;
    }

    grid.innerHTML = list
        .map(
            p => `
<div class="product-card" data-id="${p.id}">
  <div class="product-card__image-wrapper">
    <img
      src="${esc(p.images[0])}"
      alt="${esc(p.name)}"
      class="product-card__image"
      loading="lazy"
    />
  </div>
  <div class="product-card__top">
    <span class="product-card__category">${esc(p.category)}</span>
  </div>
  <div>
    <div class="product-card__name">${esc(p.name)}</div>
  </div>
  <p class="product-card__desc">${esc(p.desc)}</p>
  <div class="product-card__footer">
    <span class="product-card__price">${esc(p.price)}</span>
  </div>
  <a
    href="${buildWAOrderLink(p.name)}"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-outline"
    aria-label="Order ${esc(p.name)} on WhatsApp"
  >
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Order on WhatsApp
  </a>
</div>
`
        )
        .join("");

    attachImageClickListeners();
}

function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.dataset.filter;
            renderProducts(activeFilter);
        });
    });
}

// ---- GALLERY MODAL SYSTEM --------------------

function createGalleryModal() {
    if (document.getElementById("galleryModal")) return;

    galleryOverlay = document.createElement("div");
    galleryOverlay.id = "galleryModal";
    galleryOverlay.className = "gallery-overlay";
    galleryOverlay.setAttribute("role", "dialog");
    galleryOverlay.setAttribute("aria-modal", "true");
    galleryOverlay.setAttribute("aria-label", "Product image gallery");

    galleryOverlay.innerHTML = `
    <div class="gallery-backdrop"></div>
    <div class="gallery-content">
      <button class="gallery-close" aria-label="Close gallery">&times;</button>
      <button class="gallery-nav gallery-prev" aria-label="Previous image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div class="gallery-image-container">
        <img src="" alt="" class="gallery-image" />
      </div>
      <button class="gallery-nav gallery-next" aria-label="Next image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <div class="gallery-dots"></div>
    </div>
  `;

    document.body.appendChild(galleryOverlay);

    galleryImage = galleryOverlay.querySelector(".gallery-image");
    dotsContainer = galleryOverlay.querySelector(".gallery-dots");

    galleryOverlay
        .querySelector(".gallery-close")
        .addEventListener("click", closeGallery);
    galleryOverlay
        .querySelector(".gallery-backdrop")
        .addEventListener("click", closeGallery);
    galleryOverlay
        .querySelector(".gallery-prev")
        .addEventListener("click", prevImage);
    galleryOverlay
        .querySelector(".gallery-next")
        .addEventListener("click", nextImage);

    document.addEventListener("keydown", handleKeyboardNavigation);
    initSwipeSupport();
}

function destroyGalleryModal() {
    if (!galleryOverlay) return;
    document.removeEventListener("keydown", handleKeyboardNavigation);
    galleryOverlay.remove();
    galleryOverlay = null;
    galleryImage = null;
    dotsContainer = null;
}

function openGallery(product) {
    if (!galleryOverlay) createGalleryModal();

    galleryState.product = product;
    galleryState.currentIndex = 0;

    updateGallery();
    galleryOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    if (!galleryOverlay) return;
    galleryOverlay.classList.remove("active");
    document.body.style.overflow = "";
    galleryState.product = null;
    galleryState.currentIndex = 0;
}

function updateGallery() {
    if (!galleryState.product || !galleryImage) return;

    const { product, currentIndex } = galleryState;
    const src = product.images[currentIndex];

    galleryImage.style.opacity = "0";
    setTimeout(() => {
        galleryImage.src = src;
        galleryImage.alt = `${product.name} - Image ${currentIndex + 1}`;
        galleryImage.style.opacity = "1";
    }, 150);

    renderDots();
}

function nextImage() {
    if (!galleryState.product) return;
    galleryState.currentIndex =
        (galleryState.currentIndex + 1) % galleryState.product.images.length;
    updateGallery();
}

function prevImage() {
    if (!galleryState.product) return;
    galleryState.currentIndex =
        (galleryState.currentIndex - 1 + galleryState.product.images.length) %
        galleryState.product.images.length;
    updateGallery();
}

function goToImage(index) {
    if (!galleryState.product) return;
    if (index < 0 || index >= galleryState.product.images.length) return;
    galleryState.currentIndex = index;
    updateGallery();
}

function renderDots() {
    if (!dotsContainer || !galleryState.product) return;

    const { product, currentIndex } = galleryState;
    dotsContainer.innerHTML = product.images
        .map(
            (_, i) =>
                `<button class="gallery-dot${i === currentIndex ? " active" : ""}" 
          aria-label="Go to image ${i + 1}" 
          data-index="${i}"></button>`
        )
        .join("");

    dotsContainer.querySelectorAll(".gallery-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            const idx = parseInt(dot.dataset.index, 10);
            goToImage(idx);
        });
    });
}

function handleKeyboardNavigation(e) {
    if (!galleryOverlay || !galleryOverlay.classList.contains("active")) return;

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
    } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
    } else if (e.key === "Escape") {
        e.preventDefault();
        closeGallery();
    }
}

// ---- SWIPE SUPPORT ---------------------------

function initSwipeSupport() {
    if (!galleryOverlay) return;

    const container = galleryOverlay.querySelector(".gallery-image-container");
    if (!container) return;

    let startX = 0;
    let isDragging = false;
    let currentTranslate = 0;
    let swiped = false;

    function getEventX(e) {
        return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function setTransform(value) {
        galleryImage.style.transform = `translateX(${value}px)`;
    }

    function handleStart(e) {
        if (!galleryState.product) return;

        startX = getEventX(e);
        isDragging = true;
        currentTranslate = 0;
        swiped = false;

        // Kill transition for instant finger tracking
        galleryImage.style.transition = "none";
        container.style.cursor = "grabbing";

        e.preventDefault();
    }

    function handleMove(e) {
        if (!isDragging || !galleryState.product) return;

        const diffX = getEventX(e) - startX;
        currentTranslate = diffX;

        // Image follows finger exactly
        setTransform(diffX);
        e.preventDefault();
    }

    function handleEnd(e) {
        if (!isDragging || !galleryState.product) return;

        isDragging = false;
        container.style.cursor = "";

        const threshold = 50;

        if (currentTranslate < -threshold) {
            // Swiped left → next image
            swiped = true;
            const containerWidth = container.offsetWidth;
            // Animate image out to the left
            galleryImage.style.transition = "transform 0.2s ease";
            setTransform(-containerWidth);

            setTimeout(() => {
                nextImage();
                // Reset transform without transition for new image
                galleryImage.style.transition = "none";
                setTransform(0);
                // Small delay then re-enable transition
                setTimeout(() => {
                    galleryImage.style.transition = "transform 0.25s ease";
                }, 50);
            }, 200);
        } else if (currentTranslate > threshold) {
            // Swiped right → previous image
            swiped = true;
            const containerWidth = container.offsetWidth;
            // Animate image out to the right
            galleryImage.style.transition = "transform 0.2s ease";
            setTransform(containerWidth);

            setTimeout(() => {
                prevImage();
                // Reset transform without transition for new image
                galleryImage.style.transition = "none";
                setTransform(0);
                // Small delay then re-enable transition
                setTimeout(() => {
                    galleryImage.style.transition = "transform 0.25s ease";
                }, 50);
            }, 200);
        } else {
            // Didn't swipe far enough → bounce back
            galleryImage.style.transition = "transform 0.2s ease";
            setTransform(0);
        }

        currentTranslate = 0;
    }

    // Touch events (mobile)
    container.addEventListener("touchstart", handleStart, { passive: false });
    container.addEventListener("touchmove", handleMove, { passive: false });
    container.addEventListener("touchend", handleEnd);

    // Mouse events (desktop)
    container.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", e => {
        if (isDragging) handleMove(e);
    });
    window.addEventListener("mouseup", handleEnd);

    // Prevent default drag behavior on the image
    container.addEventListener("dragstart", e => e.preventDefault());
}

// Update the updateGallery function to reset transforms when image changes via dots/arrows:

function updateGallery() {
    if (!galleryState.product || !galleryImage) return;

    const { product, currentIndex } = galleryState;
    const src = product.images[currentIndex];

    // Reset any ongoing transforms
    galleryImage.style.transition = "none";
    galleryImage.style.transform = "translateX(0px)";

    galleryImage.style.opacity = "0";
    setTimeout(() => {
        galleryImage.src = src;
        galleryImage.alt = `${product.name} - Image ${currentIndex + 1}`;
        galleryImage.style.opacity = "1";
        // Re-enable transition for future swipes
        setTimeout(() => {
            galleryImage.style.transition = "transform 0.25s ease";
        }, 50);
    }, 100);

    renderDots();
}

// ---- IMAGE CLICK LISTENERS -------------------

function attachImageClickListeners() {
    document
        .querySelectorAll(".product-card__image-wrapper")
        .forEach(wrapper => {
            wrapper.removeEventListener("click", handleImageClick);
            wrapper.addEventListener("click", handleImageClick);
        });
}

function handleImageClick(e) {
    const card = e.currentTarget.closest(".product-card");
    if (!card) return;

    const productId = parseInt(card.dataset.id, 10);
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    openGallery(product);
}

// ---- WA CHANNEL LINKS -----------------------
function initWALinks() {
    document.querySelectorAll("[data-wa-channel]").forEach(el => {
        el.href = CONFIG.WA_CHANNEL_URL;
    });
    document.querySelectorAll("[data-wa-contact]").forEach(el => {
        const msg = encodeURIComponent("Hi Noctra! I have a question.");
        el.href = `https://wa.me/${CONFIG.WA_NUMBER}?text=${msg}`;
    });
}

// ---- INIT -----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initFilters();
    renderProducts("All");
    initWALinks();
});
