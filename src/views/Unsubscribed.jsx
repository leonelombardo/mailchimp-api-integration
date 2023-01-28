import { Link } from "react-router-dom"
import { TbHeartBroken } from "react-icons/tb"

import { Wrapper } from "../components/Wrapper"

export const Unsubscribed = () => {
    return (
        <>
          <Wrapper>
            <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
              <i className="text-[150px]"><TbHeartBroken/></i>
              <h1 className="text-5xl text-secondary-500 font-bold font-serif">Unsubscribed</h1>
              <div className="flex flex-col gap-4">
                <p className="text-xl text-secondary-500 leading-none">We are sorry to let you go, sometimes life gets hard but we got to be stronger.</p>
                <p className="text-xl text-secondary-500 leading-none">If you unsubscribed accidentally you can <Link to="/subscribe" style={{textDecoration: "underline"}}>subscribe</Link> again.</p>
              </div>
            </div>
          </Wrapper>
        </>
    )
}