// Vi importerer Activity-modellen for at gøre det tilgængeligt her, så vi kan udføre CRUD-operationer på aktiviteterne i databasen.
const Activity = require('../models/Activity')

async function getAllActivities(req, res) {
    // Activity.find finder alle artiviteter i databasen. Vi bruger await for at vente på, at denne operation er færdig før går videre, fordi det er en asynkron operation, der kan tage tid.
    const activities = await Activity.find();
    // res.json (response) retunerer data i JSON-format til frontend
    res.json(activities);
}

async function getActivityById(req, res) {
   
    // req.params er en objekt, der indeholder alle de parametre, der er sendt i URL. Her henter vi id ud fra URL, som vi skal bruge til at finde den specifikke aktivitet i databasen.
    const id = req.params.id;

    try {
        // Activity.findById() finder en aktivitet i databasen baseret på det id, vi har hentet fra URL.
        const activity = await Activity.findById(id);

        // Vi tjekker, om der blev fundet en aktivitet med det id. Hvis aktiviteten ikke findes i databasen, sender vi error 404 - Not Found.
        if (!activity) {
            return res.status(404).json({ error: "Aktiviteten blev ikke fundet" });
        }

        // Hvis aktiviteten blev fundet, sender vi den tilbage i JSON-format.
        res.json(activity);
    } catch (error) {

        // Vi havner i catch, hvis der opstår en fejl under forsøget at finde aktiviteten. Status 400 betyder Bad Request - noget gik galt med anmodning til serveren (fx hvis id'et ikke er gyldigt).
        res.status(400).json({ error: "Ugyldigt id" });
    }
}

async function createActivity(req, res) {
  // Activity.create() opretter en objekt i databasen baseret på data fra req.body - det er data, der var sendt fra frontend.
  const newActivity = await Activity.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    image: req.body.image,
  });

  // Statue 201 (Created) betyder, at ny objekt er oprettet
  res.status(201).json(newActivity);
}

async function updateActivity(req, res) {
    // Vi har brug for id'et her for at finde den specifikke aktivitet i databasen, som vi vil opdatere.
    const id = req.params.id;

    try {
      // findByIdAndUpdate() finder en aktivitet i databasen baseret på id og opdaterer den med de nye data fra req.body. { new: true } betyder, at den returnerer den opdaterede aktivitet i stedet af den gamle.
      const updatedActivity = await Activity.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          description: req.body.description,
          date: req.body.date,
          time: req.body.time,
          image: req.body.image,
        },
        { new: true },
      );

      // Hvis der ikke findes en aktivitet med det id, sender serveren error 404 - Not found.
      if (!updatedActivity) {
        return res.status(404).json({ error: "Aktiviteten blev ikke fundet" });
      }

      // Vi sender den opdaterede aktivitet tilbage i JSON-format.
      res.json(updatedActivity);
    } catch (error) {
        res.status(400).json({ error: "Ugyldigt id" });
    }
}

async function deleteActivity(req, res) {
    // FORKLAR: Hvorfor har vi brug for id'et her?
    // Vi har brug for id'et her for at finde den specifikke aktivitet i databasen, som vi vil slette.
    const id = req.params.id;

    try {
        // findByIdAndDelete() finder en aktivitet i databasen baseret på id og sletter den.
        const deletedActivity = await Activity.findByIdAndDelete(id);

        // Hvis der ikke findes en aktivitet med det id, sender serveren error 404 - Not found.
        if (!deletedActivity) {
            return res.status(404).json({ error: "Aktiviteten blev ikke fundet" });
        }

        // Når aktiviteten er slettet, sender vi den tilbage i JSON-format.
        res.json(deletedActivity);
    } catch (error) {
        res.status(400).json({ error: "Ugyldigt id" });
    }
}

// Vi eksporterer alle funktionerne her, så vi kan bruge dem i vores routes.
module.exports = {
    getAllActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity,
};
