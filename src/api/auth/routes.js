/**
 * @author 4Decoder
 */

import express from "express";

import { emailSignup, emailLogin } from "./controller";

const router = express.Router();

/**
 * @api {post} /:userType/auth/:authType Authenticate
 * @apiName SignMessage
 * @apiGroup Authenticate
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam userType User’s user type (Customer | Vendor | Admin).
 * @apiParam authType User’s authentication type.
 * @apiParam publicaddress User’s publicaddress posted in in the body.
 * @apiParam signature User’s signature posted in in the body.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 * @apiError 401 master access only.
 */

router.post("/authenticate/email/:userType/signup", emailSignup);

router.post("/authenticate/email/:userType/login", emailLogin);

export default router;
