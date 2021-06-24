const User = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await User.find().select();
  res.status(200).json(users);
};

module.exports.getOneUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).send({ message: `Unkonown ID : ${req.params.id}` });

  await User.findById(req.params.id, (err, data) => {
    if (!err) res.status(200).json(data);
    else res.status(200).send({ message: `Erreur` });
  });
};

module.exports.addNewUser = async (req, res) => {
  const { fullname, username, email, phone, website } = req.body;
  try {
    const user = await User.create({
      fullname,
      username,
      email,
      phone,
      website,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send(err);
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).send({ message: `Unknown ID : ${req.params.id}` });

  try {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullname: req.body.fullname,
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          website: req.body.website,
        },
      },
      { new: true, upsert: true },
      (err, data) => {
        if (!err) res.send(data);
        else res.status(500).json({ message: err });
      }
    );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).send({ message: `Unknown ID : ${req.params.id}` });

  try {
    User.remove({ _id: req.params.id }).exec();
    res.status(200).send({ message: `Deleted successfully!` });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
