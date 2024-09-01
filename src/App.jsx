import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThreadList } from "./ThreadList.jsx";
import { CreateThread } from "./CreateThread";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThreadList />}/>
        <Route path="/create" element={<CreateThread />}/>
        <Route />
      </Routes>
    </Router>
  )
}

export default App
