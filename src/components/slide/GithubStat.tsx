import React, { useEffect, useState } from 'react'
import SliderHeader from '../elements/SliderHeader';
import Select from 'react-select'
import { AppContext } from '../../context/AppContext';
import SocialProfile from './SocialProfile';
import { ThemeProps } from '../../constants/type';

interface Props {
    onBackPress: () => void;
}

function GithubStat({ onBackPress }: Props) {

    const { username } = React.useContext(AppContext);

    const themeOptions = [
        {
            label: "Default",
            value: "default"
        },
        {
            label: "Dark",
            value: "dark"
        },
        {
            label: "Radical",
            value: "radical"
        },
        {
            label: "Merko",
            value: "merko"
        },
        {
            label: "Gruv Box",
            value: "gruvbox"
        },
        {
            label: "Tokyo Night",
            value: "tokyonight"
        },
        {
            label: "One Dark",
            value: "onedark"
        },
        {
            label: "Synthwave",
            value: "synthwave"
        },
        {
            label: "High Contrast",
            value: "highcontrast"
        },
        {
            label: "Dracula",
            value: "dracula"
        },
        {
            label: "Prussian",
            value: "prussian"
        },
        {
            label: "Monokai",
            value: "monokai"
        },
        {
            label: "Vue",
            value: "vue"
        },
        {
            label: "Vue Dark",
            value: "vue-dark"
        },
        {
            label: "Shades of Purple",
            value: "shades-of-purple"
        },
        {
            label: "Night Owl",
            value: "nightowl"
        },
        {
            label: "Buefy",
            value: "buefy"
        },
        {
            label: "Blue Green",
            value: "blue-green"
        },
        {
            label: "Algolia",
            value: "algolia"
        },
        {
            label: "Great Gatsby",
            value: "great-gatsby"
        },
        {
            label: "Darcula",
            value: "darcula"
        },
        {
            label: "Bear",
            value: "bear"
        },
        {
            label: "solarized-dark",
            value: "solarized-dark"
        },
        {
            label: "Solarized Light",
            value: "solarized-light"
        },
        {
            label: "Chartreuse Dark",
            value: "chartreuse-dark"
        },
        {
            label: "Nord",
            value: "nord"
        },
        {
            label: "Gotham",
            value: "gotham"
        },
        {
            label: "Material Palenight",
            value: "material-palenight"
        },
        {
            label: "Gray White",
            value: "graywhite"
        },
        {
            label: "Vision Friendly Dark",
            value: "vision-friendly-dark"
        },
        {
            label: "Ayu Mirage",
            value: "ayu-mirage"
        },
        {
            label: "Midnight Purple",
            value: "midnight-purple"
        },
        {
            label: "Calm",
            value: "calm"
        },
        {
            label: "Flag India",
            value: "flag-india"
        },
        {
            label: "Omni",
            value: "omni"
        },
        {
            label: "React",
            value: "react"
        },
        {
            label: "Jolly",
            value: "jolly"
        },
        {
            label: "Maroon Gold",
            value: "maroongold"
        },
        {
            label: "Yeblu",
            value: "yeblu"
        },
        {
            label: "Blue Berry",
            value: "blueberry"
        },
        {
            label: "Slate Orange",
            value: "slateorange"
        },
        {
            label: "Kacho Ga",
            value: "kacho_ga"
        },
        {
            label: "City Light",
            value: "city_light"
        },
        {
            label: "swift",
            value: "swift"
        }
    ];

    const [visible, setVisible] = useState(true);

    const [theme, setTheme] = useState<ThemeProps | null>({
        value: "synthwave",
        label: "synthwave"
    });

    const [border, setBorder] = useState(false);
    const [lifetimecommit, setLifetimecommit] = useState(true);
    const [privatecommit, setPrivatecommit] = useState(true);
    const [compact, setCompact] = useState(true);

    const [staturl, setStaturl] = useState("");
    const [streakurl, setStreakurl] = useState("");
    const [langurl, setLangurl] = useState("");

    const generateStatURL = () => {
        let url = 'https://github-readme-stats.vercel.app/api?username=' + username;
        url += '&theme=' + theme?.value || "default";
        url += `&hide_border=${border ? "false" : "true"}`;
        url += `&include_all_commits=${lifetimecommit ? "true" : "false"}`;
        url += `&count_private=${privatecommit ? "true" : "false"}`;
        return url;
    }

    const generateStreakURL = () => {
        let url = 'https://github-readme-streak-stats.herokuapp.com/?user=' + username;
        url += '&theme=' + theme?.value || "default";
        url += `&hide_border=${border ? "false" : "true"}`;
        return url;
    }

    const generateLangURL = () => {
        let url = 'https://github-readme-stats.vercel.app/api/top-langs/?username=' + username;
        url += '&theme=' + theme?.value || "default";
        url += `&hide_border=${border ? "false" : "true"}`;
        url += `&include_all_commits=${lifetimecommit ? "true" : "false"}`;
        url += `&count_private=${privatecommit ? "true" : "false"}`;
        if (compact) url += '&layout=compact';
        return url;
    }

    useEffect(() => {
        setLangurl(generateLangURL());
    }, [compact])

    const generateMarkDown = () => {
        let markdowncode = `## 📊 GitHub Stats:\n`;
        markdowncode += `![](${staturl})<br/>\n`;
        markdowncode += `![](${streakurl})<br/>\n`;
        markdowncode += `![](${langurl})<br/>\n`;
        localStorage.setItem("github_stat_markdown", markdowncode);
    }

    useEffect(() => {
        setStaturl(generateStatURL());
        setStreakurl(generateStreakURL());
        setLangurl(generateLangURL());
    }, [theme, border, lifetimecommit, privatecommit])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [])

    if( visible ){
        return (
            <div className='about_me_container'>
                <SliderHeader
                    title="Github Statistics"
                    onBackPress={onBackPress}
                />
    
                <div className="slider_content_settings">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Select Theme</label>
                                <div className="form_container">
                                    <Select
                                        defaultValue={theme}
                                        options={themeOptions}
                                        isSearchable
                                        onChange={(newValue) => setTheme(newValue)}
                                    />
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-2">
                            <div className="form-group">
                                <label className="checkbox_container_text">Apply Border</label>
                                <div className="form_container">
                                    <input type="checkbox" defaultChecked={border} onClick={() => setBorder(!border)} className="checkbox_toggle" />
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-2">
                            <div className="form-group">
                                <label className="checkbox_container_text">Lifetime Commits</label>
                                <div className="form_container">
                                    <input type="checkbox" defaultChecked={lifetimecommit} onClick={() => setLifetimecommit(!lifetimecommit)} className="checkbox_toggle" />
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-2">
                            <div className="form-group">
                                <label className="checkbox_container_text">Private Commits</label>
                                <div className="form_container">
                                    <input type="checkbox" defaultChecked={privatecommit} onClick={() => setPrivatecommit(!privatecommit)} className="checkbox_toggle" />
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-2">
                            <div className="form-group">
                                <label className="checkbox_container_text">Compact Layout</label>
                                <div className="form_container">
                                    <input type="checkbox" defaultChecked={compact} onClick={() => setCompact(!compact)} className="checkbox_toggle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="slider_content_preview slider_content_preview_center">
                    <h2>Preview</h2>
    
                    <img className='pointer-events-none mt-3 d-block' alt="Preview Loading . . ." src={staturl} />
                    <img className='pointer-events-none mt-3 d-block' alt="Preview Loading . . ." src={streakurl} />
                    <img className='pointer-events-none mt-3 d-block' alt="Preview Loading . . ." src={langurl} />
                </div>
    
                <div className='btn_container'>
                    <button type="button" className="btn" onClick={() => {
                        // localStorage.setItem("github_statistics", JSON.stringify({
                        //     theme : theme,
                        //     border : border,
                        //     lifetimecommit : lifetimecommit,
                        //     privatecommit : privatecommit,
                        //     compact : compact
                        // }));
                        generateMarkDown();
                        setVisible(false)
                    }}>Next</button>
                </div>
            </div>
        )
    }

    return (
        <SocialProfile
            onBackPress={() => setVisible(true)}
        />
    )
}

export default GithubStat