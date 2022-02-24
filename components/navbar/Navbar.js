import classes from './Navbar.module.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			setIsScrolled(window.pageYOffset === 0 ? false : true);
		};
		return () => (window.onscroll = null);
	}, []);

	return (
		<header
			className={`${classes.header} ${isMenuOpen ? classes.open : ''} ${
				isScrolled ? classes.scrolled : ''
			}`}
		>
			<div className={classes['navbar-container']}>
				<a href="#">
					<h1 className={classes.logo}>BURAK ÖRKMEZ</h1>
				</a>

				<figure
					className={classes.hamburger}
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					{!isMenuOpen && (
						<FontAwesomeIcon
							icon={faBars}
							className={classes['hamburger-icon']}
						/>
					)}
					{isMenuOpen && (
						<FontAwesomeIcon
							icon={faXmark}
							className={classes['hamburger-icon']}
						/>
					)}
				</figure>
				<nav>
					<ul className={classes['navbar-list']}>
						<li className={classes['navbar-list-item']}>
							<a href="#about" onClick={() => setIsMenuOpen(false)}>
								About
							</a>
						</li>
						<li className={classes['navbar-list-item']}>
							<a href="#work" onClick={() => setIsMenuOpen(false)}>
								Work
							</a>
						</li>
						<li className={classes['navbar-list-item']}>
							<a href="#contact" onClick={() => setIsMenuOpen(false)}>
								Contact
							</a>
						</li>
						<li
							className={`btn  ${classes['navbar-list-item']} ${classes['btn-resume']}`}
						>
							<a
								href="https://drive.google.com/file/d/1YYiQ4HErXJKgUAmTLNrWk3GbptZxayh-/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								onClick={() => setIsMenuOpen(false)}
							>
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
