import React from 'react';
import VideoItem from "./VideoItem";


class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const renderedList = this.props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>;
    });
        return <div className="ui relaxed divided list">VIDEO LIST: {renderedList}</div>;
    }
}

    export default VideoList;