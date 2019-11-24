import request from "request";
import { success, fail, notFound } from "../../services/responses";

// Retrieve a single record
export function search(req, res) {
  const apiKey = process.env.APIKEY;
  const { q } = req.query || {};
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${apiKey}`;

  request(url, (err, response, result) => {
    if (err) {
      if (!result) return notFound(res, "Error record not found.");
      return fail(res, 500, `Error retrieving record.\r\n${err.message}`);
    } else {
      let weather = JSON.parse(result);
      return success(res, 200, weather, "retrieving record was successfull!");
    }
  });
}
