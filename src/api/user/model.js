/**
 * @author Godfrey Ejeh
 * @description Creating the user account
 * @property {String} email user's email account
 * @property {String} password user's password
 * @property {String} firstName user's first name
 * @property {String} lastName user's last name
 *  */

import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      max: 100,
      trim: true,
      required: true
    },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
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

AdminSchema.methods = {
  view(full) {
    const view = {
      // simple view
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
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
const User = mongoose.model("User", AdminSchema);

export const { ObjectId } = mongoose.Types;
export default User;
