import MainPage from './components/MainPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DeliveryOrderPage from './components/DeliveryOrderPage'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/delivery-order" element={<DeliveryOrderPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

