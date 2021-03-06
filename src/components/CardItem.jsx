import './CardItem.css';

const CardItem = (props) => {
	let stats = '';
	switch (props.infoData) {
		case 'daily':
			stats = 'Day';
			break;
		case 'weekly':
			stats = 'Week';
			break;
		case 'monthly':
			stats = 'Month';
			break;
		default:
			stats = 'Weekly';
	}
	return (
		<li className='card__item' style={{ backgroundColor: props.bgColor }}>
			<div className='card__banner'></div>
			<div className='card__info'>
				<div className='card__header'>
					<h2 className='card__header--title'>{props.cardTitle}</h2>
					<img src={props.infoIcon} alt='icon' className='card__header--icon' />
				</div>
				<div className='card__main'>
					<h3 className='card__main--time'>{props.infoTime}hrs</h3>
					<span className='card__main--subtitle'>
						Last {stats} - {props.infoSubtitle}hrs
					</span>
				</div>
			</div>
		</li>
	);
};

export default CardItem;
