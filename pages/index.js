import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<About />
			<Projects />
		</div>
	);
}
