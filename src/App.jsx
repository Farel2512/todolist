import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Todo from './pages/todo';
import Home from './pages/home';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
