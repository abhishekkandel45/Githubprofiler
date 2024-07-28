import React, { useEffect, useState } from 'react'
import { SlideProps, ThemeProps } from '../../constants/type'
import { AppContext } from '../../context/AppContext'
import ProfileViews from '../elements/ProfileViews'
import SliderHeader from '../elements/SliderHeader'
import Trophy from '../elements/Trophy'
import Generate from './Generate'
import SocialBadges from './SocialBadges'

function Additonal({ onBackPress }: SlideProps) {
    const [visible, setVisible] = useState(true);

    const { aboutme } = React.useContext(AppContext);
    const [theme, setTheme] = useState<ThemeProps | null>({
        label: "For the Badge",
        value: "for-the-badge"
    });

    const generateFinalMarkDown = () => {
        try {
            let markdowncode = `# 💫 About Me:\n`;
            markdowncode += localStorage.getItem("profile_views_markdown") + "\n";
            markdowncode += aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>');
            markdowncode += '\n\n';
            markdowncode += localStorage.getItem("social_badges") + "\n";
            markdowncode += localStorage.getItem("social_profile_markdown") + "\n";
            markdowncode += localStorage.getItem("skill_markdown") + "\n";
            markdowncode += localStorage.getItem("github_stat_markdown") + "\n";
            markdowncode += localStorage.getItem("trophy_markdown") + "\n";
            markdowncode += localStorage.getItem("donate_markdown") + "\n";            
            markdowncode += '\n<div align="center">Show some ❤️ by starring some of the repositories!</div>';

            localStorage.setItem("final_markdowncode", markdowncode);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [])

    if( visible ){
        return (
            <div className='about_me_container'>
                <SliderHeader
                    title="Additional Stuffs"
                    onBackPress={onBackPress}
                />
    
    
                <div className="slider_content_settings slider_content_settings_additonal">
                    <div className="row">
                        <Trophy />
                        <div className="divider"></div>
                        <ProfileViews 
                            onChange={setTheme}
                        />
                        <div className="divider"></div>
                        <SocialBadges 
                            theme={theme}
                        />
    
                        <div className='btn_container mt-3'>
                            <button type="button" className="btn" onClick={() => {
                                generateFinalMarkDown();
                                setVisible(false);
                            }}>Generate</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Generate
            onBackPress={() => setVisible(true)}
        />
    )
}

export default Additonal