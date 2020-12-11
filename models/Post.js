// Подключение Mongoose
const mongoose = require('mongoose')

// Создание объекта схемы
const Schema = mongoose.Schema

// Описание подели
const postSchema = new Schema ({
    title: {
        type: String, // тип строка
        required: true // обязателен
    },
    text : {
        type: String, // тип строка
        required: true, // обязателен
    },
    date: {
        type: Date, // тип дата
        default: Date.now // по умолчани, дата отправки на сервер
    } 
})

// Регистрируем коллекцию и модель каждого поста
module.exports = mongoose.model('posts', postSchema)