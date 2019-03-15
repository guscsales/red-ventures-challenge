import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../container';
import Title from '../title';

import { toCurrency } from '../../lib/scripts/money';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

import dotRed from '../../lib/images/dot-red.png';
import dotBlue from '../../lib/images/dot-blue.png';
import dotGrey from '../../lib/images/dot-grey.png';

class ColorContainer extends React.PureComponent {
	static propTypes = {
		items: propTypes.array,
		description: propTypes.string
	};

	constructor() {
		super();

		this.state = {
			currentIndex: 0
		};
	}

	handleChangeColor(currentIndex) {
		this.setState({
			currentIndex
		});
	}

	getColorsOptions(items, currentId) {
		items[0].dot = dotRed;
		items[1].dot = dotBlue;
		items[2].dot = dotGrey;

		return (
			<ul className={style.options}>
				{items.map(({ id, label, dot }, index) => (
					<li
						key={id}
						className={id === currentId ? style.active : ''}
						onClick={this.handleChangeColor.bind(this, index)}
					>
						<img src={dot} alt={`Color ${label}`} />
					</li>
				))}
			</ul>
		);
	}

	render() {
		const { description, items } = this.props;
		const { currentIndex } = this.state;
		const { id, label, image, price } = items[currentIndex];

		return (
			<Container>
				<div className={grid.half}>
					<img
						className={style.image}
						src={image}
						alt={`Color ${label}`}
					/>
					<div className={style.colorInfo}>{label}</div>
					<div className={style.extraPrice}>
						{Boolean(price) ? `+${toCurrency(price)}` : 'Included'}
					</div>
				</div>
				<div className={grid.half}>
					<Title>Color</Title>

					<p className={style.description}>{description}</p>

					{this.getColorsOptions(items, id)}
				</div>
			</Container>
		);
	}
}

const mapStateToProps = ({
	data: {
		color: { description, items }
	}
}) => ({
	description,
	items
});

export default connect(mapStateToProps)(ColorContainer);
