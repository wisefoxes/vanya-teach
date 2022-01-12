import { TransitionStatus } from 'react-transition-group';
import { css, FlattenSimpleInterpolation } from 'styled-components';

const transitionValue =
	(entering: FlattenSimpleInterpolation, entered: FlattenSimpleInterpolation, exiting = entering, exited = exiting) =>
	({ transitionStatus }: Partial<{ transitionStatus: TransitionStatus }>): FlattenSimpleInterpolation => {
		if (transitionStatus === 'entering') return entering;
		if (transitionStatus === 'entered') return entered;
		if (transitionStatus === 'exiting') return exiting;
		if (transitionStatus === 'exited') return exited;

		return css``;
	};

export { transitionValue };
