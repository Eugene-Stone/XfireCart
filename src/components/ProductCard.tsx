import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

import type { Product } from '../types.ts';
import { addProduct } from '../redux/slices/cartSlice.ts';

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

	const [activePower, setActivePower] = useState<string>(selected_power);
	const dispatch = useDispatch();

	const { cartList } = useSelector((state: RootState) => state.cartReducer);

	function changePower(power: string) {
		setActivePower(power);
	}
	function addToCart() {
		const cartItem = {
			id,
			name,
			image,
			category,
			types,
			power_options,
			price,
			activePower,
		};
		dispatch(addProduct(cartItem));
	}

	return (
		<div className="xfire-block">
			<img
				className="xfire-block__image"
				src={`${import.meta.env.BASE_URL}/${image}`}
				alt="xfire"
			/>
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
						let active = power === activePower ? 'active' : '';

						return (
							<li key={i} className={active} onClick={() => changePower(power)}>
								{power}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="xfire-block__bottom">
				<div className="xfire-block__price">от {price[activePower]} $</div>
				<div className="button button--outline button--add" onClick={() => addToCart()}>
					<span>Добавить</span>
					{/* <i>2</i> */}
				</div>
			</div>
		</div>
	);
}
