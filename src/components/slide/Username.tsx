import React, { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

interface Props {
    onNextPress: () => void
}

function Username({ onNextPress }: Props) {

    const { username, setUsername } = React.useContext(AppContext);

    useEffect(() => {
        localStorage.clear();
        console.log("Cleared Successfully!!");
    }, [])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.length > 0) {
            onNextPress();
        } else {
            toast.error("Please provide Github Username!!!");
        }
    }


    return (
        <div className="container">

            <div className="demo-flex-spacer"></div>

            <form onSubmit={onSubmit}>
                <div className="webflow-style-input">

                    <input type="text" required placeholder="Github Username" value={username} onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)}></input>
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.554 12l-6 6h-3.979l3.093-3h-10.668v-6h10.668l-3.093-3h3.979l6 6zm.446-6h-3.979l6 6-6 6h3.979l6-6-6-6z" /></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Username