// Подкоючение Express к проекту
const express = require('express')

//Подключение mongoose
const mongoose = require('mongoose')

// Подключений путей
const path = require('path')

// Применяем роутер для сервера
const postRouter = require('./routes/post')

// Подключение глобальных констант
const keys = require('./keys')

// Порт, на котором работает сервер
const port = process.env.PORT || 5000

// Путь к клиентской части
const clientPath = path.join(__dirname, 'client')

//Подключение к базе данных
mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err))

// Создание сервера
const app = express()

// Приминение роутера RestAPI
app.use('/api/post', postRouter)

//  Экспорт функционала к серверу
app.use(express.static(clientPath)) 

// Запуск сервера
app.listen(port, () => {
    console.log(`Server run on ${port} port`)
})

