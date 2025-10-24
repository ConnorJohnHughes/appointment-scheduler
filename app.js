import express from "express";

const app = express();
const PORT = 3004;

// Store appointments in memory (resets when the server restarts)
const appointments = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // to parse from data

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/submit", (req, res) => {
  const {
    fName,
    lName,
    "event-date": eventDate,
    "event-time": eventTime,
  } = req.body;

  const appointment = {
    fName,
    lName,
    eventDate,
    eventTime,
    timestamp: new Date().toLocaleString(),
  };

  appointments.push(appointment);
  console.log("New appointment:", appointment);

  res.redirect("/confirmation");
});

app.get("/confirmation", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
