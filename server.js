const express = require ("express")
const articleRouter = require('./routes/articles')
const app= express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog',
 {useNewUrlParser: true, 
  useUnifiedTopology: true})

//? to start server, npm run devStart


app.set('view engine', 'ejs')

app.use(express.urlencoded ({extended: false}))


app.get('/', (req, res) => {


    const articles = [{
        title: 'Test Article 1',
        createdAt: new Date(),
        textDescription: 'for the fun of it'
    },
    {
        title:'Test Article 2',
        createdAt: new Date(),  
        textDescription: 'for the fun of it 2'
    }]
    res.render('articles/index', {_article: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)