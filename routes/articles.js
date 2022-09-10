const express = require('express')
const router = express.Router()

const articles = require('./../models/articles')

module.exports = router



router.get('/new', (req, res) => {

    res.render('articles/new', {article: new article()})
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) =>{

    const article = new articles({
            title: req.body.title,
            description: req.body.description,
            markdown: req.body.markdown,
    })

    try{
       article = await article.save()
        res.redirect(`articles/${article.id}`)
    }
    catch(e){
        res.render('articles/index', {article: articles})
    }
    
})