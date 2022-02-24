import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Head from 'next/head';
export default function Home() {
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
