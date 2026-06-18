import React from 'react';

import type { Product } from '../types.ts';

type Props = Product;

export default function ProductCard(props: Props) {
	const {
		id,
		name,
		image,
		category,
		types,
		power_options,
		selected_power,
		price,
		popularity,
		rating,
	} = props;

	return (
		<div className="xfire-block">
			<img className="xfire-block__image" src={image} alt="xfire" />
			<h4 className="xfire-block__title">{name}</h4>
			<div className="xfire-block__selector">
				<ul>
					{types.map((type, i) => (
						<li key={i}>
							<h3>{type.typeName}</h3>
						</li>
					))}
				</ul>
				<ul>
					{power_options.map((power, i) => {
						let powerActive = power === selected_power ? 'active' : '';

						return (
							<li key={i} className={powerActive}>
								{power}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="xfire-block__bottom">
				<div className="xfire-block__price">от {price[selected_power]} $</div>
				<div className="button button--outline button--add">
					<svg
						width={12}
						height={12}
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>2</i>
				</div>
			</div>
		</div>
	);
}
