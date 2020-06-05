const mongoose = require('mongoose');

const Athlete = mongoose.model('athletes');

app.get('/athletes', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.status(200).json({ athletes });
  } catch (error) {
    res.status(422).send(error);
  }
});

app.post('/athletes', async (req, res) => {
  const athlete = new Athlete(req.body.athlete);
  try {
    await athlete.save();
    res.status(200).json({ athlete });
  } catch (error) {
    res.status(422).send(error);
  }
});

app.put('/athletes:id', async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    const updatedAthleteProfile = await athlete.update(req.body.athlete);
    res.status(200).json({ updatedAthleteProfile });
  } catch (error) {
    res.status(500).send(error);
  }
});