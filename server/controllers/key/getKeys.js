import requests from "../../models/requests.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

const getKeys = async (req, res) => {

  try {
    const  name  = req.params.name;
    console.log(name)
      const keys = await requests.find({'resources.list':{$in:[name]}});
      if (!keys) throw "History not found";

      sendSuccessResponse({ res, data: keys });
  } catch (err) {
    sendFailResponse({ res, statusCode: 400, err });
  }

};

export default getKeys;
