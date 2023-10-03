const { response } = require('express')
const Employee = require('../models/Employee')

// show thw list of emp

const index = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        })
}

// show single employee

const show = (req, res, next) => {
    const id = req.params.id
    Employee.findById(id)
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        })
}

// Add Employees to Database
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then(response => {
            res.json(employee)
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        })
}

// Update an employee

const update = (req, res, next) => {
    const id = req.params.id

    const updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(id, updateData, {new: true})
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        })
}

//Delete an Employee

const destroy = (req, res, next) => {
    const id = req.params.id
    Employee.findByIdAndRemove(id)
        .then(response => {
            res.json({
                message: 'Employee Deleted Successfully'
            })
                .catch(error => {
                    res.json({
                        message: 'An Error Occured'
                    })
                })
        })
}

module.exports = {
    index, show, store, update, destroy
}