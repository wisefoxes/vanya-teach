import { FC, HTMLAttributes } from 'react';
import { IconTitle, ResultDescription, ResultsArticleStyled } from './ResultArticle.style';

type Props = {
	icon?: string;
	label?: string;
} & HTMLAttributes<HTMLElement>;

const ResultArticle: FC<Props> = (props: Props) => {
	const { icon, children, label, ...restProps } = props;

	return (
		<ResultsArticleStyled {...restProps}>
			<IconTitle>
				<span role="img" aria-label={label}>
					{icon}
				</span>
			</IconTitle>
			<ResultDescription>{children}</ResultDescription>
		</ResultsArticleStyled>
	);
};

export { ResultArticle };
