const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op

const getAllReservations = async (req, res) => {
  // const allReservations = await db.Reservation.findAll({ include : [db.Uesr]}) // pull item from User table.
  const allReservations = await db.Reservation.findAll()
  res.status(200).send(allReservations)
}


const getReserveById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const reserveById = await db.Reservation.findOne({
    where: {
      reserveId: targetId
    }
  })
  console.log('reserveById: ', reserveById);
  res.status(200).send(reserveById)
}

const createReserve = async (req, res) => {
  const { reserveId, reserveDate, reserveStatus } = req.body
  const newReserve = await db.Reservation.create({ // should send only primary key and secondary key??or send only primary key
    reserveId: reserveId,
    reserveDate: reserveDate,
    reserveStatus: reserveStatus,
  })
  console.log('newReserve: ', newReserve);
  res.status(201).send(newReserve)
}

const updateReserve = async (req, res) => {
  const targetId = req.params.id
  const { reserveStatus } = req.body
  await db.Reservation.update({
    reserveStatus: reserveStatus,
  }, { where: { reserveId: targetId } })
  res.status(202).send(`update reserveStatus: ${reserveStatus} success.`)
}

const deleteReserve = async (req, res) => {
  const targetId = req.params.id
  await db.Reservation.destroy({
    where: {
      reserveId: targetId
    }
  })
  // console.log(`delete reserveId: ${reserveId} success.`); // cannot get reserveId
  res.status(204).send()
}


module.exports = {
  getAllReservations,
  getReserveById,
  createReserve,
  updateReserve,
  deleteReserve,
}