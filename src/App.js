import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Hello from './Components/Hello'
import Products from './Components/Products'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Hello />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/Products" element={<Products />} />
                    </Route>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
