import classes from './Projects.module.css';
import { mainProjects } from '../../data/projects-data';
import MainProject from './Projects';

const Projects = () => {
	return (
		<section className={classes['projects-section']}>
			<div className="container">
				<h2 className={`text-center ${classes['projects-title']}`}>
					Some projects I&apos;ve built
				</h2>
				<div className="vertical-line text-center">|</div>
				{mainProjects.map((project, i) => (
					<MainProject project={project} key={i} index={i} />
				))}
			</div>
		</section>
	);
};

export default Projects;
