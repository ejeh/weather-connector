import { success, fail } from "../../services/responses";
import Fixtures from "./model";

export function initFixtures(req, res) {
  const fixture = new Fixtures({
    event_date: "2018-08-10T19:00:00+00:00",
    event_timestamp: 1533927600,
    firstHalfStart: 1533927600,
    secondHalfStart: 1533931200,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Old Trafford (Manchester)",
    referee: null,
    homeTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  const fixture1 = new Fixtures({
    event_date: "2018-08-11T11:30:00+00:00",
    event_timestamp: 1533987000,
    firstHalfStart: 1533987000,
    secondHalfStart: 1533990600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "Rudimar Goltara",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-2",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });

  fixture1.save();

  const fixture2 = new Fixtures({
    event_date: "2018-08-11T14:00:00+00:00",
    event_timestamp: 1533996000,
    firstHalfStart: 1533996000,
    secondHalfStart: 1533999600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "André Rodrigo Rocha",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });

  fixture2.save();

  const fixture3 = new Fixtures({
    event_date: "2018-08-11T14:00:00+00:00",
    event_timestamp: 1533996000,
    firstHalfStart: 1533996000,
    secondHalfStart: 1533999600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Craven Cottage (London)",
    referee: "Andrey Da Silva e Silva",
    homeTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });

  fixture3.save();
  const fixture4 = new Fixtures({
    event_date: "2018-08-11T14:00:00+00:00",
    event_timestamp: 1533996000,
    firstHalfStart: 1533996000,
    secondHalfStart: 1533999600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The John Smith's Stadium (Huddersfield, West Yorkshire)",
    referee: "Vanderlei Soares de Macedo",
    homeTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 3,
    score: {
      halftime: "0-2",
      fulltime: "0-3",
      extratime: null,
      penalty: null
    }
  });

  fixture4.save();
  const fixture5 = new Fixtures({
    event_date: "2018-08-11T14:00:00+00:00",
    event_timestamp: 1533996000,
    firstHalfStart: 1533996000,
    secondHalfStart: 1533999600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "J. Guzmán",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture5.save();

  const fixture6 = new Fixtures({
    event_date: "2018-08-11T16:30:00+00:00",
    event_timestamp: 1534005000,
    firstHalfStart: 1534005000,
    secondHalfStart: 1534008600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: null,
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-1",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture6.save();

  const fixture7 = new Fixtures({
    event_date: "2018-08-12T12:30:00+00:00",
    event_timestamp: 1534077000,
    firstHalfStart: 1534077000,
    secondHalfStart: 1534080600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Anfield (Liverpool)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 0,
    score: {
      halftime: "2-0",
      fulltime: "4-0",
      extratime: null,
      penalty: null
    }
  });
  fixture7.save();

  const fixture8 = new Fixtures({
    event_date: "2018-08-12T12:30:00+00:00",
    event_timestamp: 1534077000,
    firstHalfStart: 1534077000,
    secondHalfStart: 1534080600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. Mary's Stadium (Southampton, Hampshire)",
    referee: "G. Scott",
    homeTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture8.save();

  const fixture9 = new Fixtures({
    event_date: "2018-08-12T15:00:00+00:00",
    event_timestamp: 1534086000,
    firstHalfStart: 1534086000,
    secondHalfStart: 1534089600,
    round: "Regular Season - 1",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture9.save();
  const fixture10 = new Fixtures({
    event_date: "2018-08-18T11:30:00+00:00",
    event_timestamp: 1534591800,
    firstHalfStart: 1534591800,
    secondHalfStart: 1534595400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture10.save();
  const fixture101 = new Fixtures({
    event_date: "2018-08-18T14:00:00+00:00",
    event_timestamp: 1534600800,
    firstHalfStart: 1534600800,
    secondHalfStart: 1534604400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "2-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture101.save();
  const fixture11 = new Fixtures({
    event_date: "2018-08-18T14:00:00+00:00",
    event_timestamp: 1534600800,
    firstHalfStart: 1534600800,
    secondHalfStart: 1534604400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "King Power Stadium (Leicester, Leicestershire)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "2-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture11.save();
  const fixture12 = new Fixtures({
    event_date: "2018-08-18T14:00:00+00:00",
    event_timestamp: 1534600800,
    firstHalfStart: 1534600800,
    secondHalfStart: 1534604400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Wembley Stadium (London)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture12.save();
  const fixture13 = new Fixtures({
    event_date: "2018-08-18T14:00:00+00:00",
    event_timestamp: 1534600800,
    firstHalfStart: 1534600800,
    secondHalfStart: 1534604400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "S. Attwell",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-0",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture13.save();
  const fixture14 = new Fixtures({
    event_date: "2018-08-18T16:30:00+00:00",
    event_timestamp: 1534609800,
    firstHalfStart: 1534609800,
    secondHalfStart: 1534613400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 2,
    score: {
      halftime: "2-2",
      fulltime: "3-2",
      extratime: null,
      penalty: null
    }
  });
  fixture14.save();
  const fixture15 = new Fixtures({
    event_date: "2018-08-19T12:30:00+00:00",
    event_timestamp: 1534681800,
    firstHalfStart: 1534681800,
    secondHalfStart: 1534685400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Turf Moor (Burnley)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 3,
    score: {
      halftime: "1-1",
      fulltime: "1-3",
      extratime: null,
      penalty: null
    }
  });
  fixture15.save();
  const fixture102 = new Fixtures({
    event_date: "2018-08-19T12:30:00+00:00",
    event_timestamp: 1534681800,
    firstHalfStart: 1534681800,
    secondHalfStart: 1534685400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 6,
    goalsAwayTeam: 1,
    score: {
      halftime: "3-1",
      fulltime: "6-1",
      extratime: null,
      penalty: null
    }
  });
  fixture102.save();
  const fixture16 = new Fixtures({
    event_date: "2018-08-19T15:00:00+00:00",
    event_timestamp: 1534690800,
    firstHalfStart: 1534690800,
    secondHalfStart: 1534694400,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The American Express Community Stadium (Falmer, East Sussex)",
    referee: "K. Friend",
    homeTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 2,
    score: {
      halftime: "3-1",
      fulltime: "3-2",
      extratime: null,
      penalty: null
    }
  });
  fixture16.save();
  const fixture17 = new Fixtures({
    event_date: "2018-08-20T19:00:00+00:00",
    event_timestamp: 1534791600,
    firstHalfStart: 1534791600,
    secondHalfStart: 1534795200,
    round: "Regular Season - 2",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Selhurst Park (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture17.save();
  const fixture18 = new Fixtures({
    event_date: "2018-08-25T11:30:00+00:00",
    event_timestamp: 1535196600,
    firstHalfStart: 1535196600,
    secondHalfStart: 1535200200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture18.save();
  const fixture19 = new Fixtures({
    event_date: "2018-08-25T14:00:00+00:00",
    event_timestamp: 1535205600,
    firstHalfStart: 1535205600,
    secondHalfStart: 1535209200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "L. Probert",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture19.save();
  const fixture20 = new Fixtures({
    event_date: "2018-08-25T14:00:00+00:00",
    event_timestamp: 1535205600,
    firstHalfStart: 1535205600,
    secondHalfStart: 1535209200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "G. Scott",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture20.save();
  const fixture21 = new Fixtures({
    event_date: "2018-08-25T14:00:00+00:00",
    event_timestamp: 1535205600,
    firstHalfStart: 1535205600,
    secondHalfStart: 1535209200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The John Smith's Stadium (Huddersfield, West Yorkshire)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture21.save();
  const fixture103 = new Fixtures({
    event_date: "2018-08-25T14:00:00+00:00",
    event_timestamp: 1535205600,
    firstHalfStart: 1535205600,
    secondHalfStart: 1535209200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. Mary's Stadium (Southampton, Hampshire)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture103.save();
  const fixture22 = new Fixtures({
    event_date: "2018-08-25T16:30:00+00:00",
    event_timestamp: 1535214600,
    firstHalfStart: 1535214600,
    secondHalfStart: 1535218200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Anfield (Liverpool)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture22.save();
  const fixture23 = new Fixtures({
    event_date: "2018-08-26T12:30:00+00:00",
    event_timestamp: 1535286600,
    firstHalfStart: 1535286600,
    secondHalfStart: 1535290200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture23.save();
  const fixture24 = new Fixtures({
    event_date: "2018-08-26T15:00:00+00:00",
    event_timestamp: 1535295600,
    firstHalfStart: 1535295600,
    secondHalfStart: 1535299200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Craven Cottage (London)",
    referee: "D. Coote",
    homeTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 2,
    score: {
      halftime: "3-2",
      fulltime: "4-2",
      extratime: null,
      penalty: null
    }
  });
  fixture24.save();
  const fixture105 = new Fixtures({
    event_date: "2018-08-26T15:00:00+00:00",
    event_timestamp: 1535295600,
    firstHalfStart: 1535295600,
    secondHalfStart: 1535299200,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture105.save();
  const fixture25 = new Fixtures({
    event_date: "2018-08-27T19:00:00+00:00",
    event_timestamp: 1535396400,
    firstHalfStart: 1535396400,
    secondHalfStart: 1535400000,
    round: "Regular Season - 3",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Old Trafford (Manchester)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 3,
    score: {
      halftime: "0-0",
      fulltime: "0-3",
      extratime: null,
      penalty: null
    }
  });
  fixture25.save();
  const fixture26 = new Fixtures({
    event_date: "2018-09-01T11:30:00+00:00",
    event_timestamp: 1535801400,
    firstHalfStart: 1535801400,
    secondHalfStart: 1535805000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "King Power Stadium (Leicester, Leicestershire)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture26.save();
  const fixture27 = new Fixtures({
    event_date: "2018-09-01T14:00:00+00:00",
    event_timestamp: 1535810400,
    firstHalfStart: 1535810400,
    secondHalfStart: 1535814000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The American Express Community Stadium (Falmer, East Sussex)",
    referee: "L. Probert",
    homeTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture27.save();
  const fixture28 = new Fixtures({
    event_date: "2018-09-01T14:00:00+00:00",
    event_timestamp: 1535810400,
    firstHalfStart: 1535810400,
    secondHalfStart: 1535814000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture28.save();
  const fixture29 = new Fixtures({
    event_date: "2018-09-01T14:00:00+00:00",
    event_timestamp: 1535810400,
    firstHalfStart: 1535810400,
    secondHalfStart: 1535814000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Selhurst Park (London)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture29.save();
  const fixture30 = new Fixtures({
    event_date: "2018-09-01T14:00:00+00:00",
    event_timestamp: 1535810400,
    firstHalfStart: 1535810400,
    secondHalfStart: 1535814000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "S. Attwell",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture30.save();
  const fixture31 = new Fixtures({
    event_date: "2018-09-01T14:00:00+00:00",
    event_timestamp: 1535810400,
    firstHalfStart: 1535810400,
    secondHalfStart: 1535814000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture31.save();
  const fixture32 = new Fixtures({
    event_date: "2018-09-01T16:30:00+00:00",
    event_timestamp: 1535819400,
    firstHalfStart: 1535819400,
    secondHalfStart: 1535823000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "K. Friend",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture32.save();
  const fixture33 = new Fixtures({
    event_date: "2018-09-02T12:30:00+00:00",
    event_timestamp: 1535891400,
    firstHalfStart: 1535891400,
    secondHalfStart: 1535895000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 3,
    score: {
      halftime: "1-1",
      fulltime: "2-3",
      extratime: null,
      penalty: null
    }
  });
  fixture33.save();
  const fixture34 = new Fixtures({
    event_date: "2018-09-02T15:00:00+00:00",
    event_timestamp: 1535900400,
    firstHalfStart: 1535900400,
    secondHalfStart: 1535904000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Turf Moor (Burnley)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture34.save();
  const fixture35 = new Fixtures({
    event_date: "2018-09-02T15:00:00+00:00",
    event_timestamp: 1535900400,
    firstHalfStart: 1535900400,
    secondHalfStart: 1535904000,
    round: "Regular Season - 4",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture35.save();
  const fixture36 = new Fixtures({
    event_date: "2018-09-15T11:30:00+00:00",
    event_timestamp: 1537011000,
    firstHalfStart: 1537011000,
    secondHalfStart: 1537014600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Wembley Stadium (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture36.save();
  const fixture37 = new Fixtures({
    event_date: "2018-09-15T14:00:00+00:00",
    event_timestamp: 1537020000,
    firstHalfStart: 1537020000,
    secondHalfStart: 1537023600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 2,
    score: {
      halftime: "3-0",
      fulltime: "4-2",
      extratime: null,
      penalty: null
    }
  });
  fixture37.save();
  const fixture38 = new Fixtures({
    event_date: "2018-09-15T14:00:00+00:00",
    event_timestamp: 1537020000,
    firstHalfStart: 1537020000,
    secondHalfStart: 1537023600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 1,
    score: {
      halftime: "2-1",
      fulltime: "4-1",
      extratime: null,
      penalty: null
    }
  });
  fixture38.save();
  const fixture39 = new Fixtures({
    event_date: "2018-09-15T14:00:00+00:00",
    event_timestamp: 1537020000,
    firstHalfStart: 1537020000,
    secondHalfStart: 1537023600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The John Smith's Stadium (Huddersfield, West Yorkshire)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture39.save();
  const fixture40 = new Fixtures({
    event_date: "2018-09-15T14:00:00+00:00",
    event_timestamp: 1537020000,
    firstHalfStart: 1537020000,
    secondHalfStart: 1537023600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "S. Attwell",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 0,
    score: {
      halftime: "2-0",
      fulltime: "3-0",
      extratime: null,
      penalty: null
    }
  });
  fixture40.save();
  const fixture41 = new Fixtures({
    event_date: "2018-09-15T14:00:00+00:00",
    event_timestamp: 1537020000,
    firstHalfStart: 1537020000,
    secondHalfStart: 1537023600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "L. Probert",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture41.save();
  const fixture42 = new Fixtures({
    event_date: "2018-09-15T16:30:00+00:00",
    event_timestamp: 1537029000,
    firstHalfStart: 1537029000,
    secondHalfStart: 1537032600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture42.save();
  const fixture43 = new Fixtures({
    event_date: "2018-09-16T12:30:00+00:00",
    event_timestamp: 1537101000,
    firstHalfStart: 1537101000,
    secondHalfStart: 1537104600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture43.save();
  const fixture44 = new Fixtures({
    event_date: "2018-09-16T15:00:00+00:00",
    event_timestamp: 1537110000,
    firstHalfStart: 1537110000,
    secondHalfStart: 1537113600,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 3,
    score: {
      halftime: "1-2",
      fulltime: "1-3",
      extratime: null,
      penalty: null
    }
  });
  fixture44.save();
  const fixture45 = new Fixtures({
    event_date: "2018-09-17T19:00:00+00:00",
    event_timestamp: 1537210800,
    firstHalfStart: 1537210800,
    secondHalfStart: 1537214400,
    round: "Regular Season - 5",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. Mary's Stadium (Southampton, Hampshire)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-0",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture45.save();
  const fixture46 = new Fixtures({
    event_date: "2018-09-22T11:30:00+00:00",
    event_timestamp: 1537615800,
    firstHalfStart: 1537615800,
    secondHalfStart: 1537619400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Craven Cottage (London)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture46.save();
  const fixture47 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Turf Moor (Burnley)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 0,
    score: {
      halftime: "2-0",
      fulltime: "4-0",
      extratime: null,
      penalty: null
    }
  });
  fixture47.save();
  const fixture48 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 5,
    score: {
      halftime: "0-3",
      fulltime: "0-5",
      extratime: null,
      penalty: null
    }
  });
  fixture48.save();
  const fixture49 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Selhurst Park (London)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture49.save();
  const fixture50 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "King Power Stadium (Leicester, Leicestershire)",
    referee: "D. Coote",
    homeTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture50.save();
  const fixture51 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Anfield (Liverpool)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 0,
    score: {
      halftime: "3-0",
      fulltime: "3-0",
      extratime: null,
      penalty: null
    }
  });
  fixture51.save();
  const fixture52 = new Fixtures({
    event_date: "2018-09-22T14:00:00+00:00",
    event_timestamp: 1537624800,
    firstHalfStart: 1537624800,
    secondHalfStart: 1537628400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Old Trafford (Manchester)",
    referee: "K. Friend",
    homeTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture52.save();
  const fixture53 = new Fixtures({
    event_date: "2018-09-22T16:30:00+00:00",
    event_timestamp: 1537633800,
    firstHalfStart: 1537633800,
    secondHalfStart: 1537637400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The American Express Community Stadium (Falmer, East Sussex)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture53.save();
  const fixture54 = new Fixtures({
    event_date: "2018-09-23T12:30:00+00:00",
    event_timestamp: 1537705800,
    firstHalfStart: 1537705800,
    secondHalfStart: 1537709400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture54.save();
  const fixture55 = new Fixtures({
    event_date: "2018-09-23T15:00:00+00:00",
    event_timestamp: 1537714800,
    firstHalfStart: 1537714800,
    secondHalfStart: 1537718400,
    round: "Regular Season - 6",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture55.save();
  const fixture106 = new Fixtures({
    event_date: "2018-09-29T11:30:00+00:00",
    event_timestamp: 1538220600,
    firstHalfStart: 1538220600,
    secondHalfStart: 1538224200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "2-0",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture106.save();
  const fixture107 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture107.save();
  const fixture56 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "R. East",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "3-0",
      extratime: null,
      penalty: null
    }
  });
  fixture56.save();
  const fixture57 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The John Smith's Stadium (Huddersfield, West Yorkshire)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture57.save();
  const fixture58 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture58.save();
  const fixture59 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "S. Hooper",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-1",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture59.save();
  const fixture60 = new Fixtures({
    event_date: "2018-09-29T14:00:00+00:00",
    event_timestamp: 1538229600,
    firstHalfStart: 1538229600,
    secondHalfStart: 1538233200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: "S. Attwell",
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture60.save();
  const fixture61 = new Fixtures({
    event_date: "2018-09-29T16:30:00+00:00",
    event_timestamp: 1538238600,
    firstHalfStart: 1538238600,
    secondHalfStart: 1538242200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture61.save();
  const fixture62 = new Fixtures({
    event_date: "2018-09-30T15:00:00+00:00",
    event_timestamp: 1538319600,
    firstHalfStart: 1538319600,
    secondHalfStart: 1538323200,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-0",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture62.save();
  const fixture64 = new Fixtures({
    event_date: "2018-10-01T19:00:00+00:00",
    event_timestamp: 1538420400,
    firstHalfStart: 1538420400,
    secondHalfStart: 1538424000,
    round: "Regular Season - 7",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture64.save();
  const fixture65 = new Fixtures({
    event_date: "2018-10-05T19:00:00+00:00",
    event_timestamp: 1538766000,
    firstHalfStart: 1538766000,
    secondHalfStart: 1538769600,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The American Express Community Stadium (Falmer, East Sussex)",
    referee: "K. Friend",
    homeTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture65.save();
  const fixture66 = new Fixtures({
    event_date: "2018-10-06T14:00:00+00:00",
    event_timestamp: 1538834400,
    firstHalfStart: 1538834400,
    secondHalfStart: 1538838000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Turf Moor (Burnley)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture66.save();
  const fixture67 = new Fixtures({
    event_date: "2018-10-06T14:00:00+00:00",
    event_timestamp: 1538834400,
    firstHalfStart: 1538834400,
    secondHalfStart: 1538838000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Selhurst Park (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture67.save();
  const fixture68 = new Fixtures({
    event_date: "2018-10-06T14:00:00+00:00",
    event_timestamp: 1538834400,
    firstHalfStart: 1538834400,
    secondHalfStart: 1538838000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "King Power Stadium (Leicester, Leicestershire)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-1",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture68.save();
  const fixture69 = new Fixtures({
    event_date: "2018-10-06T14:00:00+00:00",
    event_timestamp: 1538834400,
    firstHalfStart: 1538834400,
    secondHalfStart: 1538838000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Wembley Stadium (London)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture69.save();
  const fixture108 = new Fixtures({
    event_date: "2018-10-06T14:00:00+00:00",
    event_timestamp: 1538834400,
    firstHalfStart: 1538834400,
    secondHalfStart: 1538838000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 4,
    score: {
      halftime: "0-3",
      fulltime: "0-4",
      extratime: null,
      penalty: null
    }
  });
  fixture108.save();
  const fixture70 = new Fixtures({
    event_date: "2018-10-06T16:30:00+00:00",
    event_timestamp: 1538843400,
    firstHalfStart: 1538843400,
    secondHalfStart: 1538847000,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Old Trafford (Manchester)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "3-2",
      extratime: null,
      penalty: null
    }
  });
  fixture70.save();
  const fixture71 = new Fixtures({
    event_date: "2018-10-07T11:00:00+00:00",
    event_timestamp: 1538910000,
    firstHalfStart: 1538910000,
    secondHalfStart: 1538913600,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Craven Cottage (London)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 5,
    score: {
      halftime: "1-1",
      fulltime: "1-5",
      extratime: null,
      penalty: null
    }
  });
  fixture71.save();
  const fixture72 = new Fixtures({
    event_date: "2018-10-07T13:15:00+00:00",
    event_timestamp: 1538918100,
    firstHalfStart: 1538918100,
    secondHalfStart: 1538921700,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. Mary's Stadium (Southampton, Hampshire)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 3,
    score: {
      halftime: "0-1",
      fulltime: "0-3",
      extratime: null,
      penalty: null
    }
  });
  fixture72.save();
  const fixture73 = new Fixtures({
    event_date: "2018-10-07T15:30:00+00:00",
    event_timestamp: 1538926200,
    firstHalfStart: 1538926200,
    secondHalfStart: 1538929800,
    round: "Regular Season - 8",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Anfield (Liverpool)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture73.save();
  const fixture74 = new Fixtures({
    event_date: "2018-10-20T11:30:00+00:00",
    event_timestamp: 1540035000,
    firstHalfStart: 1540035000,
    secondHalfStart: 1540038600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-0",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture74.save();
  const fixture75 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "L. Probert",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture75.save();
  const fixture76 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "K. Friend",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 2,
    score: {
      halftime: "2-2",
      fulltime: "4-2",
      extratime: null,
      penalty: null
    }
  });
  fixture76.save();
  const fixture77 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 5,
    goalsAwayTeam: 0,
    score: {
      halftime: "1-0",
      fulltime: "5-0",
      extratime: null,
      penalty: null
    }
  });
  fixture77.save();
  const fixture78 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture78.save();
  const fixture79 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture79.save();
  const fixture80 = new Fixtures({
    event_date: "2018-10-20T14:00:00+00:00",
    event_timestamp: 1540044000,
    firstHalfStart: 1540044000,
    secondHalfStart: 1540047600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 2,
    score: {
      halftime: "0-2",
      fulltime: "0-2",
      extratime: null,
      penalty: null
    }
  });
  fixture80.save();
  const fixture109 = new Fixtures({
    event_date: "2018-10-20T16:30:00+00:00",
    event_timestamp: 1540053000,
    firstHalfStart: 1540053000,
    secondHalfStart: 1540056600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The John Smith's Stadium (Huddersfield, West Yorkshire)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture109.save();
  const fixture81 = new Fixtures({
    event_date: "2018-10-21T15:00:00+00:00",
    event_timestamp: 1540134000,
    firstHalfStart: 1540134000,
    secondHalfStart: 1540137600,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "2-0",
      extratime: null,
      penalty: null
    }
  });
  fixture81.save();
  const fixture82 = new Fixtures({
    event_date: "2018-10-22T19:00:00+00:00",
    event_timestamp: 1540234800,
    firstHalfStart: 1540234800,
    secondHalfStart: 1540238400,
    round: "Regular Season - 9",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture82.save();
  const fixture83 = new Fixtures({
    event_date: "2018-10-27T14:00:00+00:00",
    event_timestamp: 1540648800,
    firstHalfStart: 1540648800,
    secondHalfStart: 1540652400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "The American Express Community Stadium (Falmer, East Sussex)",
    referee: "A. Taylor",
    homeTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture83.save();
  const fixture84 = new Fixtures({
    event_date: "2018-10-27T14:00:00+00:00",
    event_timestamp: 1540648800,
    firstHalfStart: 1540648800,
    secondHalfStart: 1540652400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Craven Cottage (London)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 9,
      team_name: "Fulham",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 3,
    score: {
      halftime: "0-1",
      fulltime: "0-3",
      extratime: null,
      penalty: null
    }
  });
  fixture84.save();
  const fixture120 = new Fixtures({
    event_date: "2018-10-27T14:00:00+00:00",
    event_timestamp: 1540648800,
    firstHalfStart: 1540648800,
    secondHalfStart: 1540652400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Anfield (Liverpool)",
    referee: "S. Attwell",
    homeTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "4-1",
      extratime: null,
      penalty: null
    }
  });
  fixture120.save();
  const fixture85 = new Fixtures({
    event_date: "2018-10-27T14:00:00+00:00",
    event_timestamp: 1540648800,
    firstHalfStart: 1540648800,
    secondHalfStart: 1540652400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. Mary's Stadium (Southampton, Hampshire)",
    referee: "C. Kavanagh",
    homeTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "0-0",
      extratime: null,
      penalty: null
    }
  });
  fixture85.save();
  const fixture86 = new Fixtures({
    event_date: "2018-10-27T14:00:00+00:00",
    event_timestamp: 1540648800,
    firstHalfStart: 1540648800,
    secondHalfStart: 1540652400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vicarage Road Stadium (Watford)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 10,
      team_name: "Huddersfield Town",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 0,
    score: {
      halftime: "2-0",
      fulltime: "3-0",
      extratime: null,
      penalty: null
    }
  });
  fixture86.save();
  const fixture87 = new Fixtures({
    event_date: "2018-10-27T16:30:00+00:00",
    event_timestamp: 1540657800,
    firstHalfStart: 1540657800,
    secondHalfStart: 1540661400,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "King Power Stadium (Leicester, Leicestershire)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture87.save();
  const fixture88 = new Fixtures({
    event_date: "2018-10-28T13:30:00+00:00",
    event_timestamp: 1540733400,
    firstHalfStart: 1540733400,
    secondHalfStart: 1540737000,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Turf Moor (Burnley)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 4,
    score: {
      halftime: "0-1",
      fulltime: "0-4",
      extratime: null,
      penalty: null
    }
  });
  fixture88.save();
  const fixture89 = new Fixtures({
    event_date: "2018-10-28T13:30:00+00:00",
    event_timestamp: 1540733400,
    firstHalfStart: 1540733400,
    secondHalfStart: 1540737000,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Selhurst Park (London)",
    referee: "M. Atkinson",
    homeTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-0",
      fulltime: "2-2",
      extratime: null,
      penalty: null
    }
  });
  fixture89.save();
  const fixture90 = new Fixtures({
    event_date: "2018-10-28T16:00:00+00:00",
    event_timestamp: 1540742400,
    firstHalfStart: 1540742400,
    secondHalfStart: 1540746000,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Old Trafford (Manchester)",
    referee: "J. Moss",
    homeTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "2-1",
      extratime: null,
      penalty: null
    }
  });
  fixture90.save();
  const fixture91 = new Fixtures({
    event_date: "2018-10-29T20:00:00+00:00",
    event_timestamp: 1540843200,
    firstHalfStart: 1540843200,
    secondHalfStart: 1540846800,
    round: "Regular Season - 10",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Wembley Stadium (London)",
    referee: "K. Friend",
    homeTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-1",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture91.save();
  const fixture92 = new Fixtures({
    event_date: "2018-11-03T12:30:00+00:00",
    event_timestamp: 1541248200,
    firstHalfStart: 1541248200,
    secondHalfStart: 1541251800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Vitality Stadium (Bournemouth, Dorset)",
    referee: "P. Tierney",
    homeTeam: {
      team_id: 1,
      team_name: "AFC Bournemouth",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 14,
      team_name: "Manchester United",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-1",
      fulltime: "1-2",
      extratime: null,
      penalty: null
    }
  });
  fixture92.save();
  const fixture93 = new Fixtures({
    event_date: "2018-11-03T15:00:00+00:00",
    event_timestamp: 1541257200,
    firstHalfStart: 1541257200,
    secondHalfStart: 1541260800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Cardiff City Stadium (Cardiff (Caerdydd))",
    referee: "L. Probert",
    homeTeam: {
      team_id: 5,
      team_name: "Cardiff City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 11,
      team_name: "Leicester City",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "0-1",
      extratime: null,
      penalty: null
    }
  });
  fixture93.save();
  const fixture94 = new Fixtures({
    event_date: "2018-11-03T15:00:00+00:00",
    event_timestamp: 1541257200,
    firstHalfStart: 1541257200,
    secondHalfStart: 1541260800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Goodison Park (Liverpool)",
    referee: "D. Coote",
    homeTeam: {
      team_id: 8,
      team_name: "Everton",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 3,
      team_name: "Brighton & Hove Albion",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-1",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture94.save();
  const fixture95 = new Fixtures({
    event_date: "2018-11-03T15:00:00+00:00",
    event_timestamp: 1541257200,
    firstHalfStart: 1541257200,
    secondHalfStart: 1541260800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "St. James' Park (Newcastle upon Tyne)",
    referee: "C. Pawson",
    homeTeam: {
      team_id: 15,
      team_name: "Newcastle United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 18,
      team_name: "Watford",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 0,
    score: {
      halftime: "0-0",
      fulltime: "1-0",
      extratime: null,
      penalty: null
    }
  });
  fixture95.save();
  const fixture96 = new Fixtures({
    event_date: "2018-11-03T15:00:00+00:00",
    event_timestamp: 1541257200,
    firstHalfStart: 1541257200,
    secondHalfStart: 1541260800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "London Stadium (London)",
    referee: "R. East",
    homeTeam: {
      team_id: 19,
      team_name: "West Ham United",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 4,
      team_name: "Burnley",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 4,
    goalsAwayTeam: 2,
    score: {
      halftime: "1-1",
      fulltime: "4-2",
      extratime: null,
      penalty: null
    }
  });
  fixture96.save();
  const fixture97 = new Fixtures({
    event_date: "2018-11-03T17:30:00+00:00",
    event_timestamp: 1541266200,
    firstHalfStart: 1541266200,
    secondHalfStart: 1541269800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Emirates Stadium (London)",
    referee: "A. Marriner",
    homeTeam: {
      team_id: 2,
      team_name: "Arsenal",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 12,
      team_name: "Liverpool",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 1,
    goalsAwayTeam: 1,
    score: {
      halftime: "0-0",
      fulltime: "1-1",
      extratime: null,
      penalty: null
    }
  });
  fixture97.save();
  const fixture98 = new Fixtures({
    event_date: "2018-11-03T19:45:00+00:00",
    event_timestamp: 1541274300,
    firstHalfStart: 1541274300,
    secondHalfStart: 1541277900,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Molineux Stadium (Wolverhampton, West Midlands)",
    referee: "M. Dean",
    homeTeam: {
      team_id: 20,
      team_name: "Wolverhampton Wanderers",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 17,
      team_name: "Tottenham Hotspur",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 2,
    goalsAwayTeam: 3,
    score: {
      halftime: "0-2",
      fulltime: "2-3",
      extratime: null,
      penalty: null
    }
  });
  fixture98.save();
  const fixture99 = new Fixtures({
    event_date: "2018-11-04T15:00:00+00:00",
    event_timestamp: 1541343600,
    firstHalfStart: 1541343600,
    secondHalfStart: 1541347200,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Etihad Stadium (Manchester)",
    referee: "L. Mason",
    homeTeam: {
      team_id: 13,
      team_name: "Manchester City",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 16,
      team_name: "Southampton",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 6,
    goalsAwayTeam: 1,
    score: {
      halftime: "4-1",
      fulltime: "6-1",
      extratime: null,
      penalty: null
    }
  });
  fixture99.save();
  const fixture100 = new Fixtures({
    event_date: "2018-11-04T16:00:00+00:00",
    event_timestamp: 1541347200,
    firstHalfStart: 1541347200,
    secondHalfStart: 1541350800,
    round: "Regular Season - 11",
    status: "Match Finished",
    statusShort: "FT",
    elapsed: 0,
    venue: "Stamford Bridge (London)",
    referee: "M. Oliver",
    homeTeam: {
      team_id: 6,
      team_name: "Chelsea",
      logo: "Not available in Demo"
    },
    awayTeam: {
      team_id: 7,
      team_name: "Crystal Palace",
      logo: "Not available in Demo"
    },
    goalsHomeTeam: 3,
    goalsAwayTeam: 1,
    score: {
      halftime: "1-0",
      fulltime: "3-1",
      extratime: null,
      penalty: null
    }
  });
  fixture100.save();

  const record = new Fixtures(fixture);
  return record
    .save()
    .then(result => {
      if (!result) {
        fail(res, 404, "Error not found newly added fixtures");
      }
      return success(res, 200, result, "Done Initializing fixtures Data!");
    })
    .catch(err => {
      fail(res, 500, `Error adding fixtures ${err.message}`);
    });
}
