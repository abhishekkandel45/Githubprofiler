import React, { useState } from 'react'
import Aboutme from './slide/Aboutme';
import Username from './slide/Username';

function HomePage() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            {
                !visible ? <Aboutme
                    onBackPress={() => setVisible(true)}
                /> : <Username 
                    onNextPress={() => setVisible(false)}
                />
            }
        </div>
    )
}

export default HomePage