import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import Router from 'next/router';

import Container from '../container';
import Title from '../title';
import ResultBar from '../result-bar';

import { toCurrency } from '../../lib/scripts/money';

import * as resultActions from '../../actions/result';
import { setNextPage } from '../../actions/next-page';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

class EngineContainer extends React.PureComponent {
	static propTypes = {
		items: PropTypes.array,
		currentPrice: PropTypes.number,
		setEngine: PropTypes.func,
		setAccumulatorPrice: PropTypes.func,
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

		this.props.setEngine(items[currentIndex]);
		this.props.setNextPage(Router.pathname);
	}

	handleChangeEngine(currentIndex) {
		this.setState({
			currentIndex
		});

		const { items, currentPrice } = this.props;
		const item = items[currentIndex];

		this.props.setEngine(item);
		this.props.setAccumulatorPrice({
			currentPrice,
			accumulatorPrice: item.price
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
			<>
				<Container withGrid={false}>
					<div className={classnames(grid.dHalf, grid.dHalfOffset)}>
						<Title>Engine</Title>
					</div>
				</Container>
				<Container withBottomSpace>
					<div className={classnames(grid.dHalf, style.wrapperImage)}>
						<img
							className={style.image}
							src={image}
							alt={`Engine ${kwh} ${type}`}
						/>
					</div>
					<div className={grid.dHalf}>
						{this.getEngineOptions(items, id)}
					</div>
					<ResultBar />
				</Container>
			</>
		);
	}
}

const mapStateToProps = ({
	data: {
		engine: { items }
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
)(EngineContainer);
