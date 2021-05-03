const express = require("express");
const mongoose = require("mongoose");
const form = require("../backend/user");
const route = express.Router();
route.post('/', async(req, res) => {
    const { fname, date_time, communication, technical_skills, attitude, team_player, remarks } = req.body;
    let data = {};
    data.fname = fname;
    data.date_time = date_time;
    data.communication = communication;
    data.technical_skills = technical_skills;
    data.attitude = attitude;
    data.team_player = team_player;
    data.remarks = remarks;


    let userModel = new form(data);
    userModel.save();
    res.json(userModel);

});
module.exports = route;