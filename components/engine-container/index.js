import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Container from '../container';
import Title from '../title';

import { toCurrency } from '../../lib/scripts/money';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

class EngineContainer extends React.PureComponent {
	static propTypes = {
		items: propTypes.array
	};

	constructor() {
		super();

		this.state = {
			currentIndex: 0
		};
	}

	handleChangeEngine(currentIndex) {
		this.setState({
			currentIndex
		});
	}

	getEngineOptions(items, currentId) {
		return (
			<ul>
				{items.map(({ id, kwh, type, range, price }, index) => {
					const optionCx = classnames(style.option, {
						[style.active]: id === currentId
					});

					return (
						<li
							className={optionCx}
							key={id}
							onClick={this.handleChangeEngine.bind(this, index)}
						>
							<div>
								<span
									className={classnames(
										style.kwh,
										style.active
									)}
								>
									{kwh}
								</span>{' '}
								<span className={style.type}>{type}</span>
							</div>
							<div>
								<span className={style.active}>{kwh}</span> kWh
							</div>
							<div>
								<span className={style.active}>{range}</span>{' '}
								miles range
							</div>
							{Boolean(price) && (
								<div className={style.extraPrice}>
									+{toCurrency(price)}
								</div>
							)}
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		const { items } = this.props;
		const { currentIndex } = this.state;
		const { id, type, kwh, image } = items[currentIndex];

		return (
			<Container>
				<div className={grid.half}>
					<img
						className={style.image}
						src={image}
						alt={`Engine ${kwh} ${type}`}
					/>
				</div>
				<div className={grid.half}>
					<Title>Engine</Title>

					{this.getEngineOptions(items, id)}
				</div>
			</Container>
		);
	}
}

const mapStateToProps = ({
	data: {
		engine: { items }
	}
}) => ({
	items
});

export default connect(mapStateToProps)(EngineContainer);
