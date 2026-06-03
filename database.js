// Mongoose er et bibliotek (ODM) til Node.js, som fungerer som en bro mellem vores kode og MongoDB. Vi bruger det til at lave faste regler for vores data (Schemas) og for at få nemme metoder til at søge, gemme og slette i databasen. 
const mongoose = require("mongoose")

async function connectDatabase() {
    try {
      // mongoose.connect() opretter en forbindelse mellem vores Node.js app og MongoDB-databasen via URL'en fra .env.
      // Vi bruger "await", fordi det tager tid at oprette forbindelsen. "await" stopper koden og venter, indtil forbindelsen er helt klar, før den går videre.
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Forbundet til MongoDB!");
    } catch (error) {

      // try/catch er en struktur til fejlhåndtering. Koden i "try" forsøger at køre, og hvis der opstår en fejl, stopper den med det samme og hopper over i "catch".
      // Hvis forbindelsen fejler, crasher appen ikke, men fejlen fanges i catch-blokken, og fejlens besked udskrives i terminalen via console.error.

      console.error(
        "Kunne ikke oprette forbindelse til MongoDB..",
        error.message,
      );
    }
}

// Det gør muligt for andre filer at bruge funktionen for at interagere med databasen.
module.exports = connectDatabase
