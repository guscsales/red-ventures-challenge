import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import Router from 'next/router';

import Container from '../container';
import Title from '../title';
import ResultBar from '../result-bar';

import * as resultActions from '../../actions/result';
import { setNextPage } from '../../actions/next-page';

import { toCurrency } from '../../lib/scripts/money';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

class WheelContainer extends React.PureComponent {
	static propTypes = {
		items: PropTypes.array,
		currentPrice: PropTypes.number,
		setColor: PropTypes.func,
		setNextPage: PropTypes.func
	};

	constructor() {
		super();

		this.state = {
			currentIndex: 0
		};
	}

	componentDidMount() {
		const { items } = this.props;
		const { currentIndex } = this.state;

		this.props.setWheel(items[currentIndex]);
		this.props.setNextPage(Router.pathname);
	}

	handleChangeWhell(currentIndex) {
		this.setState({
			currentIndex
		});

		const { items, currentPrice } = this.props;
		const item = items[currentIndex];

		this.props.setWheel(item);
		this.props.setAccumulatorPrice({
			currentPrice,
			accumulatorPrice: item.price
		});
	}

	getWheelsOptions(items, currentId) {
		return (
			<ul className={style.options}>
				{items.map(({ id, label, image, price }, index) => {
					const optionCx = classnames(grid.dOneThird, {
						[style.active]: id === currentId
					});

					return (
						<li
							key={id}
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
					<Title center>Wheel</Title>
				</Container>
				<Container className={style.wrapper}>
					{this.getWheelsOptions(items, id)}
				</Container>
				<ResultBar />
			</>
		);
	}
}

const mapStateToProps = ({
	data: {
		wheels: { items }
	},
	result: { currentPrice }
}) => ({
	items,
	currentPrice
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ ...resultActions, setNextPage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WheelContainer);
