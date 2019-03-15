import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Container from '../container';
import Title from '../title';

import { toCurrency } from '../../lib/scripts/money';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

class WheelContainer extends React.PureComponent {
	static propTypes = {
		items: propTypes.array
	};

	constructor() {
		super();

		this.state = {
			currentIndex: 0
		};
	}

	handleChangeWhell(currentIndex) {
		this.setState({
			currentIndex
		});
	}

	getWheelsOptions(items, currentId) {
		return (
			<ul className={style.options}>
				{items.map(({ id, label, image, price }, index) => {
					const optionCx = classnames(grid.oneThird, {
						[style.active]: id === currentId
					});

					return (
						<li
							className={optionCx}
							onClick={this.handleChangeWhell.bind(this, index)}
						>
							<img
								className={style.image}
								src={image}
								alt={`Whell ${label}`}
							/>
							<div className={style.wheelInfo}>
								<div className={style.label}>{label}</div>
								<div className={style.extraPrice}>
									{Boolean(price)
										? `+${toCurrency(price)}`
										: 'Included'}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		const { items } = this.props;
		const { currentIndex } = this.state;
		const { id } = items[currentIndex];

		return (
			<>
				<Container withGrid={false}>
					<Title center>Wheels</Title>
				</Container>
				<Container>{this.getWheelsOptions(items, id)}</Container>
			</>
		);
	}
}

const mapStateToProps = ({
	data: {
		wheels: { items }
	}
}) => ({
	items
});

export default connect(mapStateToProps)(WheelContainer);
