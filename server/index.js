require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/model');
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json()); // чтобы приложение могло парсить json формат
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello!!!'})
});

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync(); // сверяет состояние базы данных со схеммой данных
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch(e){
        console.log(e);
    }
};

start();


