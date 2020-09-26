const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op

const getAllCars = async (req, res) => {
  const allCars = await db.Car.findAll()
  res.status(200).send(allCars)
}

const getCarById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const carById = await db.Car.findOne({
    where: {
      carId: targetId
    }
  })
  console.log('carById: ', carById);
  res.status(200).send(carById)
}

const createCar = async (req, res) => {
  const { carId, carName, carPrice } = req.body
  const newCar = await db.Car.create({ // should send only primary key and secondary key??or send only primary key
    carId: carId,
    carName: carName,
    carPrice: carPrice
  })
  console.log('newCar: ', newCar);
  res.status(201).send(newCar)
}

const updateCar = async (req, res) => {
  const targetId = req.params.id
  const { carName, carPrice } = req.body
  await db.Car.update({
    carName: carName,
    carPrice: carPrice,
  }, { where: { carId: targetId } })
  res.status(202).send(`update carName: ${carName} and carPrice: ${carPrice} success.`)
}

const deleteCar = async (req, res) => {
  const targetId = req.params.id
  await db.Car.destroy({
    where: {
      carId: targetId
    }
  })
  // console.log(`delete carId: ${carId} success.`); // cannot get carId
  res.status(204).send()
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
}