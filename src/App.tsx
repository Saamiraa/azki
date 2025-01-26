import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Form from "./pages/form"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
