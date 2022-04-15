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

    componentDidMount(){
    this.onTermSubmit('dogs')
    }

    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        console.log("from the app", video)
        this.setState({selectedVideo: video})
    }


    render() {
        return(
            <div>
                App
                <SearchBar className="ui container" searchItem={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                        <div className="five wide column">
                        found {this.state.videos.length} videos!
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                            </div>
                </div>
                    </div>
            </div>
        )
    }
}

export default App;