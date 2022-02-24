import classes from './Contact.module.css';

import Link from 'next/link';

const Contact = () => {
	return (
		<section className={classes.contact} id="contact">
			<div className={`container ${classes.wrapper}`}>
				<h2 className={classes.title}>What&apos;s next?</h2>
				<h3 className={classes.subtitle}>Get In Touch</h3>
				<p className={classes.content}>
					Feel free to connect with me. I&apos;m always open to discussing new
					projects, creative ideas, or opportunities to be part of your visions.
				</p>
				<a href="mailto:burakorkmezz@gmail.com">
					<button className={`btn ${classes['btn-email']}`}>Say Hello</button>
				</a>

				<Link href="https://www.linkedin.com/in/burakork/">
					<a className={classes.author} target="_blank">
						Built by Burak Orkmez
					</a>
				</Link>
			</div>
		</section>
	);
};

export default Contact;
