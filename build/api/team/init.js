"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTeams = initTeams;

var _responses = require("../../services/responses");

var _model = _interopRequireDefault(require("./model"));

function initTeams(req, res) {
  var team = new _model["default"]({
    name: "Manchester United",
    code: null,
    country: "England",
    founded: 1878,
    venue_name: "Old Trafford",
    venue_surface: "grass",
    venue_address: "Sir Matt Busby Way",
    venue_city: "Manchester",
    venue_capacity: 76212
  });
  var team1 = new _model["default"]({
    name: "Leicester City",
    code: null,
    country: "England",
    founded: 1884,
    venue_name: "King Power Stadium",
    venue_surface: "grass",
    venue_address: "Filbert Way",
    venue_city: "Leicester, Leicestershire",
    venue_capacity: 32262
  });
  team1.save();
  var team2 = new _model["default"]({
    name: "Newcastle United",
    code: null,
    logo: "Not available in Demo",
    country: "England",
    founded: 1892,
    venue_name: "St. James' Park",
    venue_surface: "grass",
    venue_address: "St. James&apos; Street",
    venue_city: "Newcastle upon Tyne",
    venue_capacity: 52389
  });
  team2.save();
  var team3 = new _model["default"]({
    team_id: 17,
    name: "Tottenham Hotspur",
    code: null,
    logo: "Not available in Demo",
    country: "England",
    founded: 1882,
    venue_name: "Tottenham Hotspur Stadium",
    venue_surface: "grass",
    venue_address: "Bill Nicholson Way, 748 High Road",
    venue_city: "London",
    venue_capacity: 62062
  });
  team3.save();
  var team4 = new _model["default"]({
    team_id: 1,
    name: "AFC Bournemouth",
    code: null,
    logo: "Not available in Demo",
    country: "England",
    founded: 1899,
    venue_name: "Vitality Stadium",
    venue_surface: "grass",
    venue_address: "Dean Court, Kings Park",
    venue_city: "Bournemouth, Dorset",
    venue_capacity: 12000
  });
  team4.save();
  var team5 = new _model["default"]({
    name: "Cardiff City",
    code: null,
    country: "Wales",
    founded: 1889,
    venue_name: "Cardiff City Stadium",
    venue_surface: "grass",
    venue_address: "Leckwith Road",
    venue_city: "Caerdydd",
    venue_capacity: 33280
  });
  team5.save();
  var team6 = new _model["default"]({
    name: "Fulham",
    code: null,
    country: "England",
    founded: 1879,
    venue_name: "Craven Cottage",
    venue_surface: "grass",
    venue_address: "Stevenage Road",
    venue_city: "London",
    venue_capacity: 25700
  });
  team6.save();
  var team7 = new _model["default"]({
    name: "Crystal Palace",
    code: null,
    country: "England",
    founded: 1905,
    venue_name: "Selhurst Park",
    venue_surface: "grass",
    venue_address: "Holmesdale Road",
    venue_city: "London",
    venue_capacity: 26309
  });
  team7.save();
  var team8 = new _model["default"]({
    name: "Huddersfield Town",
    code: null,
    country: "England",
    founded: 1908,
    venue_name: "John Smith's Stadium",
    venue_surface: "grass",
    venue_address: "Stadium Way",
    venue_city: "Huddersfield, West Yorkshire",
    venue_capacity: 24554
  });
  team8.save();
  var team9 = new _model["default"]({
    name: "Chelsea",
    code: null,
    country: "England",
    founded: 1905,
    venue_name: "Stamford Bridge",
    venue_surface: "grass",
    venue_address: "Fulham Road",
    venue_city: "London",
    venue_capacity: 41841
  });
  team9.save();
  var team10 = new _model["default"]({
    name: "Watford",
    code: null,
    country: "England",
    founded: 1881,
    venue_name: "Vicarage Road",
    venue_surface: "grass",
    venue_address: "Vicarage Road",
    venue_city: "Watford",
    venue_capacity: 21577
  });
  team10.save();
  var team11 = new _model["default"]({
    name: "Brighton & Hove Albion",
    code: null,
    country: "England",
    founded: 1901,
    venue_name: "The American Express Community Stadium",
    venue_surface: "grass",
    venue_address: "Village Way",
    venue_city: "Falmer, East Sussex",
    venue_capacity: 30750
  });
  team11.save();
  var team12 = new _model["default"]({
    name: "Wolverhampton Wanderers",
    code: null,
    country: "England",
    founded: 1877,
    venue_name: "Molineux Stadium",
    venue_surface: "grass",
    venue_address: "Waterloo Road",
    venue_city: "Wolverhampton, West Midlands",
    venue_capacity: 31700
  });
  team12.save();
  var team13 = new _model["default"]({
    name: "Everton",
    code: null,
    country: "England",
    founded: 1878,
    venue_name: "Goodison Park",
    venue_surface: "grass",
    venue_address: "Goodison Road",
    venue_city: "Liverpool",
    venue_capacity: 40569
  });
  team13.save();
  var team14 = new _model["default"]({
    name: "Liverpool",
    code: null,
    country: "England",
    founded: 1892,
    venue_name: "Anfield",
    venue_surface: "grass",
    venue_address: "Anfield Road",
    venue_city: "Liverpool",
    venue_capacity: 55212
  });
  team14.save();
  var team15 = new _model["default"]({
    name: "West Ham United",
    code: null,
    country: "England",
    founded: 1895,
    venue_name: "London Stadium",
    venue_surface: "grass",
    venue_address: "Marshgate Lane, Stratford",
    venue_city: "London",
    venue_capacity: 60000
  });
  team15.save();
  var team16 = new _model["default"]({
    name: "Southampton",
    code: null,
    country: "England",
    founded: 1885,
    venue_name: "St. Mary's Stadium",
    venue_surface: "grass",
    venue_address: "Britannia Road",
    venue_city: "Southampton, Hampshire",
    venue_capacity: 32689
  });
  team16.save();
  var team17 = new _model["default"]({
    name: "Burnley",
    code: null,
    country: "England",
    founded: 1882,
    venue_name: "Turf Moor",
    venue_surface: "grass",
    venue_address: "Harry Potts Way",
    venue_city: "Burnley",
    venue_capacity: 22546
  });
  team17.save();
  var team18 = new _model["default"]({
    name: "Arsenal",
    code: null,
    country: "England",
    founded: 1886,
    venue_name: "Emirates Stadium",
    venue_surface: "grass",
    venue_address: "Queensland Road",
    venue_city: "London",
    venue_capacity: 60355
  });
  team18.save();
  var team19 = new _model["default"]({
    name: "Manchester City",
    code: null,
    country: "England",
    founded: 1880,
    venue_name: "Etihad Stadium",
    venue_surface: "grass",
    venue_address: "Rowsley Street",
    venue_city: "Manchester",
    venue_capacity: 55097
  });
  team19.save();
  var record = new _model["default"](team);
  return record.save().then(function (result) {
    if (!result) {
      (0, _responses.fail)(res, 404, "Error not found newly added team");
    }

    return (0, _responses.success)(res, 200, result, "Done Initializing team Data!");
  })["catch"](function (err) {
    (0, _responses.fail)(res, 500, "Error adding fixtures ".concat(err.message));
  });
}
//# sourceMappingURL=init.js.map