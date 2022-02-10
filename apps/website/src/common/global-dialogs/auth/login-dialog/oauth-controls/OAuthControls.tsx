import { FC, useRef } from 'react';
import { useGoogleOAuth } from './hooks';
import { GoogleButton } from './OAuthControls.style';

const OAuthControls: FC = () => {
	const googleBtnRef = useRef<HTMLDivElement>(null);

	useGoogleOAuth(googleBtnRef);

	return (
		<div>
			<GoogleButton ref={googleBtnRef} />
		</div>
	);
};

export { OAuthControls };
