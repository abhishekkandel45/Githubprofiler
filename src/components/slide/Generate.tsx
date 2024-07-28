import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { SlideProps } from '../../constants/type';
import ButtonWithSVG from '../elements/ButtonWithSVG';
import Loading from '../elements/Loading'
import SliderHeader from '../elements/SliderHeader';
import MDEditor from '@uiw/react-md-editor';

function Generate({ onBackPress }: SlideProps) {

    const [loading, setLoading] = useState(true);

    const finalData = localStorage.getItem("final_markdowncode") || "";

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);


    function onCopy() {
        navigator.clipboard.writeText(finalData);
        toast.success("Copied Successfully!!!");
    }

    function onDownload() {
        const element = document.createElement("a");
        const file = new Blob([finalData], {
            type: "text/plain",
        });
        element.href = URL.createObjectURL(file);
        element.download = "ReadMe.md";
        document.body.appendChild(element);
        element.click();
        toast.success("Downloaded Successfully!!!");
    }

    function reloadTab() {
        localStorage.clear();
        window.location.reload();
    }

    if (loading) {
        return (
            <div className='about_me_container generateContent'>
                <SliderHeader
                    title='Generating Your Profile . . .'
                    onBackPress={onBackPress}
                />

                <div className="loading_container my-5">
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <div className='about_me_container generateContent'>
            <SliderHeader
                title='Profile is Ready!!!'
                onBackPress={onBackPress}
            />

            <div className="button_container_row">
                <ButtonWithSVG
                    title="Copy Code"
                    onClick={() => onCopy()}
                    d={
                        "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    }
                />
                <ButtonWithSVG
                    title="Download Markdown File"
                    onClick={() => onDownload()}
                    d={
                        "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                />
                <ButtonWithSVG
                    title="Create New"
                    onClick={() => reloadTab()}
                    d={
                        "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    }
                />
            </div>

            <div className="container_preview_container">
                <p className="container_preview_title">
                    PREVIEW
                </p>
                <div className="container_preview">
                    <MDEditor.Markdown source={finalData} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
            </div>
            
        </div>
    )
}

export default Generate