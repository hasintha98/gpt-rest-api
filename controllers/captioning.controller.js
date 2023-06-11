const createError = require("http-errors");
const CaptionService = require("../services/captioning.service")

const getImageCaption = async (req, res, next) => {
  const { message } = req.body;

  try {
    console.log(message)
    if (!message) {
      return res.status(400).json({message: "Details Required" })
    }

    const result = await CaptionService.getImageCaption(message);

    return res.json(result);
  } catch (error) {
    console.log(error.message)
    return res.status(error.statusCode).json({message:error.message })

    // next(error);
  }
};

module.exports = {
  getImageCaption
};
