import React, { useEffect, useState } from 'react'
import InputColor from 'react-input-color';
import { ColorProps, SocialProfileBadgeProps } from '../../constants/type'
import { AppContext } from '../../context/AppContext';

function SocialBadge({ title, label, github = false, url, theme, onChangeURL }: SocialProfileBadgeProps) {

    const { username } = React.useContext(AppContext);

    const [value, setValue] = useState<string>("");
    const [labelnew, setLabelnew] = useState<string>(label);
    const [color, setColor] = useState<ColorProps | null>({});

    const [newurl, setNewurl] = useState(url || "");

    const [enable, setEnable] = useState(github);

    useEffect(() => {
        onChangeURL(enable ? newurl : "");
    }, [newurl])
    

    useEffect(() => {
        let colorCode = color?.hex || "#009688";
        colorCode = colorCode.replace("#", "");
        if (colorCode.length > 6) {
            colorCode = colorCode.slice(0, -2);
        }

        let prevurl = url.replace("RCOLORCODE", colorCode || "009688");
        prevurl = prevurl.replace("RSTYLE", theme?.value || "for-the-badge");

        let profileLabel = labelnew || label;
        profileLabel = profileLabel.replace(/\s+/gi, "+");
        prevurl = prevurl.replace("RLABEL", profileLabel);
        
        //replace username
        let preValue = github ? username : value;
        prevurl = prevurl.replace("RUSERNAME", preValue);

        setNewurl(prevurl);
    }, [color, value, labelnew, theme])


    return (
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label>{title}</label>
                    <div className="form_container">
                        <input type="text" placeholder='Username' disabled={github} value={value || username} onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} />
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="form-group">
                    <label>Label</label>
                    <div className="form_container">
                        <input type="text" placeholder='Username' value={labelnew} onChange={(e: React.FormEvent<HTMLInputElement>) => setLabelnew(e.currentTarget.value)} />
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
                    <label className="checkbox_container_text">Enable</label>
                    <div className="form_container">
                        <input type="checkbox" defaultChecked={enable} onClick={() => setEnable(!enable)} className="checkbox_toggle" />
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="form-group">
                    <label>Preview</label>
                    <div className="form_container">
                        <img src={newurl} alt="Loading . . ." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialBadge