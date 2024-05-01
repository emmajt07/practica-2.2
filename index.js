const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('rute1'))
app.get('/ruta2', (req, res) => res.render('rute2'))

app.use((req, res) =>{
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) =>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    console.log(`El server revivio en http://localhost:${PORT}`);
});