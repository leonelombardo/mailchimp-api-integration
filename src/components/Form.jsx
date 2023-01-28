import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiSend } from "react-icons/fi"

import { Input } from "./Input"
import { Button } from "./Button"

export const Form = ({ type="subscribe" }) => {
    const [ email, setEmail ] = useState("")
    const [ error, setError ] = useState("")

    const navigateTo = useNavigate()
  
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
  
    const handleSubmit = async (event) => {
        event.preventDefault()
    
        if(!email.trim()) return setError("Please type something.")
        if(!email.match(emailRegex)) return setError("Please provide a valid email.")
    
        try{
          const response = await fetch(`/api/mailchimp/${type}`, {
            method: type === "subscribe" ? "POST" : "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email })
          })
    
          const { error }= await response.json()
    
          const errorMessage = type === "subscribe" ? "This email is already subscribed." : "This email isn't subscribed."
          const redirect = type === "subscribe" ? "/subscribed" : "/unsubscribed" 

          if(error) return setError(errorMessage)
    
          setError("")
          navigateTo(redirect)
        }catch(error){
          console.error(error)
        }
      }
  
    const handleEmail = (event) => {
      setEmail(event.target.value)
    }

    return (
        <>
            <form className="flex items-center" onSubmit={handleSubmit}>
                <Input placeholder="your@email.com" onChange={handleEmail}/>
                <Button type="submit" variant="icon" icon={<FiSend/>}>Send</Button>
            </form>
            {
                error && <span className="text-md text-red-800">{error}</span>
            }
        </>
    )
}