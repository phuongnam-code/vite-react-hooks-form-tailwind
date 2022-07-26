import { useRef, useImperativeHandle, forwardRef } from 'react';
import videoTest from '@/videos/video-test-1.mp4';

const Video = (props, ref) => {
	const videoRef = useRef();

	useImperativeHandle(ref, () => ({
		play: () => videoRef.current.play(),
		pause: () => videoRef.current.pause(),
	}));

	return <video ref={videoRef} src={props.video || videoTest} width={480} />;
};

export default forwardRef(Video);
