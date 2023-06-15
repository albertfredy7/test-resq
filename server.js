const express = require('express')

const app = express();
app.use(express.json());

let latitude = '';
let longitude = '';

app.post('/receive-data', (req, res) => {
  const { latitude: reqLatitude, longitude: reqLongitude } = req.body;
  console.log(latitude)
  console.log(longitude)
  latitude = reqLatitude.toString();
  longitude = reqLongitude.toString();
  console.log(`Received location from Streamlit: Latitude ${latitude}, Longitude ${longitude}`);
  res.status(200).send('Location received');
});

app.get('/location', (req, res) => {
  const data = { latitude, longitude };
  res.status(200).json(data);
});

const port = 8001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});