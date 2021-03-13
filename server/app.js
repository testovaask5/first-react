const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('San_react_ov4', 'san', '2eJi7o', {
    host: '109.206.169.221',
    dialect: 'mysql'
});

class Task extends Model { }
Task.init({
    text: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
}, { sequelize, modelName: 'task' });

(async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Successful connection to the Database')
    start()
})();

function start() {
    const express = require('express')
    const app = express()

    app.use('/api', express.json())
    
    app.get('/api/tasks', async (req, res) => {
        const tasks = await Task.findAll()
        res.send(tasks)
    })

    app.post('/api/task', async (req, res) => {
        const result = await Task.create(req.body)
        res.status(201).send(result)
    })

    app.patch('/api/task/:id', async (req, res) => {
        const taskId = req.params.id
        const result = await Task.update(req.body, {
            where: {
                id: taskId
            }
        })
        res.send(result)
    })

    app.delete('/api/task/:id', async (req, res) => {
        const taskId = req.params.id
        await Task.destroy({ 
            where: { id: taskId } 
        }) 
        res.send({
            message: "Successful delete"
        })
    })
    
    app.listen(4000, () => {
        console.log('Successful started on http://localhost:4000')
    })
}
