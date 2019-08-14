/**
 * @author Godfrey Ejeh
 * @description Creating the admin account
 * @property {String} email admin's email account
 * @property {String} password admin's password
 * @property {String} firstName admin's firstName
 * @property {String} lastName admin's lastName
 * @property {String} updated admin's updated
 * @property {String} updatedBy admin's updatedBy
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
    updated: { type: String, required: true },
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
      email: this.email
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
const Admin = mongoose.model("Admin", AdminSchema);

export const { ObjectId } = mongoose.Types;
export default Admin;
