import React, { ReactNode } from "react";

export interface ThemeProps {
    value: string;
    label: string;
}

export interface GitubStat {
    theme: ThemeProps | null;
    border: boolean;
    lifetimecommit: boolean;
    privatecommit: boolean;
    compact: boolean;
}

export interface SocialInputProps {
    type: string;
    value: string;
    onChange: (newValue: string) => void;
    svg: () => ReactNode;
}

export interface SlideProps {
    onBackPress: () => void
}

export interface SocialProfileBadgeProps {
    title: string;
    label: string;
    github?: boolean;
    url: string;
    theme: ThemeProps | null;
    onChangeURL: (value: string) => void;
}

export interface ColorProps {
    hex?: string;
}