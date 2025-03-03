import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter basename="/writers-corner">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
