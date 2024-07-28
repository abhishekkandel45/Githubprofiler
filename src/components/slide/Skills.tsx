import React, { useEffect, useState } from 'react'
import SliderHeader from '../elements/SliderHeader'
import Select from 'react-select'
import skills from '../../constants/skills';
import SkillSelect from '../elements/SkillSelect';
import Donate from './Donate';
import { themeOptions } from '../../constants/config';
import { SlideProps, ThemeProps } from '../../constants/type';
import { AppContext } from '../../context/AppContext';

function Skills({ onBackPress }: SlideProps) {

    const { activeSkill } = React.useContext(AppContext);
    const [visible, setVisible] = useState(true);
    const [theme, setTheme] = useState<ThemeProps | null>({
        label: "For the badge",
        value: "for-the-badge"
    });
    const [url, setUrl] = useState("https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white");

    useEffect(() => {
        // localStorage.setItem("skill_theme", JSON.stringify(theme));
        setUrl(`https://img.shields.io/badge/-GraphQL-E10098?style=${theme?.value || "for-the-badge"}&logo=graphql&logoColor=white`);
    }, [theme])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const generateMarkDown = () => {
        try {
            let markdowncode = '';

            const activeTheme = theme?.value || "for-the-badge";
            if( activeSkill.length > 0 ){
                activeSkill.map((item) => {
                    const parts = item.split("_");
                    const skillType : string = parts[0];
                    const skillIndex : number = parseInt(parts[1]);

                    if( skillType && skillType.length > 0 ){
                        const skillData = skills.filter((x) => x.key == skillType)[0].data[skillIndex];
                        let skillURL = skillData?.url;
                        skillURL = skillURL.replace("{{THEME}}", activeTheme);
                        markdowncode += `![${skillData.title}](${skillURL})   `;
                    }
                })
            }

            if( markdowncode.length > 3 ){
                markdowncode = `\n## 💻 Tech Stack:\n` + markdowncode;
            }

            localStorage.setItem("skill_markdown", markdowncode);
        } catch (error) {
            
        }
    }


    if( visible ){
        return (
            <div className='social_profile_container'>
                <SliderHeader
                    title="Skills"
                    onBackPress={onBackPress}
                />
    
                <div className="slider_content_settings">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <label>Theme</label>
                                <div className="form_container">
                                    <Select
                                        defaultValue={theme}
                                        options={themeOptions}
                                        isSearchable
                                        onChange={(option: ThemeProps | null) => setTheme(option)}
                                    />
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Preview</label>
                                <div className="form_container">
                                    <img className='skillimagePReview' src={url} alt="Loading . . ." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="slider_content_preview">
                    {
                        skills.map((skillgroup) => (
                            <div className='skill_group' key={skillgroup?.key}>
                                <h2>{skillgroup?.title}</h2>
    
                                <div className='skill_group_section'>
                                    {
                                        skillgroup?.data.map((skill, index) => (
                                            <SkillSelect
                                                {...skill}
                                                index={index}
                                                skillkey={skillgroup?.key}
                                                key={`skill_${skillgroup?.key}_${index}`}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
    
                <div className='btn_container'>
                    <button type="button" className="btn" onClick={() => {
                        generateMarkDown();
                        setVisible(false)
                    }}>Next</button>
                </div>
            </div>
        )
    }

    return(
        <Donate
            onBackPress={() => setVisible(true)}
        />
    )
}

export default Skills