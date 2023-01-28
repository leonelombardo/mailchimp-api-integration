import { AiOutlineSmile } from "react-icons/ai"

import { Wrapper } from "../components/Wrapper"
import { Form } from "../components/Form"

export const Subscribe = () => {
  return (
      <>
        <Wrapper>
          <div className="flex flex-col gap-8 items-center max-w-[350px] w-full">
            <i className="text-[150px]"><AiOutlineSmile/></i>
            <h1 className="text-5xl text-secondary-500 font-bold font-serif text-center">Subscribe</h1>
            <p className="text-xl text-secondary-500 leading-none">Be part of our exclusive and reduced members list to get special benefits from our sponsors, receive monthly discounts, tips and many more.</p>
          </div>
          <Form type="subscribe"/>
        </Wrapper>
      </>
  )
}