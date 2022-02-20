import { useState } from 'react';
import classes from './Projects.module.css';
import SliderButton from '../sliderButton/SliderButton';
import Dots from '../dots/Dots';
import Image from 'next/image';

const Project = ({ project, index }) => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== project.imgs.length) {
			setSlideIndex(slideIndex + 1);
		} else {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(project.imgs.length);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className={`container ${classes['project-container']}`}>
			{project.id % 2 !== 0 && (
				<>
					<div className={classes.left}>
						<div className={classes['container-slider']}>
							{project.imgs.map((img, i) => {
								return (
									<div
										key={i}
										className={
											slideIndex === i + 1
												? `${classes.slide} ${classes['active-anim']}`
												: classes.slide
										}
									>
										<img
											src={project.imgs[i]}
											alt={`An image of ${project.title}`}
										/>
									</div>
								);
							})}

							<SliderButton moveSlide={nextSlide} direction={'next'} />
							<SliderButton moveSlide={prevSlide} direction={'prev'} />

							<Dots
								lengthOfDots={project.imgs.length}
								slideIndex={slideIndex}
								moveDot={moveDot}
							/>
						</div>
					</div>
					<div className={classes.right}>
						<h2 className={classes['project-title']}>{project.title}</h2>
						<div className={classes.desc}>{project.desc}</div>
						<div className={classes['built-with']}>
							{project.builtWith.map((item, i) => (
								<span key={i}>{item}</span>
							))}
						</div>
					</div>
				</>
			)}

			{project.id % 2 === 0 && (
				<>
					<div className={`${classes.right} ${classes.reversed}`}>
						<h2 className={classes['project-title']}>{project.title}</h2>
						<div className={classes.desc}>{project.desc}</div>
						<div className={classes['built-with']}>
							{project.builtWith.map((item, i) => (
								<span key={i}>{item}</span>
							))}
						</div>
					</div>
					<div className={`${classes.left} ${classes.reversed}`}>
						<div className={classes['container-slider']}>
							{project.imgs.map((img, i) => {
								return (
									<div
										key={i}
										className={
											slideIndex === i + 1
												? `${classes.slide} ${classes['active-anim']}`
												: classes.slide
										}
									>
										<img src={project.imgs[i]} />
									</div>
								);
							})}

							<SliderButton moveSlide={nextSlide} direction={'next'} />
							<SliderButton moveSlide={prevSlide} direction={'prev'} />

							<Dots
								lengthOfDots={project.imgs.length}
								slideIndex={slideIndex}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Project;
