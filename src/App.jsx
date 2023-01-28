import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Subscribe } from "./views/Subscribe"
import { Subscribed } from "./views/Subscribed"
import { Unsubscribe } from "./views/Unsubscribe"

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/subscribe" element={<Subscribe/>}/>
          <Route path="/unsubscribe" element={<Unsubscribe/>}/>
          <Route path="/subscribed" element={<Subscribed/>}/>
        </Routes>
      </Router>
    </>
  )
}