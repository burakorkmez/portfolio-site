import classes from './About.module.css';
import Image from 'next/image';

const About = () => {
	return (
		<section className={classes.about} id="about">
			<div className={`container ${classes['about-wrapper']}`} data-aos="fade-up">
				<div className={classes['author-picture']}>
					<img src="/img/me.jpg" alt="Author picture" />
				</div>
				<div className={classes['about-author']}>
					<div className={classes.layout}>
						<p className={classes.title}>My Intro</p>
						<h2>About me</h2>
						<hr />
					</div>
					<p className={classes.desc}>
						Hi there! My name is Burak. I&apos;m a sophomore at Duzce University. I&apos;m pursuing
						a BA degree in computer science with an expected graduation in 2024. What I&apos;m most
						passionate about is web technologies. More specifically, front-end development is my
						main focus.
					</p>
					<div className={classes.overview}>
						<div>
							<div>
								<label>Full Name: </label>
								<span> Burak Orkmez</span>
							</div>
							<div>
								<label>School: </label>
								<span> Duzce University</span>
							</div>
							<div>
								<label>Major: </label>
								<span> Computer Science</span>
							</div>
							<div>
								<label>Expected Graduation:</label>
								<span> 2024</span>
							</div>
						</div>
						<div>
							<div>
								<label>Origin: </label>
								<span> Istanbul, Turkey</span>
							</div>
							<div>
								<label>DOB: </label>
								<span> September 21, 2001</span>
							</div>
							<div>
								<label>Language: </label>
								<span> English, Turkish</span>
							</div>
							<div>
								<label>Email: </label>
								<span> burakorkmezz@gmail.com</span>
							</div>
						</div>
					</div>
					<a
						href="https://drive.google.com/file/d/1WxYpB3KBngb3-o0-Y89mPBF5e9YcIUaO/view"
						target="_blank"
						rel="noreferrer"
						className="btn download-btn"
					>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
