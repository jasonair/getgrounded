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
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      return res.status(204).send("");
    }

    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const {
      name,
      email,
      interest,
      interestLevel, // Add the new field to the Firestore document
      "g-recaptcha-response": recaptchaToken,
    } = req.body;
    const secretKey = "6LeTTg8rAAAAAMd0e5cwfHABFOGWx2zNwty-q7QK";

    console.log("Received data:", { name, email, interest, interestLevel }); // Debugging log

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

      console.log("Attempting to save to Firestore:", {
        name,
        email,
        interest,
        interestLevel
      }); // Fixed spacing and line length

      const savedDoc = await db.collection("waitlist").add({
        name,
        email,
        interest,
        interestLevel,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      }); // Fixed spacing and line length

      console.log("Document saved successfully with ID:", savedDoc.id);

      return res.status(200).send("Form submitted successfully!");
    } catch (error) {
      console.error("Error verifying reCAPTCHA or saving data:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
});
/* eslint-enable indent, comma-dangle */
