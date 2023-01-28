import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"
import { Subscribe } from "./views/Subscribe"
import { Subscribed } from "./views/Subscribed"
import { Unsubscribe } from "./views/Unsubscribe"
import { Unsubscribed } from "./views/Unsubscribed"
import { Error404 } from "./views/Error404"

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/subscribe" element={<Subscribe/>}/>
          <Route path="/unsubscribe" element={<Unsubscribe/>}/>
          <Route path="/subscribed" element={<Subscribed/>}/>
          <Route path="/unsubscribed" element={<Unsubscribed/>}/>
          <Route path="/*" element={<Error404/>}/>
        </Routes>
      </Router>
    </>
  )
}