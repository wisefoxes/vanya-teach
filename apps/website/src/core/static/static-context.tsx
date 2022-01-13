import React, { FC, useContext, useState } from 'react';

type Props = { children: React.ReactNode };
type State = { staticHost: string };

const StaticContext = React.createContext<State | undefined>(undefined);

const StaticProvider: FC<Props> = (props: Props) => {
	const [staticHost] = useState('http://localhost:5747');

	const value = { staticHost };

	return <StaticContext.Provider value={value}>{props.children}</StaticContext.Provider>;
};

function useStaticInfo(): State {
	const context = useContext(StaticContext);

	if (context === undefined) {
		throw new Error('useStaticInfo must be used within a StaticProvider');
	}

	return context;
}

export { StaticProvider, useStaticInfo };
