const Stay = require("../models/Stay");

async function getAllStays(req, res) {
    const stays = await Stay.find();
    res.json(stays);
}

async function getStayById(req, res) {
    const id = req.params.id;

    try {
        const stay = await Stay.findById(id);

        if(!stay) {
            return res.status(404).json({ error: "Opholdet blev ikke fundet" })
        }

        res.json(stay);
    } catch (error) {
        res.status(400).json({error: "Ugyldigt id"});
    }
}

async function createStay(req, res) {
    const newStay = await Stay.create({
      title: req.body.title,
      teaser: req.body.teaser,
      description: req.body.description,
      numberOfPersons: req.body.numberOfPersons,
      discountInPercent: req.body.discountInPercent,
      price: req.body.price,
      includes: req.body.includes,
      image: req.body.image,
    });
    res.status(201).json(newStay);
}

async function updateStay(req, res) {
    const id = req.params.id;

    try {
        const updatedStay = await Stay.findByIdAndUpdate(id, 
        {
            title: req.body.title,
            teaser: req.body.teaser,
            description: req.body.description,
            numberOfPersons: req.body.numberOfPersons,
            discountInPercent: req.body.discountInPercent,
            price: req.body.price,
            includes: req.body.includes,
            image: req.body.image,
        },
    { new: true },
    );

    if (!updatedStay) {
        return res.status(404).json({ error: "Opholdet blev ikke fundet" });
    }
    res.json(updatedStay);
    } catch (error) {
        res.status(400).json({ error: "Ugyldigt id" });
    }
}

async function deleteStay(req, res) {
    const id = req.params.id;

    try {
        const deletedStay = await Stay.findByIdAndDelete(id);

        if (!deletedStay) {
            return res.status(404).json({error: "Opholdet blev ikke fundet" });
        } 
        res.json(deletedStay);

    } catch (error) {
        res.status(400).json({error: "Ugyldigt id" });
    }
}

module.exports = {
    getAllStays,
    getStayById,
    createStay,
    updateStay,
    deleteStay,
};