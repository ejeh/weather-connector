/**
 * @author Godfrey Ejeh
 * @description Creating  fixtures
 * @property {String} team admin's team account
 * @property {String} time admin's time
 * @property {String} date admin's date
 * @property {String} venue admin's venue
 * @property {String} updated admin's updated
 * @property {String} updatedBy admin's updatedB
 *  */

import mongoose, { Schema } from "mongoose";
import mongoosastic from "mongoosastic";

const FixturesSchema = new Schema(
  {
    event_date: {
      type: String,
      es_indexed: true
    },
    event_timestamp: { type: Number },
    firstHalfStart: { type: String, es_indexed: true },
    round: { type: String, es_indexed: true },
    status: {
      type: String,
      enum: ["pending", "Match Finished"],
      es_indexed: true,
      default: "pending"
    },
    statusShort: { type: String, default: null, es_indexed: true },
    venue: { type: String, es_indexed: true },
    referee: { type: String, es_indexed: true },
    homeTeam: {
      team_id: { type: String },
      team_name: { type: String, es_indexed: true },
      logo: { type: String }
    },
    awayTeam: {
      team_id: { type: String },
      team_name: { type: String, es_indexed: true },
      logo: { type: String }
    },
    goalsHomeTeam: { type: Number, default: 0, es_indexed: true },
    goalsAwayTeam: { type: Number, default: 0, es_indexed: true },
    score: {
      halftime: { type: String, default: 0, es_indexed: true },
      fulltime: { type: String, default: 0, es_indexed: true },
      extratime: { type: String, default: null, es_indexed: true },
      penalty: { type: String, default: null, es_indexed: true }
    },
    updated: { type: Date, default: Date.now },
    updatedBy: { type: String }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      }
    }
  }
);

FixturesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      firstHalfStart: this.firstHalfStart,
      round: this.round,
      status: this.status,
      venue: this.venue,
      event_date: this.event_date,
      homeTeam: this.homeTeam,
      statusShort: this.statusShort,
      referee: this.referee,
      awayTeam: this.awayTeam,
      awayTeam: this.goalsHomeTeam,
      goalsAwayTeam: this.goalsAwayTeam,
      score: this.score
    };

    return full
      ? {
          ...view,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
          updatedBy: this.updatedBy
        }
      : view;
  }
};

FixturesSchema.plugin(mongoosastic, {
  index: "fixtures",
  host: process.env.ELASTICSEARCH_URL,
  port: process.env.ELASTICSEARCH_PORT,
  hydrate: false,
  hydrateOptions: {
    lean: true
  }
});

const Fixtures = mongoose.model("Fixtures", FixturesSchema);

export const { ObjectId } = mongoose.Types;
export default Fixtures;
