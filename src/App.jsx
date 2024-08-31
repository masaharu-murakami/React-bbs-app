import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThreadList } from "./ThreadList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThreadList />}/>
        <Route />
        <Route />
      </Routes>
    </Router>
  )
}

export default App
