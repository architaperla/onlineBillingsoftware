var express=require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
//res.send('Hello World!')
//res.sendFile(path.resolve("index.html"))
res.render('index.ejs')
console.log("get req for homepage")
})
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)})