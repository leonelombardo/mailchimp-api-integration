import { mailchimpController } from "../controllers/mailchimp.controller.js"

export const router = (app) => {
    app.use("/api/mailchimp/", mailchimpController)
}