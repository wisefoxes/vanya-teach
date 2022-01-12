import { Footer } from 'common/footer/Footer';
import { Header } from 'common/header';
import { About } from 'pages/about';
import { Courses } from 'pages/courses';
import { Home } from 'pages/home';
import { Tabs } from 'pages/tabs';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tabs" element={<Tabs />} />
				<Route path="/about" element={<About />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</>
	);
};

export { App };
