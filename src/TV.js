import { TabContent } from '@momentum-ui/react';
import ReactPlayer from 'react-player/lazy';

const TV = () => {
  return <div>
    <ReactPlayer url={'https://www.youtube.com/watch?v=Tnk4i6Ef3NI'} playing controls/>
  </div>;
}

export default TV;