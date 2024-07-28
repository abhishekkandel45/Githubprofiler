import React, { useState, useEffect } from 'react'
import { ThemeProps } from '../../constants/type'
import SocialBadge from '../elements/SocialBadge'

interface Props {
    theme: ThemeProps | null;
}

function SocialBadges({ theme }: Props) {

    const [githubfollow, setGithubfollow] = useState("");
    const [githubstar, setGithubstar] = useState("");
    const [hackernews, setHackernews] = useState("");
    const [mastodon, setMastodon] = useState("");
    const [subreddit, setSubreddit] = useState("");
    const [twitch, setTwitch] = useState("");
    const [twitterfollow, setTwitterfollow] = useState("");
    const [youtubeViews, setYoutubeViews] = useState("");
    const [youtubeSub, setYoutubeSub] = useState("");

    useEffect(() => {
        let markdowncode = '';

        if( githubfollow.length > 0 )
            markdowncode += `![](${githubfollow})  `;

        if( githubstar.length > 0 )
            markdowncode += `![](${githubstar})  `;

        if( hackernews.length > 0 )
            markdowncode += `![](${hackernews})  `;

        if( mastodon.length > 0 )
            markdowncode += `![](${mastodon})  `;

        if( subreddit.length > 0 )
            markdowncode += `![](${subreddit})  `;

        if( twitch.length > 0 )
            markdowncode += `![](${twitch})  `;

        if( twitterfollow.length > 0 )
            markdowncode += `![](${twitterfollow})  `;

        if( youtubeViews.length > 0 )
            markdowncode += `![](${youtubeViews})  `;

        if( youtubeSub.length > 0 )
            markdowncode += `![](${youtubeSub})  `;

        if( markdowncode.length > 4 ){
            markdowncode = `\n## 👨 Social Profiles\n` + markdowncode;
        }

        localStorage.setItem("social_badges", markdowncode);
    }, [githubfollow, githubstar, hackernews, mastodon, subreddit, twitch, twitterfollow, youtubeViews, youtubeSub])
    

    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Social Profile Badges</h2>
            </div>
            <div className="slider_content_settings">
                <SocialBadge
                    title='GitHub followers:'
                    label='Follow'
                    github={true}
                    theme={theme}
                    url={"https://img.shields.io/github/followers/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setGithubfollow(value)}
                />

                <SocialBadge
                    title="GitHub User's stars"
                    label="Stars"
                    github={true}
                    theme={theme}
                    url={"https://img.shields.io/github/stars/RUSERNAME?affiliations=OWNER%2CCOLLABORATOR&color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setGithubstar(value)}
                />

                <SocialBadge
                    title="HackerNews User Karma"
                    label="U/pg Karma"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/hackernews/user-karma/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setHackernews(value)}
                />

                <SocialBadge
                    title="Mastodon Follow"
                    label="Follow"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/mastodon/follow/RUSERNAME?domain=https%3A%2F%2Fmastodon.social&color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setMastodon(value)}
                />

                <SocialBadge
                    title="Subreddit subscribers"
                    label="Follow r/drums"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/reddit/subreddit-subscribers/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setSubreddit(value)}
                />

                <SocialBadge
                    title="Twitch Status:"
                    label="Twitch"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/twitch/status/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setTwitch(value)}
                />

                <SocialBadge
                    title="Twitter Follow"
                    label="Follow"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/twitter/follow/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setTwitterfollow(value)}
                />

                <SocialBadge
                    title="Youtube Channel Views"
                    label="Views"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/youtube/channel/views/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setYoutubeViews(value)}
                />

                <SocialBadge
                    title="Youtube Channel Subscribers"
                    label="Subscribers"
                    github={false}
                    theme={theme}
                    url={"https://img.shields.io/youtube/channel/subscribers/RUSERNAME?color=%23RCOLORCODE&label=RLABEL&style=RSTYLE"}
                    onChangeURL={(value: string) => setYoutubeSub(value)}
                />
            </div>
        </div>
    )
}

export default SocialBadges