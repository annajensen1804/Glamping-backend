const mongoose = require("mongoose");

// Schema er en skabelon, som definerer hvordan vores data skal se ud i MongoDB. Vi bruger det til at organisere vores data.
const activitySchema = new mongoose.Schema(
    {
        // Hver felt i schemaet har en type (her String, kan også være Number, Boolean osv.), som fortæller MongoDB hvilken slags data skal gemmes i hver felt.
        title: String,
        description: String,
        date: String,
        time: String,
        image: String,
    },
    {
        // MongoDB vil automatisk tilføje to felter til vores data, som viser hvornår hver activity blev lavet (createdAt) og opdateret (updatedAt).
        timestamps: true,
    }
);

// Vi opretter en model baseret på vores schema for at interagere med vores database. Vi eksporterer modellen, så vi kan bruge den i andre dele af koden (handlers, routes osv.).
module.exports = mongoose.model("Activity", activitySchema);