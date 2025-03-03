import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout'

function App() {
  return (
    <BrowserRouter basename="/writers-corner">
      <Routes>
        <Route path="/" element={<Layout />}>



        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
