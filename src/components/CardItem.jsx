import './CardItem.css';

const CardItem = (props) => {
	return (
		<li className='card__item'>
			<div className='card__banner'></div>
			<div className='card__info'>
				<div className='card__header'>
					<h2 className='card__header--title'>{props.cardTitle}</h2>
					<img src={props.infoIcon} alt='icon' className='card__header--icon' />
				</div>
				<div className='card__main'>
					<h3 className='card__main--time'>{props.infoTime}</h3>
					<span className='card__main--subtitle'>{props.infoSubtitle}</span>
				</div>
			</div>
		</li>
	);
};

export default CardItem;
