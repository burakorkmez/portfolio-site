import classes from './Dots.module.css';

const Dots = ({ lengthOfDots, slideIndex, moveDot }) => {
	return (
		<div className={classes['container-dots']}>
			{Array.from({ length: lengthOfDots }).map((item, index) => (
				<div
					key={index}
					onClick={() => moveDot(index + 1)}
					className={
						slideIndex === index + 1
							? `${classes.dot} ${classes.active}`
							: classes.dot
					}
				></div>
			))}
		</div>
	);
};

export default Dots;
