import CardItem from './CardItem';
import Profile from './Profile';
import './Dashboard.css';

import iconWork from '../images/icon-work.svg';
import iconEllipsis from '../images/icon-ellipsis.svg';

import profileImg from '../images/image-jeremy.png';

const Dashboard = ({ data }) => {
	// eslint-disable-next-line no-lone-blocks
	{
		fetch('./data/data/json')
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}
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
				{data.map((item) => (
					<CardItem
						cardTitle={item.title}
						infoTime={item.timeframes.weekly.current}
						infoSubtitle={item.timeframes.weekly.previous}
						infoIcon={iconEllipsis}
						bannerIcon={iconWork}
						key={item.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Dashboard;
