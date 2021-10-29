import './CardItem.css';

const CardItem = (props) => {
	return (
		<li className='card__item'>
			<div className='card__banner'>
				<img src={props.bannerIcon} alt='icon' className='card__banner--icon' />
			</div>
			<div className='card__info'>
				<div className='card__info--header'>
					<h2 className='card__info--title'>{props.cardTitle}</h2>
					<img src={props.infoIcon} alt='icon' className='card__info--icon' />
				</div>
				<div className='card__info--main'>
					<h3 className='card__info--title'>{props.infoTitle}</h3>
					<span className='card__info--subtitle'>{props.infoSubtitle}</span>
				</div>
			</div>
		</li>
	);
};

export default CardItem;
