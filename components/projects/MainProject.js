// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import classes from './Projects.module.css';

const MainProject = ({ project }) => {
	const pagination = {
		pagination: true,
		clickable: true,
	};

	return (
		<div className={`container ${classes['project-container']}`}>
			<div
				className={`${classes.left} ${
					project.id % 2 === 0 ? classes.reversed : ''
				}`}
			>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={pagination}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					{project.imgs.map((url, i) => (
						<SwiperSlide key={i}>
							<img src={url} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div
				className={`${classes.right} ${
					project.id % 2 === 0 ? classes.reversed : ''
				}`}
			>
				<h2 className={classes['project-title']}>{project.title}</h2>
				<div className={classes.desc}>{project.desc}</div>
				<div className={classes['built-with']}>
					{project.builtWith.map((item, i) => (
						<span key={i}>{item}</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainProject;
