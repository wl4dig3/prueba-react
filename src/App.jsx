import { useState } from 'react'
import './App.css';
import MiApi from './components/miApi/MiApi';


function App() {
  const [count, setCount] = useState(0)

  return <MiApi />;
}

export default App
