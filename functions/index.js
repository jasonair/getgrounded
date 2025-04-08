/* eslint-disable indent, comma-dangle */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const axios = require("axios");
const cors = require("cors")({origin: true});

admin.initializeApp();
const db = admin.firestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.submitForm = onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const {
      name,
      email,
      interest,
      "g-recaptcha-response": recaptchaToken,
    } = req.body;
    const secretKey = "6LeTTg8rAAAAAMd0e5cwfHABFOGWx2zNwty-q7QK";

    // Verify reCAPTCHA token
    try {
      const response = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
          params: {
            secret: secretKey,
            response: recaptchaToken,
          },
        }
      );

      if (!response.data.success) {
        return res.status(400).send("reCAPTCHA validation failed.");
      }

      // Save data to Firestore
      await db.collection("waitlist").add({
        name,
        email,
        interest,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).send("Form submitted successfully!");
    } catch (error) {
      console.error("Error verifying reCAPTCHA or saving data:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
});
/* eslint-enable indent, comma-dangle */
