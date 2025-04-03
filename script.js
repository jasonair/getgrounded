// Firebase configuration - using modular imports from npm package

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ez1DM8kB7DTMmyAibGf-tliEi81yb0I",
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

// No need to reinitialize Firestore in DOMContentLoaded since we're using the modular API

// Navigation menu for mobile
function showMenu() {
  document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
  document.getElementById("navLinks").style.right = "-250px";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Close mobile menu if open
      hideMenu();

      // Scroll to target element
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Carbon counter animation
function animateCounter() {
  const counter = document.getElementById("carbon-counter");
  const userCount = document.getElementById("user-count");
  const targetCount = 36500; // 1000 users * 36.5kg per year (approx avg savings calculated from data)
  const duration = 2000; // milliseconds
  const frameDuration = 1000 / 60; // 60fps
  const frames = Math.ceil(duration / frameDuration);
  const increment = targetCount / frames;

  let count = 0;

  const counterAnimation = setInterval(() => {
    count += increment;

    if (count >= targetCount) {
      count = targetCount;
      clearInterval(counterAnimation);
    }

    counter.textContent = Math.floor(count).toLocaleString();
  }, frameDuration);
}

// Variables for form elements - will be initialized in DOMContentLoaded
let waitlistForm;
let successModal;
let closeBtn;
let closeModalBtn;

// Initialize form-related elements and events in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize form elements
  waitlistForm = document.getElementById("waitlist-form");
  successModal = document.getElementById("success-modal");
  closeBtn = document.querySelector(".close");
  closeModalBtn = document.getElementById("close-modal");

  // Form submission handler
  if (waitlistForm) {
    waitlistForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(waitlistForm);
      const formDataObj = {};

      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // Map form data to match the required fields in the "signup" document
      const signupData = {
        Name: formDataObj.name,
        Email: formDataObj.email,
        Habit: formDataObj.interest,
      };

      // Add a new document to the "grounded" collection using modular API
      try {
        // Using async/await with try/catch for better readability
        (async () => {
          const docRef = await addDoc(collection(db, "grounded"), signupData);
          console.log("Document written with ID: ", docRef.id);

          // Show success modal
          successModal.style.display = "flex";

          // Reset the form
          waitlistForm.reset();
        })().catch((error) => {
          console.error("Error adding document: ", error);

          // Optionally, show an error modal or message
          alert(
            "There was an error submitting your form. Please try again later."
          );
        });
      } catch (error) {
        console.error("Error in form submission: ", error);
        alert(
          "There was an error submitting your form. Please try again later."
        );
      }
    });
  }
});

// Modal close handlers - moved to DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Close modal when clicking the X
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      successModal.style.display = "none";
    });
  }

  // Close modal when clicking the Close button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      successModal.style.display = "none";
    });
  }

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (e) {
    if (e.target === successModal) {
      successModal.style.display = "none";
    }
  });
});

// Run carbon counter animation when the section is in view
document.addEventListener("DOMContentLoaded", function () {
  // Features hover effect for better mobile experience
  const featureCols = document.querySelectorAll(".feature-col");

  if (window.innerWidth <= 700) {
    featureCols.forEach((col) => {
      col.addEventListener("click", function () {
        // Remove active class from all feature columns
        featureCols.forEach((c) => c.classList.remove("active"));

        // Add active class to clicked column
        this.classList.add("active");
      });
    });
  }

  // Intersection Observer for animations
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

  // Observe the carbon impact section
  const carbonImpactSection = document.getElementById("carbon-impact");
  if (carbonImpactSection) {
    observer.observe(carbonImpactSection);
  }
});

// Update user count and carbon savings on range input
function updateUserCount() {
  const userCountSlider = document.getElementById("user-count-slider");
  const userCount = document.getElementById("user-count");
  const carbonCounter = document.getElementById("carbon-counter");

  if (userCountSlider) {
    userCountSlider.addEventListener("input", function () {
      const count = this.value;
      userCount.textContent = count.toLocaleString();

      // Update carbon counter (36.5kg per user per year)
      const carbonSavings = count * 36.5;
      carbonCounter.textContent = Math.floor(carbonSavings).toLocaleString();
    });
  }
}

// Call the function if the slider exists
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("user-count-slider")) {
    updateUserCount();
  }
});

// GDPR Cookie Consent Popup
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieSettings = document.getElementById("cookieSettings");
  const cookieSettingsPanel = document.getElementById("cookieSettingsPanel");
  const cookieSave = document.getElementById("cookieSave");
  const analyticsConsent = document.getElementById("analyticsConsent");
  const marketingConsent = document.getElementById("marketingConsent");

  // Check if user has already made cookie choices
  const cookieChoices = localStorage.getItem("cookieConsent");

  // If no cookie choices have been made, show the popup
  if (!cookieChoices) {
    // Show cookie consent popup with a slight delay for better UX
    setTimeout(() => {
      cookieConsent.style.display = "block";
    }, 1000);
  } else {
    // Apply saved cookie preferences
    const preferences = JSON.parse(cookieChoices);
    if (preferences.analytics) {
      // Enable analytics cookies
      console.log("Analytics cookies enabled");
    }
    if (preferences.marketing) {
      // Enable marketing cookies
      console.log("Marketing cookies enabled");
    }
  }

  // Accept all cookies
  cookieAccept.addEventListener("click", function () {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    // Save preferences to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));

    // Enable all cookies
    console.log("All cookies accepted");

    // Hide the popup
    cookieConsent.style.display = "none";
  });

  // Show cookie settings panel
  cookieSettings.addEventListener("click", function () {
    cookieSettingsPanel.style.display = "block";

    // If there are saved preferences, apply them to checkboxes
    const savedPreferences = localStorage.getItem("cookieConsent");
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      analyticsConsent.checked = preferences.analytics || false;
      marketingConsent.checked = preferences.marketing || false;
    }
  });

  // Save cookie preferences
  cookieSave.addEventListener("click", function () {
    const preferences = {
      necessary: true, // Always required
      analytics: analyticsConsent.checked,
      marketing: marketingConsent.checked,
    };

    // Save preferences to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));

    // Apply cookie preferences
    if (preferences.analytics) {
      // Enable analytics cookies
      console.log("Analytics cookies enabled");
    }
    if (preferences.marketing) {
      // Enable marketing cookies
      console.log("Marketing cookies enabled");
    }

    // Hide the popup
    cookieConsent.style.display = "none";
  });
});
