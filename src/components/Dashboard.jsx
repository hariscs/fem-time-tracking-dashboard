import CardItem from './CardItem';
import Profile from './Profile';
import './Dashboard.css';

import iconWork from '../images/icon-work.svg';
import iconEllipsis from '../images/icon-ellipsis.svg';

import profileImg from '../images/image-jeremy.png';

const Dashboard = ({ data }) => {
	console.log(data);

	return (
		<section className='dashboard'>
			<Profile
				profileSrc={profileImg}
				topText='Report for'
				title='Jeremy Robson'
				daily='Daily'
				weekly='Weekly'
				monthly='Monthly'
			/>
			<ul className='card'>
				<CardItem
					bannerIcon={iconWork}
					cardTitle='Work'
					infoIcon={iconEllipsis}
					infoTime='32hrs'
					infoSubtitle='Last Week - 8hrs'
				/>
			</ul>
		</section>
	);
};

export default Dashboard;
