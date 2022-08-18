const userModel = require('../models/user');

const createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json({
            succeed: true,
            user
        });
    } catch (err) {
        res.status(400).json({
            succeed: false,
            err
        })
    }
}

const findUser = async (req, res) => {
    try {
        const user = await userModel.find();
        res.status(201).json({
            succeed: true,
            user
        })
    } catch (err) {
        res.status(400).json({
            succeed: false,
            err
        })
    }
}


module.exports = {
    createUser,
    findUser
}