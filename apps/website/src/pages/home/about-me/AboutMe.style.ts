import { pageContainer } from 'design/generic/layout';
import { rem } from 'polished';
import styled from 'styled-components';
import { Heading } from 'ui-kit/atoms/heading';

const AboutMeStyled = styled.section`
	padding: ${rem(50)} 0;
	${pageContainer}
`;

const TeacherName = styled(Heading)`
	text-align: left;
`;

const AchievementsList = styled.ul`
	list-style-type: '— ';
	list-style-position: inside;
	margin-top: ${rem(15)};
`;

const AchievementItem = styled.li`
	line-height: 1.45;
	font-size: ${rem(18)};
`;

const QuoteAchievements = styled.blockquote`
	font-size: ${rem(14)};
	line-height: 1.45;
	margin-top: ${rem(20)};
`;

export { AboutMeStyled, TeacherName, AchievementsList, AchievementItem, QuoteAchievements };
