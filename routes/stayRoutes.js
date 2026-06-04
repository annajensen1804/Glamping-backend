const express = require("express");

const router = express.Router();

const { getAllStays, getStayById, createStay, updateStay, deleteStay } = require("../handlers/stayHandler");

router.get("/stays", getAllStays);
router.get("/stay/:id", getStayById);
router.post("/stay", createStay);
router.put("/stay/:id", updateStay);
router.delete("/stay/:id", deleteStay);

module.exports = router;