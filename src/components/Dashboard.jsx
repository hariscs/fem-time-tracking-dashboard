import { useState } from 'react';
import CardItem from './CardItem';
import Profile from './Profile';
import './Dashboard.css';
import iconEllipsis from '../assets/icon-ellipsis.svg';
import profileImg from '../assets/image-jeremy.png';
import useFetchData from './useFetchData';

const Dashboard = () => {
	const { data } = useFetchData('/data/data.json');
	const [report, setReport] = useState('weekly');

	return (
		<section className='dashboard'>
			<Profile
				profileSrc={profileImg}
				topText='Report for'
				title='Jeremy Robson'
				daily='Daily'
				weekly='Weekly'
				monthly='Monthly'
				onClickHandler={setReport}
			/>
			<ul className='card'>
				{data &&
					data.map((item) => (
						<CardItem
							cardTitle={item.title}
							infoTime={item.timeframes[report].current}
							infoSubtitle={item.timeframes[report].previous}
							infoIcon={iconEllipsis}
							bgColor={item.background}
							key={item.id}
							infoData={report}
						/>
					))}
			</ul>
		</section>
	);
};

export default Dashboard;
