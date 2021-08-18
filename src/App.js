import React from 'react'
import AppRoutes from './routes/routes';
import './App.css';
import HeaderBar from './components/header-bar';


const App = () => (
    <div>
        <HeaderBar />
        <div className="headerMargin">
            <AppRoutes />
        </div>
    </div>
)

export default App
