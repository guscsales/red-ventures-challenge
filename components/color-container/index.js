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

import dotRed from '../../lib/images/dot-red.png';
import dotBlue from '../../lib/images/dot-blue.png';
import dotGrey from '../../lib/images/dot-grey.png';

class ColorContainer extends React.PureComponent {
	static propTypes = {
		items: PropTypes.array,
		description: PropTypes.string,
		currentPrice: PropTypes.number,
		setColor: PropTypes.func,
		setAccumulatorPrice: PropTypes.func
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

		this.props.setColor(items[currentIndex]);
		this.props.setNextPage(Router.pathname);
	}

	handleChangeColor(currentIndex) {
		this.setState({
			currentIndex
		});

		const { items, currentPrice } = this.props;
		const item = items[currentIndex];

		this.props.setColor(item);
		this.props.setAccumulatorPrice({
			currentPrice,
			accumulatorPrice: item.price
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
			<>
				<Container>
					<div className={classnames(grid.dHalf, grid.dHalfOffset)}>
						<Title>Color</Title>

						<p className={style.description}>{description}</p>
					</div>
				</Container>
				<Container withBottomSpace>
					<div className={classnames(grid.dHalf, style.carInfo)}>
						<img
							className={style.image}
							src={image}
							alt={`Color ${label}`}
						/>
						<div className={style.colorInfo}>{label}</div>
						<div className={style.extraPrice}>
							{Boolean(price)
								? `+${toCurrency(price)}`
								: 'Included'}
						</div>
					</div>
					<div className={grid.dHalf}>
						{this.getColorsOptions(items, id)}
					</div>
					<ResultBar />
				</Container>
			</>
		);
	}
}

const mapStateToProps = ({
	data: {
		color: { description, items }
	},
	result: { currentPrice }
}) => ({
	description,
	items,
	currentPrice
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ ...resultActions, setNextPage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorContainer);
