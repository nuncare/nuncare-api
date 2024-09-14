const Pharmacy = require("../../../models/Pharmacy");
const pharmacies = require("../../test/controller/pharmacies.json");

const generateData = async (req, res, next) => {
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  generateData,
};
