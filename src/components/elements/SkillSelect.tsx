import React, { useState } from "react";
import { AppContext } from "../../context/AppContext";

interface Props {
    title : string;
    url : string;
    index : number;
    skillkey : string;
}

export default function SkillSelect({ title, url, index, skillkey } : Props) {

    const { activeSkill, setActiveSkill } = React.useContext(AppContext);

    const isExistsKey = `${skillkey}_${index}`;

    const [ischecked, setIschecked] = useState(activeSkill.includes(isExistsKey));

    function onClickFun() {
        if (ischecked) {
            setIschecked(false);
            setActiveSkill(activeSkill.filter((item) => item != isExistsKey));
        } else {
            setIschecked(true);
            setActiveSkill([...activeSkill, isExistsKey]);
        }
    }

    return (
        <>
            {ischecked ? (
                <div
                    className="skill_selected_container shadow-md skill_single_container"
                    onClick={onClickFun}
                >
                    <p className="title">{title}</p>
                    <p className="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 rounded-full"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </p>
                </div>
            ) : (
                <div
                    className="skill_unselected_container shadow-md skill_single_container"
                    onClick={onClickFun}
                >
                    <p className="title">{title}</p>
                    <p className="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </p>
                </div>
            )}
        </>
    );
}