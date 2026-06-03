const path = require("path")
// Dotenv er et bibliotek, der indlæser adgangskoder, API-nøgler og databaseindstillinger fra .env-filen i miljøvariabler, hvilket sikrer datasikkerhed. Det skal stå allerøverst i koden, fordi miljøvariablerne skal indlæses allerføst, så andre dele af koden kan få adgang til dem.
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");

// Server er en variabel fra Express-frameworket, som vi bruger til at oprette webserver. Port er det nummer, som serveren lytter på for at modtage HTTP-anmodninger.
const server = express();
const port = 3042;

// Vi kalder connectDatabase() for at oprette forbindelse til vores database, så vi kan hente og gemme data.
const connectDatabase = require("./database")
connectDatabase();

// CORS er Cross-Origin Resource Sharing. Det tillader vores frontend-delen, som kører på en anden port, at kommunikere med backend-delen uden at blive blokeret af browsernes sikkerhedspolitikker. Nu kan vores server modtage anmodninger fra andre hjemmesider eller domæner.
const cors = require("cors");
server.use(cors());

// express.json() gør det muligt for vores server at forstå JSON-data fra frontend.
server.use(express.json());

let activityRoutes = require('./routes/activityRoutes');
let stayRoutes = require('./routes/stayRoutes');
let reviewRoutes = require('./routes/reviewRoutes');

// Vi adskiller forskellige routes i forskellige filer for at holde koden bedre organiseret. Når vi skriver server.use(activityRoutes), fortæller vi serveren, at den skal bruge de routes, der er defineret i activityRoutes-filen.
server.use(activityRoutes);
server.use(stayRoutes);
server.use(reviewRoutes);

/* ROUTES */

// OPGAVE: stays og reviews ligger stadig her i server.js.
// Det er DEM, I skal flytte ud i models/, handlers/ og routes/ —
// præcis som activities er gjort. Slet dem herfra, når I er færdige.

/* let stays = require("./stays.json");
let reviews = require("./reviews.json");
 */
/* server.get("/stays", (req, res) => {
  res.json(stays);
});

server.get("/reviews", (req, res) => {
  res.json(reviews);
}); */

server.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
