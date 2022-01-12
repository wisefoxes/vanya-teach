import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
const BodyAttached: FC = (props: PropsWithChildren<{}>) => ReactDOM.createPortal(props.children, document.body);

export { BodyAttached };
