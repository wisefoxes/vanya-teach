import { useOAuth } from 'core/oauth/oauth-context';
import { RefObject, useEffect } from 'react';
import { renderGoogleAuthButton } from 'services/google/auth';

function useGoogleOAuth(ref: RefObject<HTMLDivElement>): void {
	const {
		google: { load, loaded, initialize },
	} = useOAuth();

	useEffect(() => {
		if (!loaded) {
			load();
		}
	}, [loaded, load]);

	useEffect(() => {
		if (!loaded) {
			return;
		}

		initialize((cred) => console.log(cred));
	}, [loaded, initialize]);

	useEffect(() => {
		if (ref.current && loaded) {
			renderGoogleAuthButton(ref.current);
		}
	}, [loaded, ref]);
}

export { useGoogleOAuth };
