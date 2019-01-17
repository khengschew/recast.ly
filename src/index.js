// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';

var Index = (props) => (
  <VideoPlayer data={props.data} />
);

ReactDOM.render(<Index data={exampleVideoData}/>, document.getElementById('app'));

