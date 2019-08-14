/**
 * @author Godfrey Ejeh
 * @description Creating  a team
 * @property {String} email admin's email account
 * @property {String} password admin's password
 *  */

import mongoose, { Schema } from "mongoose";
import mongoosastic from "mongoosastic";

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      es_indexed: true
    },
    code: { type: String, es_indexed: true },
    founded: { type: String, es_indexed: true },
    country: { type: String, es_indexed: true },
    venue_name: { type: String, es_indexed: true },
    venue_surface: { type: String, es_indexed: true },
    venue_address: { type: String, es_indexed: true },
    venue_city: { type: String, es_indexed: true },
    venue_capacity: { type: Number, es_indexed: true },
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

TeamSchema.methods = {
  view(full) {
    const view = {
      // simple view
      name: this.name,
      code: this.code,
      founded: this.founded,
      founded: this.country,
      venue_capacity: this.venue_capacity,
      venue_address: this.venue_address,
      venue_city: this.venue_city,
      venue_name: this.venue_name,
      venue_surface: this.venue_surface,
      updated: this.updated
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
TeamSchema.plugin(mongoosastic, {
  index: "teams",
  host: process.env.ELASTICSEARCH_URL,
  port: process.env.ELASTICSEARCH_PORT,
  hydrate: false,
  hydrateOptions: {
    lean: true
  }
});

const Team = mongoose.model("Team", TeamSchema);

export const { ObjectId } = mongoose.Types;
export default Team;
