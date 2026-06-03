const express = require("express");

// express.Router er en "miniserver", der gør muligt at organisere vores routes som moduler. Vi laver det for at adskille routes i forskellige filer.
const router = express.Router();

// Funktionerne kommer fra activityHandler.js, vi importerer funktionerne og laver objekt-destrukturering: henter hver funktion og gemmer den direkte i en variable med det sammen navn som i handler-filen.
const {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} = require("../handlers/activityHandler");

// GET: Henter data fra serveren uden at ændre noget.
// POST: Sender nye data til serveren for at oprette noget helt nyt.
// PUT: Opdaterer eller erstatter en eksisterende ressource på serveren med nye data.
// DELETE: Fjerner en specifik ressource permanent fra databasen.

router.get("/activities", getAllActivities);

// "id" her er en specifik aktivitets nummer (fx 647f3bfa9a123) i databasen. : viser, at det er dynamisk parameter (variabel i URL'en).
router.get("/activity/:id", getActivityById);
router.post("/activity", createActivity);
router.put("/activity/:id", updateActivity);
router.delete("/activity/:id", deleteActivity);

// Vi eksporterer routeren, så server.js kan bruge den.
module.exports = router;
