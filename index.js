const express = require('express')
const app = express();
const port = process.env.PORT || 3000


app.get("/" , (req, res) => {
  res.send('Bivenido crack');
})

app.listen( port , () => console.log(`Server running in port ${port}`))
