import classes from './Sidebar.module.css';
// import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<nav>
				<ul>
					<li className={classes['sidebar-list-item']}>
						<a href="">
							<FontAwesomeIcon icon={faFile} style={{ color: '#363a50' }} />{' '}
						</a>
					</li>
					<li className={classes['sidebar-list-item']}>
						<a href="">
							<FontAwesomeIcon icon={faLinkedin} style={{ color: '#363a50' }} />
						</a>
					</li>
					<li className={classes['sidebar-list-item']}>
						<a href="">
							<FontAwesomeIcon icon={faGithub} style={{ color: '#363a50' }} />
						</a>
					</li>
					<li className={classes['sidebar-list-item']}>
						<a href="">
							<FontAwesomeIcon
								icon={faInstagram}
								style={{ color: '#363a50' }}
							/>
						</a>
					</li>
					<div className={classes['vertical-line']}></div>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
