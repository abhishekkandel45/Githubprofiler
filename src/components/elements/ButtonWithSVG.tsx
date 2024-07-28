import React from "react";

interface Props {
    title : string;
    d : string;
    onClick : () => void;
}

export default function ButtonWithSVG({ title, d, onClick } : Props) {
    return (
        <button
            onClick={onClick}
        >
            {title}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 group-hover:-rotate-12 transition-all ease-in-out duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.6}
                    d={d}
                />
            </svg>
        </button>
    );
}