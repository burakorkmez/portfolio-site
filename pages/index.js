import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Head from 'next/head';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div>
			<Head>
				<title>Burak Örkmez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charset="utf-8" />
			</Head>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
