//App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThreadList } from "./ThreadList";
import { CreateThread } from "./CreateThread";
import { Thread } from './Thread';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThreadList />}/>
        <Route path="/create" element={<CreateThread />}/>
        <Route path="/threads/:thread_id" element={<Thread />} />
        <Route />
      </Routes>
    </Router>
  )
}

export default App
