// Подключаем Express
const express = require('express')

// Функция роутов от express
const router = express.Router()

// Подключение можели с постами
const Post = require('../models/Post')

// Экспортируем переменную роутер
module.exports = router

// Получаем все посты
router.get('', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

// POST

router.post('', async (req, res) => {
    const postData = {
        title: req.body.title,
        text: req.body.text,
    }
    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)
})

// DELETE
router.delete('', async (req, res) => {
    await Post.remove({ _id: req.params.id })
    res.status(200).json({
        message: 'Удалено'
    })
})