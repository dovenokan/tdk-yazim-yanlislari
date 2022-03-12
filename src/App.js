import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/der" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
