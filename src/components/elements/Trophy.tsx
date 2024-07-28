import React, { useEffect, useState } from "react";
import Select, { ActionMeta } from 'react-select'
import { ThemeProps } from "../../constants/type";
import { AppContext } from "../../context/AppContext";

function Trophy() {

    const { username } = React.useContext(AppContext);
    const themeOptions = [
        {
            label: "Flat",
            value: "flat"
        },
        {
            label: "One Dark",
            value: "onedark"
        },
        {
            label: "Gruv Box",
            value: "gruvbox"
        },
        {
            label: "Dracula",
            value: "dracula"
        },
        {
            label: "Monokai",
            value: "monokai"
        },
        {
            label: "Chalk",
            value: "chalk"
        },
        {
            label: "Nord",
            value: "nord"
        },
        {
            label: "Alduin",
            value: "alduin"
        },
        {
            label: "Dark Hub",
            value: "darkhub"
        },
        {
            label: "Juicy Fresh",
            value: "valujuicyfreshe"
        },
        {
            label: "Buddhism",
            value: "buddhism"
        },
        {
            label: "Oldie",
            value: "oldie"
        },
        {
            label: "Radical",
            value: "radical"
        },
        {
            label: "One Star",
            value: "onestar"
        },
        {
            label: "Discord",
            value: "discord"
        },
        {
            label: "Git Dimmed",
            value: "gitdimmed"
        },
        {
            label: "Matrix",
            value: "matrix"
        },
        {
            label: "Apprentice",
            value: "apprentice"
        },
        {
            label: "Dark Dimmed",
            value: "dark_dimmed"
        },
        {
            label: "Dark Lover",
            value: "dark_lover"
        }
    ];
    const [theme, setTheme] = useState<ThemeProps | null>({
        label: "Discord",
        value: "discord"
    })
    const [transparent, setTransparent] = useState<boolean>(false);
    const [border, setBorder] = useState<boolean>(false);
    const [marginw, setMarginw] = useState<string>("5");
    const [marginh, setMarginh] = useState<string>("0");
    const [enable, setEnable] = useState<boolean>(true);
    const [url, setUrl] = useState<string>(`https://github-profile-trophy.vercel.app/?username=${username}`);


    const saveMarkdownCode = () => {
        try {
            let markdowncode = ``;

            if( enable ){
                markdowncode = `![](${url})`;

                if( markdowncode.length > 0 ){
                    markdowncode = `## 🏆 GitHub Trophies\n` + markdowncode;
                }
            }

            localStorage.setItem("trophy_markdown", markdowncode);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        let prevurl = `https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme?.value || "discord"}`;
        prevurl += `&no-bg=${transparent ? "true" : "false"}`;
        prevurl += `&no-frame=${border ? "false" : "true"}`;
        prevurl += `&margin-h=${marginh || "0"}`
        prevurl += `&margin-w=${marginw || "0"}`

        saveMarkdownCode();

        // localStorage.setItem("trophy_data", JSON.stringify({
        //     enable : enable,
        //     theme : theme?.value || "discord",
        //     transparent : transparent,
        //     border : border,
        //     marginh : marginh || 0,
        //     marginw : marginw || 0,
        //     url : prevurl
        // }));

        setUrl(prevurl);
    }, [transparent, border, marginw, marginh, theme])


    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Github Trophy</h2>
            </div>
            <div className="slider_content_settings">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Select Theme</label>
                            <div className="form_container">
                                <Select
                                    defaultValue={theme}
                                    options={themeOptions}
                                    isSearchable
                                    onChange={(
                                        option: ThemeProps | null,
                                        actionMeta: ActionMeta<ThemeProps>
                                    ) => setTheme(option)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="checkbox_container_text">Transparent Background</label>
                            <div className="form_container">
                                <input
                                    type="checkbox"
                                    defaultChecked={transparent}
                                    onClick={() => setTransparent(!transparent)}
                                    className="checkbox_toggle"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label className="checkbox_container_text">Apply Border</label>
                            <div className="form_container">
                                <input
                                    type="checkbox"
                                    defaultChecked={border}
                                    onClick={() => setBorder(!border)}
                                    className="checkbox_toggle"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label className="checkbox_container_text">Margin Width</label>
                            <div className="form_container">
                                <input
                                    type="number"
                                    value={marginw}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarginw(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label className="checkbox_container_text">Margin Height</label>
                            <div className="form_container">
                                <input
                                    type="number"
                                    value={marginh}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarginh(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider_content_preview slider_content_preview_center">
                <img className='pointer-events-none mt-3 d-block' alt="Preview Loading . . ." src={url} />
            </div>

            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <div className="form-group">
                        <label className="checkbox_container_text">Enable Views</label>
                        <div className="form_container">
                            <input type="checkbox" defaultChecked={enable} onClick={() => setEnable(!enable)} className="checkbox_toggle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trophy;
