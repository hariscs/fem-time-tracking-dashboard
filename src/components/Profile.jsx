import { useRef } from 'react';

import './Profile.css';

const Profile = (props) => {
	const daily = useRef();
	const weekly = useRef();
	const monthly = useRef();

	return (
		<div className='profile'>
			<div className='profile__heading'>
				<img src={props.profileSrc} alt='profile' className='profile__img' />
				<div className='profile__heading--info'>
					<span className='profile__heading--toptext'>{props.topText}</span>
					<h1 className='profile__heading--title'>{props.title}</h1>
				</div>
			</div>
			<div className='profile__report'>
				<h3
					ref={daily}
					className='daily report'
					onClick={() => {
						props.onClickHandler('daily');
						daily.current.classList.add('active');
						weekly.current.classList.remove('active');
						monthly.current.classList.remove('active');
					}}
				>
					{props.daily}
				</h3>

				<h3
					ref={weekly}
					className='weekly report active'
					onClick={() => {
						props.onClickHandler('weekly');
						daily.current.classList.remove('active');
						weekly.current.classList.add('active');
						monthly.current.classList.remove('active');
					}}
				>
					{props.weekly}
				</h3>
				<h3
					ref={monthly}
					className='monthly report '
					onClick={() => {
						props.onClickHandler('monthly');
						daily.current.classList.remove('active');
						weekly.current.classList.remove('active');
						monthly.current.classList.add('active');
					}}
				>
					{props.monthly}
				</h3>
			</div>
		</div>
	);
};

export default Profile;
