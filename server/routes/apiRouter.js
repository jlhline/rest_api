const express = require("express");
const {
  getDoctors,
  getAppointments,
  deleteAppointment,
  addAppointment,
} = require("../controllers/dataController.js");
const router = express.Router();

router.get("/doctors", getDoctors, (req, res) => {
  return res.status(200).json(res.locals.doctors);
});
router.get("/appointments", getAppointments, (req, res) => {
  return res.status(200).json(res.locals.appointments);
});

router.delete("/appointments", deleteAppointment, (req, res) => {
  return res.status(200).json({ message: "Appointment deleted" });
});

router.post("/appointments", getAppointments, addAppointment, (req, res) => {
  return res.status(200).json({ message: "Appointment added" });
});
module.exports = router;
