import React, { useState, useEffect, useRef, SyntheticEvent } from 'react'
import { AppContext } from '../../context/AppContext';
import SliderHeader from '../elements/SliderHeader';
import GithubStat from './GithubStat';

interface Props {
    onBackPress: () => void
}

function Aboutme({ onBackPress }: Props) {

    const textRef = useRef<any>();

    const [visible, setVisible] = useState(true);
    const { aboutme, setAboutme } = React.useContext(AppContext);

    const onChangeHandler = function (e: SyntheticEvent) {
        const target = e.target as HTMLTextAreaElement;
        textRef.current.style.height = "300px";
        textRef.current.style.height = `${target.scrollHeight}px`;
    };

    if (visible) {
        return (
            <div className='about_me_container'>
                <SliderHeader
                    title="About Yourself"
                    onBackPress={onBackPress}
                />

                <div className="webflow-style-input">
                    <textarea
                        value={aboutme}
                        onChange={(
                            ev: React.ChangeEvent<HTMLTextAreaElement>,
                        ): void => setAboutme(ev.target.value)}
                        ref={textRef}
                        onKeyDown={onChangeHandler}
                        placeholder="About Yourself"
                    />
                </div>

                <div className='btn_container'>
                    <button type="button" className="btn" onClick={() => setVisible(false)}>Next</button>
                </div>
            </div>
        )
    }

    return (
        <GithubStat
            onBackPress={() => setVisible(true)}
        />
    )
}

export default Aboutme