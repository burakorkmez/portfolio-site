import classes from './OtherProject.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const OtherProject = ({ project }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.top}>
				<img src={project.img} alt={'a picture of' + project.img} />
			</div>
			<div className={classes.bottom}>
				<h2 className={classes.title}>{project.title}</h2>
				<p className={classes.desc}>{project.desc}</p>
				<div className={classes.flex}>
					<div>
						{project.builtWith.map((item) => (
							<span key={project.id}>{item}</span>
						))}
					</div>
					<div>
						{project.demo && (
							<span className={classes.icon}>
								<Link href={project.demo} passHref>
									<a target="_blank">
										<FontAwesomeIcon icon={faLink} />
									</a>
								</Link>
							</span>
						)}
						{project.github && (
							<span className={classes.icon}>
								<Link href={project.github} passHref>
									<a target="_blank">
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</Link>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OtherProject;
