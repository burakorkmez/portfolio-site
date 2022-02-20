import classes from './Projects.module.css';
import { mainProjects } from '../../data/projects-data';
import Project from './Project';

const Projects = () => {
	return (
		<section className={classes['projects-section']}>
			<div className="container">
				<h2 className={`text-center ${classes['projects-title']}`}>
					Some projects I&apos;ve built
				</h2>
				<div className="vertical-line text-center">|</div>
				{mainProjects.map((project, i) => (
					<Project project={project} key={i} index={i} />
				))}
			</div>
		</section>
	);
};

export default Projects;
