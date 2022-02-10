// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { EnvironmentConfig } from './types';

export const environment: EnvironmentConfig = {
	production: false,
	auth: {
		google: {
			clientID: '833458426181-t5enljphcq8r49eicd0qceavcj30kgot.apps.googleusercontent.com',
		},
	},
};
