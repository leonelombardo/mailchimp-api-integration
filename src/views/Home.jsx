import { Link } from "react-router-dom"

import { Wrapper } from "../components/Wrapper"

export const Home = () => {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
                    <h1 className="text-5xl text-secondary-500 font-bold font-serif text-center">MailChimp Integration</h1>
                    <p className="text-xl text-secondary-500 leading-none">Start <Link to="/subscribe" style={{textDecoration: "underline"}}>subscribing</Link> and <Link to="/unsubscribe" style={{textDecoration: "underline"}}>unsubscribing</Link> emails.</p>
                </div>
            </Wrapper>
        </>
    )
}