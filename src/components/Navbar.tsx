import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./styles/header.css";

function Navbar() {

    const [stats, setstats] = useState({
        starsCount: 0,
        forksCount: 0,
    });

    const shouldRequestStats = () => {
        const isFirstRequest = stats.starsCount === 0;
        const isVisible = window.document.visibilityState === 'visible';
        const hasFocus = window.document.hasFocus();
        return isFirstRequest || (isVisible && hasFocus);
    };

    const fetchData = async () => {
        if (shouldRequestStats()) {
            await axios.get('https://api.github.com/repos/abhishekkandel45/Githubprofiler').then((response) => {
                const { stargazers_count: stargazersCount, forks_count: forksCount } = response.data;
                setstats({
                    starsCount: stargazersCount,
                    forksCount,
                });
            })
        }
    };

    useEffect(() => {
        fetchData();
        setInterval(fetchData, 60000);
    }, []);


    return (
        <div className="header_container">
            <p>GITHUB PROFILE GENERATOR</p>

            <div className="header_container_star_container">
                <a href="https://github.com/abhishekkandel45/Githubprofiler" aria-label="Star abhishekkandel45/Githubprofiler on GitHub" target="blank" className="mr-2">
                    <div className="repo_container">

                        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

                        Star this repo
                        <span>{stats.starsCount}</span>
                    </div>
                </a>
                <a href="https://github.com/abhishekkandel45/Githubprofiler/fork" aria-label="Fork abhishekkandel45/Githubprofiler on GitHub" target="blank">
                    <div className="repo_container">

                        <svg aria-hidden="true" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>

                        Fork on GitHub
                        <span>{stats.forksCount}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar