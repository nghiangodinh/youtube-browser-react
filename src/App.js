import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import { SearchBar, VideoList, VideoDetail } from "./components";

const API_KEY = "AIzaSyCyEejy2JdFII-rsVwQ-XDL4YZLx8t5y28";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="d-flex flex-column">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="d-flex flex-row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
