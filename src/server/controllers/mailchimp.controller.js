import { Router } from "express"
import Mailchimp from "mailchimp-api-v3"
import axios from "axios"
import md5 from "md5"

export const mailchimpController = Router()

const MAILCHIMP_API_KEY = process.env.VITE_MAILCHIMP_API_KEY
const MAILCHIMP_LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID
const MAILCHIMP_SERVER_PREFIX = process.env.VITE_MAILCHIMP_SERVER_PREFIX

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY)

mailchimpController.post("/subscribe", async (req, res) => {
    const email = req.body.email?.trim()

    if(!email) return res.status(400).json({ response: "Must provide an email."})

    const data = { email_address: email, status: "subscribed" }

    try{
        const response = await mailchimp.post(`lists/${MAILCHIMP_LIST_ID}/members`, data)

        res.status(201).json({ status: 201, success: true, error: false, response: "Subscribed." })
    }catch(error){
        res.status(500).json({ status: 500, success: false, error: true, response: error })
    }
})

mailchimpController.delete("/unsubscribe", async (req, res) => {
    const email = req.body.email?.trim()

    if(!email) return res.status(400).json({ response: "Must provide an email."})

    try{
        const response = await axios({
            method: "DELETE",
            url: `${MAILCHIMP_SERVER_PREFIX}/lists/${MAILCHIMP_LIST_ID}/members/${md5(email)}`,
            auth: {
                username: MAILCHIMP_API_KEY,
                password: MAILCHIMP_API_KEY
            }
        })
        
        res.status(201).json({ status: 201, success: true, error: false, response: "Unsubscribed." })
    }catch(error){
        res.status(500).json({ status: 500, success: false, error: true, response: error })
    }
})