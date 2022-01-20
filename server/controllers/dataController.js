const db = require("../db/db_connect");

const dataController = {};

dataController.getDoctors = async (req, res, next) => {
  try {
    const sqlQuery = "SELECT * FROM doctors";
    const { rows } = await db.query(sqlQuery);
    res.locals.doctors = rows;
    next();
  } catch (err) {
    return next({ error: err });
  }
};
dataController.getAppointments = async (req, res, next) => {
  const { user_id, appTime } = req.query;

  try {
    const sqlQuery = `SELECT * FROM appointments where user_id='${user_id}' AND appTime='${appTime}'`;
    const { rows } = await db.query(sqlQuery);
    res.locals.appointments = rows;
    next();
  } catch (err) {
    return next({ error: err });
  }
};

dataController.deleteAppointment = async (req, res, next) => {
  const { appointment_id } = req.query;
  console.log(appointment_id);
  try {
    const sqlQuery = `DELETE FROM appointments where appointment_id='${appointment_id}'`;
    await db.query(sqlQuery);

    next();
  } catch (err) {
    return next({ error: err });
  }
};

dataController.addAppointment = async (req, res, next) => {
  const { user_id, firstname, lastname, appTime, kind } = req.query;
  if (new Date(appTime).getMinutes() % 15 !== 0)
    return next({ error: "invalid appointment time" });
  if (res.locals.appointments.length === 3)
    return next({ error: "max appointments scheduled for this time" });

  try {
    const sqlQuery = `INSERT INTO appointments (user_id, firstname, lastname, appTime, kind) VALUES (${user_id}, '${firstname}', '${lastname}', '${appTime}','${kind}')`;
    await db.query(sqlQuery);

    next();
  } catch (err) {
    return next({ error: err });
  }
};

module.exports = dataController;
