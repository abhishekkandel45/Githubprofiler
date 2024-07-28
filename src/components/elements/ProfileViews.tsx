import React, { useEffect, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import InputColor, { Color, InputColorProps } from 'react-input-color';
import { AppContext } from '../../context/AppContext';
import { ColorProps, ThemeProps } from '../../constants/type';

interface Props {
    onChange : (value : ThemeProps | null) => void;
}

function ProfileViews({onChange} : Props) {

    const { username } = React.useContext(AppContext);
    const stylesOptions = [
        {
            label: "Flat",
            value: "flat"
        },
        {
            label: "Flat Square",
            value: "flat-square"
        },
        {
            label: "Plastic",
            value: "plastic"
        },
        {
            label: "For the Badge",
            value: "for-the-badge"
        }
    ];
    const [style, setStyle] = useState<ThemeProps | null>({
        label: "For the Badge",
        value: "for-the-badge"
    })
    const [color, setColor] = useState<ColorProps | null>({});
    const [label, setLabel] = useState("Profile Views");
    const [enable, setEnable] = useState(true);
    const [url, setUrl] = useState("");

    const saveMarkdownCode = () => {
        try {
            let markdowncode = ``;

            if( enable ){
                markdowncode = `[![](${url})](https://abhishekkandel45.github.io/Githubprofiler/)`;
            }

            localStorage.setItem("profile_views_markdown", markdowncode);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onChange(style);
    }, [style])
    

    useEffect(() => {
        let prevurl = `https://komarev.com/ghpvc/?username=${username}`;

        let colorCode = color?.hex || "#009688";
        colorCode = colorCode.replace("#", "");
        if (colorCode.length > 6) {
            colorCode = colorCode.slice(0, -2);
        }

        prevurl += `&color=${colorCode || "009688"}`;
        prevurl += `&style=${style?.value || "for-the-badge"}`;

        let profileLabel = label || "Profile Views";
        profileLabel = profileLabel.replace(/\s+/gi, "+");
        prevurl += `&label=${profileLabel}`;        

        // localStorage.setItem("profile_views", JSON.stringify({
        //     color : colorCode,
        //     label : label,
        //     style : style,
        //     enable : enable,
        //     url : prevurl
        // }));
        saveMarkdownCode();

        setUrl(prevurl);
    }, [color, label, style])

    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Github Profile Views</h2>
            </div>
            <div className="slider_content_settings">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Select Theme</label>
                            <div className="form_container">
                                <Select
                                    defaultValue={style}
                                    options={stylesOptions}
                                    isSearchable
                                    onChange={(
                                        option: ThemeProps | null,
                                        actionMeta: ActionMeta<ThemeProps>
                                    ) => setStyle(option)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Label</label>
                            <div className="form_container">
                                <input
                                    type="text"
                                    value={label}
                                    onChange={(e) => setLabel(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Color</label>
                            <div className="form_container color_picker_container">
                                <InputColor
                                    initialValue="#009688"
                                    onChange={setColor}
                                    placement="bottom"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="checkbox_container_text">Enable Views</label>
                            <div className="form_container">
                                <input type="checkbox" defaultChecked={enable} onClick={() => setEnable(!enable)} className="checkbox_toggle" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Preview</label>
                            <div className="form_container">
                                <img src={url} alt="Loading . . ." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileViews