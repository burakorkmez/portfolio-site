import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<header>
			<div className={classes['navbar-container']}>
				<h1 className={classes.logo}>Logo</h1>
				<nav>
					<ul className={classes['navbar-list']}>
						<li className={classes['navbar-list-item']}>
							<a href="">About</a>
						</li>
						<li className={classes['navbar-list-item']}>
							<a href="">Work</a>
						</li>
						<li className={classes['navbar-list-item']}>
							<a href="">Contact</a>
						</li>
						<li
							className={`btn  ${classes['navbar-list-item']} ${classes['btn-resume']}`}
						>
							<a href="">Resume</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
