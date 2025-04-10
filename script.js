// Firebase configuration - using modular imports from npm package

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "grounded-7832a.firebaseapp.com",
  projectId: "grounded-7832a",
  storageBucket: "grounded-7832a.firebasestorage.app",
  messagingSenderId: "546799366765",
  appId: "1:546799366765:web:6e25af929a86b24751c564",
  measurementId: "G-MSNE0YT0GY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Show the mobile navigation menu
function showMenu() {
  document.getElementById("navLinks").style.right = "0";
}

// Hide the mobile navigation menu
function hideMenu() {
  document.getElementById("navLinks").style.right = "-250px";
}

// Make menu functions globally available
window.showMenu = showMenu;
window.hideMenu = hideMenu;

// Enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      hideMenu();
      window.scrollTo({ top: targetElement.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// Animate number counters in the carbon impact section
function animateCounter() {
  const counters = [
    { id: "co2-counter", target: 10 },
    { id: "miles-counter", target: 40 },
    { id: "flights-counter", target: 45000 },
  ];

  const duration = 2500;
  const frameDuration = 1000 / 60;
  const frames = Math.ceil(duration / frameDuration);

  counters.forEach((counterData) => {
    const counter = document.getElementById(counterData.id);
    if (!counter) return;

    const increment = counterData.target / frames;
    let count = 0;

    const counterAnimation = setInterval(() => {
      count += increment;

      if (count >= counterData.target) {
        count = counterData.target;
        clearInterval(counterAnimation);
      }

      if (counterData.id === "co2-counter" || counterData.id === "miles-counter") {
        counter.textContent = (Math.floor(count * 10) / 10).toLocaleString();
      } else {
        counter.textContent = Math.floor(count).toLocaleString();
      }
    }, frameDuration);
  });
}

// Update the user count and carbon savings values when slider is adjusted
function updateUserCount() {
  const userCountSlider = document.getElementById("user-count-slider");
  const userCount = document.getElementById("user-count");
  const carbonCounter = document.getElementById("carbon-counter");

  if (userCountSlider) {
    userCountSlider.addEventListener("input", function () {
      const count = this.value;
      userCount.textContent = count.toLocaleString();
      const carbonSavings = count * 36.5;
      carbonCounter.textContent = Math.floor(carbonSavings).toLocaleString();
    });
  }
}

// Declare variables for form and modal elements
let waitlistForm, successModal, closeBtn, closeModalBtn;

// Main DOMContentLoaded block that initializes UI logic and handlers
document.addEventListener("DOMContentLoaded", function () {
  // Initialise form and modal elements
  waitlistForm = document.getElementById("waitlist-form");
  successModal = document.getElementById("success-modal");
  closeBtn = document.querySelector(".close");
  closeModalBtn = document.getElementById("close-modal");

  // Handle waitlist form submission
  if (waitlistForm) {
    const submitButton = waitlistForm.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', async function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Validate name
      const nameField = document.getElementById('name');
      const namePattern = /^[A-Za-z\s]+$/;
      if (!nameField.value.trim() || !namePattern.test(nameField.value.trim())) {
        alert('Please enter a valid name (letters and spaces only).');
        nameField.focus();
        return;
      }

      // Validate email
      const emailField = document.getElementById('email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim() || !emailPattern.test(emailField.value.trim())) {
        alert('Please enter a valid email address.');
        emailField.focus();
        return;
      }

      // Validate dropdown and radio
      const interest = document.getElementById('interest');
      if (!interest.value) {
        alert('Please select a sustainable habit you are most interested in tracking.');
        interest.focus();
        return;
      }

      const interestLevel = document.querySelector('input[name="interestLevel"]:checked');
      if (!interestLevel) {
        alert('Please select how excited you are to try Grounded.');
        return;
      }

      // Collect form data
      const formData = new FormData(waitlistForm);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // Get reCAPTCHA token and submit the form
      try {
        const recaptchaToken = await grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'submit' });
        formDataObj['g-recaptcha-response'] = recaptchaToken;
        submitButton.disabled = true;

        const response = await fetch('https://us-central1-grounded-7832a.cloudfunctions.net/submitForm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formDataObj),
        });

        if (response.ok) {
          successModal.style.display = "flex";
          waitlistForm.reset();
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please try again later.');
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  // Modal close button logic
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      successModal.style.display = "none";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      successModal.style.display = "none";
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === successModal) {
      successModal.style.display = "none";
    }
  });

  // Toggle active feature column on click (mobile UX)
  const featureCols = document.querySelectorAll(".feature-col");
  if (window.innerWidth <= 700) {
    featureCols.forEach((col) => {
      col.addEventListener("click", function () {
        featureCols.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // Animate carbon counters when section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "carbon-impact") {
            animateCounter();
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const carbonImpactSection = document.getElementById("carbon-impact");
  if (carbonImpactSection) {
    observer.observe(carbonImpactSection);
  }

  // Initialise user count slider logic
  if (document.getElementById("user-count-slider")) {
    updateUserCount();
  }

  // GDPR cookie consent popup logic
  const cookieConsent = document.getElementById("cookieConsent");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieSettings = document.getElementById("cookieSettings");
  const cookieSettingsPanel = document.getElementById("cookieSettingsPanel");
  const cookieSave = document.getElementById("cookieSave");
  const analyticsConsent = document.getElementById("analyticsConsent");
  const marketingConsent = document.getElementById("marketingConsent");

  const cookieChoices = localStorage.getItem("cookieConsent");
  if (!cookieChoices) {
    setTimeout(() => {
      cookieConsent.style.display = "block";
    }, 1000);
  } else {
    const preferences = JSON.parse(cookieChoices);
    if (preferences.analytics) {
      console.log("Analytics cookies enabled");
    }
    if (preferences.marketing) {
      console.log("Marketing cookies enabled");
    }
  }

  // Accept all cookie types
  cookieAccept.addEventListener("click", function () {
    const preferences = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    console.log("All cookies accepted");
    cookieConsent.style.display = "none";
  });

  // Open the detailed cookie settings panel
  cookieSettings.addEventListener("click", function () {
    cookieSettingsPanel.style.display = "block";
    const savedPreferences = localStorage.getItem("cookieConsent");
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      analyticsConsent.checked = preferences.analytics || false;
      marketingConsent.checked = preferences.marketing || false;
    }
  });

  // Save cookie preferences and hide panel
  cookieSave.addEventListener("click", function () {
    const preferences = {
      necessary: true,
      analytics: analyticsConsent.checked,
      marketing: marketingConsent.checked,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    if (preferences.analytics) {
      console.log("Analytics cookies enabled");
    }
    if (preferences.marketing) {
      console.log("Marketing cookies enabled");
    }
    cookieConsent.style.display = "none";
  });

  // Track clicks on buttons or links with data-description, respecting cookie preferences
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-description], a[data-description]");
    if (target) {
      const description = target.getAttribute("data-description") || "No description";
      const cookiePrefs = JSON.parse(localStorage.getItem("cookieConsent") || '{}');
      if (cookiePrefs.analytics) {
        logEvent(analytics, 'button_click', { button_description: description });
      }
      console.log(`Event logged: ${description}`);
    }
  });
});

// Debug log for checking if reCAPTCHA is loaded
if (typeof grecaptcha === 'undefined') {
  console.error('reCAPTCHA script not loaded. Ensure the script is included in index.html.');
} else {
  console.log('reCAPTCHA script loaded successfully.');
}