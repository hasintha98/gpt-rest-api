// const User = require("../models/user.model");
const createError = require("http-errors");
const { OpenAIApi, Configuration } = require("openai");
const dotenv =  require("dotenv");
dotenv.config()

const getImageCaption = async (message) => {
  try {

    const openai = new OpenAIApi(new Configuration({
      apiKey: process.env.GPT_KEY
    }))

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: message}]
    })

    console.log(response.data)
    return response.data
   
  } catch (error) {
    console.log("service", error);
    throw createError(error.statusCode, error.message);
  }
};


module.exports = {
  getImageCaption
}
