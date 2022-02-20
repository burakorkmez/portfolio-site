import classes from './SliderButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function BtnSlider({ direction, moveSlide }) {
	console.log(direction);
	return (
		<button
			onClick={moveSlide}
			className={
				direction === 'next'
					? `${classes['btn-slide']} ${classes.next}`
					: `${classes['btn-slide']} ${classes.prev}`
			}
		>
			{direction === 'next' && (
				<FontAwesomeIcon icon={faRightLong} style={{ color: '#334740' }} />
			)}
			{direction === 'prev' && (
				<FontAwesomeIcon icon={faLeftLong} style={{ color: '#334740' }} />
			)}
		</button>
	);
}
