import { useStaticInfo } from 'core/static/static-context';
import { FC } from 'react';
import { TextLink } from 'ui-kit/atoms/text-link';
import { CoursesDescription } from './courses-description';
import {
	WavesBackground,
	HomeStyled,
	HomeSubTitle,
	HomeTitle,
	ImageWrapper,
	MainImage,
	SelectCourse,
	AboutMe,
	TeacherName,
	AchievementsList,
	AchievementItem,
	QuoteAchievements,
} from './Home.style';

const Home: FC = () => {
	const { staticHost } = useStaticInfo();

	return (
		<HomeStyled>
			<HomeTitle>Онлайн-школа гитары Ивана Захаренко</HomeTitle>
			<HomeSubTitle level={6}>Более 1500 студентов по всему земному шару</HomeSubTitle>
			<SelectCourse to="/courses" type="primary">
				Выбрать свой курс
			</SelectCourse>
			<ImageWrapper>
				<WavesBackground />
				<MainImage name="vanya-guitar" breakpoints={{ s: 500 }} staticHost={staticHost} ratio="500/549" ext="png" />
			</ImageWrapper>
			<CoursesDescription />
			<AboutMe>
				<TeacherName level={2}>Иван Захаренко</TeacherName>
				<AchievementsList>
					<AchievementItem>Музыкант, профессиональный гитарист, аранжировщик;</AchievementItem>
					<AchievementItem>Сертифицированный преподаватель с опытом более 10-ти лет;</AchievementItem>
					<AchievementItem>Магистр искусствоведения;</AchievementItem>
					<AchievementItem>Более 1500 студентов по всему земному шару;</AchievementItem>
					<AchievementItem>
						Автор YouTube канала{' '}
						<TextLink href="https://www.youtube.com/channel/UCRHlIHugU0GvJsvTGU5MH1g" target="_blank">
							&quot;Ваня, научи!&quot;
						</TextLink>{' '}
						с аудиторией 70.000+ подписчиков.
					</AchievementItem>
				</AchievementsList>
				<QuoteAchievements>
					&quot;Я занимаюсь музыкой уже более 20 лет и жизни своей не представляю без гитары. За это время я понял, что привлекает людей в
					игре на гитаре и как сделать процесс обучения максимально увлекательным, эффективным и простым!
				</QuoteAchievements>
				<QuoteAchievements>
					Основатель музыкальной школы в г. Минске. Тысячи студентов по всему миру играют на гитаре благодаря моим урокам и разборам. Более
					5 млн. просмотров обучающих видео на YouTube.&quot;
				</QuoteAchievements>
			</AboutMe>
		</HomeStyled>
	);
};

export { Home };
