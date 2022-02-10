import { FC, useRef } from 'react';
import { useGoogleOAuth } from './hooks';

const OAuthControls: FC = () => {
	const googleBtnRef = useRef<HTMLDivElement>(null);

	useGoogleOAuth(googleBtnRef);

	return (
		<div>
			<div ref={googleBtnRef} />
		</div>
	);
};

export { OAuthControls };
