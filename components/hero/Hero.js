import classes from './Hero.module.css';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<Navbar />

			<div className="container mt-xl">
				<p className={classes.greetings}>Hi, my name is</p>
				<h1 className={classes.author}>Burak Örkmez</h1>
				<h2 className={classes.connect}>Let&apos;s connect.</h2>
				<p className={classes.welcome}>
					Welcome to my website, where I share my professional journey.
				</p>

				<button className={`btn ${classes['discover-btn']}`}>
					Discover{' '}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#fff"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
					</svg>
				</button>
			</div>
			<Sidebar />
		</section>
	);
};

export default Hero;
