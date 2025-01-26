import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Form from "./pages/form"
import Layout from "./shared-components/layout"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
