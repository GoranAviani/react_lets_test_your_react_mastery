import React from 'react';

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={videos: [], selectedVideo: null}
    }

    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        console.log("from the app", video)
        this.setState({selectedVideo: video})
    }



}

export default App;