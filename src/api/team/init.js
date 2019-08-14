import { success, fail } from "../../services/responses";
import Team from "./model";

export function initTeams(req, res) {
  const team = new Team({
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

  const team1 = new Team({
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

  const team2 = new Team({
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

  const team3 = new Team({
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

  const team4 = new Team({
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

  const team5 = new Team({
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

  const team6 = new Team({
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

  const team7 = new Team({
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

  const team8 = new Team({
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

  const team9 = new Team({
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

  const team10 = new Team({
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

  const team11 = new Team({
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

  const team12 = new Team({
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

  const team13 = new Team({
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

  const team14 = new Team({
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

  const team15 = new Team({
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

  const team16 = new Team({
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

  const team17 = new Team({
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

  const team18 = new Team({
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

  const team19 = new Team({
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

  const record = new Team(team);
  return record
    .save()
    .then(result => {
      if (!result) {
        fail(res, 404, "Error not found newly added team");
      }
      return success(res, 200, result, "Done Initializing team Data!");
    })
    .catch(err => {
      fail(res, 500, `Error adding fixtures ${err.message}`);
    });
}
