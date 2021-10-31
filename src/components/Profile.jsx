import './Profile.css';

const Profile = (props) => {
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
					className='daily report'
					onClick={() => props.onClickHandler('daily')}
				>
					{props.daily}
				</h3>
				<h3
					className='weekly report'
					onClick={() => props.onClickHandler('weekly')}
				>
					{props.weekly}
				</h3>
				<h3
					className='monthly report '
					onClick={() => props.onClickHandler('monthly')}
				>
					{props.monthly}
				</h3>
			</div>
		</div>
	);
};

export default Profile;
