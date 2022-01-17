import { rem } from 'polished';
import styled from 'styled-components';

const CourseArticleStyled = styled.article`
	display: flex;
	flex-direction: column;
	gap: ${rem(40)};
`;

const CourseInfo = styled.div`
	font-size: ${rem(22)};
`;

export { CourseArticleStyled, CourseInfo };
