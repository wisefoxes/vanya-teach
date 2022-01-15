import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { ButtonLink } from 'ui-kit/atoms/button-link';
import { Heading } from 'ui-kit/atoms/heading';

const SectionStyled = styled.section`
	${pageContainer};
	width: 75%;
	margin: 0 auto;
`;

const CourseArticle = styled.article`
	margin-top: ${rem(100)};
`;

const CourseTitle = styled(Heading)`
	margin-top: ${rem(40)};
	font-size: ${rem(40)};
`;

const CourseInfo = styled.div`
	font-size: ${rem(22)};
	margin-top: ${rem(40)};
`;

const CourseLink = styled(ButtonLink)`
	margin-top: ${rem(40)};
`;

export { SectionStyled, CourseArticle, CourseTitle, CourseInfo, CourseLink };
