import classes from './Projects.module.css';
import { mainProjects, otherProjects } from '../../data/projects-data';
import MainProject from './MainProject';
import OtherProject from './OtherProject';

const Projects = () => {
	return (
		<section className={classes['projects-section']}>
			<div className="container">
				<h2 className={`text-center secondary-heading`}>
					Some projects I&apos;ve built
				</h2>
				<div className="vertical-line text-center">|</div>
				{mainProjects.map((project, i) => (
					<MainProject project={project} key={i} index={i} />
				))}
				<h2 className={`text-center secondary-heading`}>Other projects</h2>
				<div className="vertical-line text-center">|</div>
				<div className={classes['other-project-container']}>
					{otherProjects.map((project, i) => (
						<OtherProject project={project} key={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
