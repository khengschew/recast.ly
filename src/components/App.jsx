import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from './../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'video-player': exampleVideoData[0],
      'video-list': exampleVideoData,
      'searchYouTubeFunction': props.searchYouTube,
      'search': '',
      'max': 5,
      // 'canSearch': true
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    this.runSearch();
  }

  handleVideoClick(video) {
    this.setState({
      'video-player': video
    });
  }

  handleData(data) {
    this.setState({
      'video-list': data,
      'video-player': data[0]
    });
  }

  handleSearchChange(e) {
    console.log(e.target.value);
    this.setState({
      'search': e.target.value
    });
    this.runSearch();

    // if (this.state.canSearch) {
    //   console.log(this.state.search);
    //   this.runSearch();
    // }
  }

  runSearch() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.search,
      max: this.state.max
    };
    this.state.searchYouTubeFunction(options, this.handleData);
    // this.disableSearch();
  }

  // disableSearch() {
  //   this.setState({
  //     'canSearch': false
  //   });
  //   setTimeout((function() {
  //     this.setState({
  //       'canSearch': true
  //     });
  //   }).bind(this), 500);
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChangeCallback={this.handleSearchChange}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state['video-player']} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state['video-list']} onClickCallback={this.handleVideoClick} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
