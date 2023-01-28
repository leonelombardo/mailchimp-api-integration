import { FaRegSadCry } from "react-icons/fa"

import { Wrapper } from "../components/Wrapper"
import { Form } from "../components/Form"

export const Unsubscribe = () => {
    return (
        <>
          <Wrapper>
            <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
              <i className="text-[150px]"><FaRegSadCry/></i>
              <h1 className="text-5xl text-secondary-500 font-bold font-serif">Unsubscribe</h1>
              <p className="text-xl text-secondary-500 leading-none">We don't want you to leave us but we'll respect if that's what you want.</p>
            </div>
            <Form type="unsubscribe"/>
          </Wrapper>
        </>
    )
}