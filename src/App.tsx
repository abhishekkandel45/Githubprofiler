import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import "./components/styles/app.css";
import "./components/styles/slide.css";
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';

export default function App() {

    const [username, setUsername] = useState<string>("");
    const [aboutme, setAboutme] = useState<string>(`🔭 I’m currently working on 
🌱 I’m currently learning 
👯 I’m looking to collaborate on 
🤔 I’m looking for help with 
💬 Ask me about 
📫 How to reach me: 
😄 Pronouns: He/His
⚡ Fun fact: `);
    const [activeSkill, setActiveSkill] = useState<string[]>([]);

    return (
        <AppContext.Provider
            value={{
                username, setUsername,
                aboutme, setAboutme,
                activeSkill, setActiveSkill
            }}
        >
            <Navbar />

            <div className="slider_container">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-10">
                            <div className="slider_content shadow">
                                <HomePage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <Toaster />
        </AppContext.Provider>
    )
}
