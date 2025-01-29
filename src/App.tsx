import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./shared-components/layout"

import Form from "./pages/form"
import Insurance from "./pages/Insurance"
import Vehicles from "./pages/vehicles"
import InsuranceProviders from "./pages/insuranceProviders"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/insurance-providers" element={<InsuranceProviders />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
