const TeamModel = require("../schemas/team_schema");

exports.getAllTeam = async (req, res) => {
  try {
    const allTeam = await TeamModel.find();
    res.status(200).json(allTeam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
