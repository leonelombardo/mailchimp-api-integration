import { AiOutlineLike } from "react-icons/ai"

import { Wrapper } from "../components/Wrapper"

export const Subscribed = () => {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
                    <i className="text-[150px]"><AiOutlineLike/></i>
                    <h1 className="text-5xl text-secondary-500 font-bold font-serif text-center">Thanks for subscribing</h1>
                    <p className="text-xl text-secondary-500 leading-none">You won't regret of being part of our members list.</p>
                </div>
            </Wrapper>
        </>
    )
}