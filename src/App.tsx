import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Form from "./pages/form"
import Insurance from "./pages/Insurance"

import Layout from "./shared-components/layout"
import Vehicles from "./pages/vehicles"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
