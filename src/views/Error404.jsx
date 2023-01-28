import { Link } from "react-router-dom"
import { Wrapper } from "../components/Wrapper"

export const Error404 = () => {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
                    <div className="flex gap-4">
                        <h1 className="text-8xl font-bold font-serif">404</h1>
                        <p className="text-5xl text-secondary-500 font-bold font-serif text-left">not found</p>
                    </div>
                    <p className="text-xl text-secondary-500 leading-none">This resource was not found.</p>
                    <div className="flex flex-col items-center">
                        <Link to="/" style={{textDecoration: "underline"}}>Home</Link>
                        <Link to="/subscribe" style={{textDecoration: "underline"}}>Subscribe</Link>
                        <Link to="/unsubscribe" style={{textDecoration: "underline"}}>Unsubscribe</Link>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}