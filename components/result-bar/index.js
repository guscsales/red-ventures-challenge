import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Router from 'next/router';

import { toCurrency } from '../../lib/scripts/money';

import { setCurrentPrice } from '../../actions/result';

import Container from '../container';
import style from './style.scss';
import grid from '../../lib/scss/grid.scss';

import arrowSvg from '../../lib/images/arrow.svg';

class ResultBar extends React.PureComponent {
	static propTypes = {
		engine: PropTypes.oneOfType([
			PropTypes.oneOf([null]),
			PropTypes.object
		]),
		color: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
		wheel: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
		accumulatorPrice: PropTypes.number,
		nextPage: PropTypes.string,
		setCurrentPrice: PropTypes.func
	};

	handleNextStep() {
		const { accumulatorPrice, nextPage } = this.props;

		this.props.setCurrentPrice(accumulatorPrice);

		Router.push(nextPage);
	}

	render() {
		const { engine, color, wheel, accumulatorPrice } = this.props;

		return (
			<div className={style.wrapper}>
				<Container>
					<div className={style.bar}>
						<div
							className={classnames(
								grid.two,
								grid.mHalf,
								style.total
							)}
						>
							<small>Total</small>
							{toCurrency(accumulatorPrice)}
						</div>
						<div className={classnames(grid.two, style.model)}>
							Model R
						</div>
						<div className={classnames(grid.two, style.engine)}>
							{engine && (
								<>
									{engine.kwh} <span>{engine.type}</span>
								</>
							)}
						</div>
						<div className={classnames(grid.two, style.mHide)}>
							{color && (
								<img
									src={color.dot}
									className={style.color}
									alt={`${color.label} color`}
								/>
							)}
						</div>
						<div className={classnames(grid.two, style.mHide)}>
							{wheel && (
								<img
									src={wheel.image}
									className={style.wheel}
									alt={`${wheel.label} wheel`}
								/>
							)}
						</div>
						<div
							className={classnames(
								grid.two,
								grid.mHalf,
								style.wrapperNext
							)}
						>
							<div
								className={style.next}
								onClick={this.handleNextStep.bind(this)}
							>
								next <img src={arrowSvg} alt="Arrow" />
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = ({
	result: { engine, color, wheel, accumulatorPrice },
	nextPage
}) => ({
	engine,
	color,
	wheel,
	accumulatorPrice,
	nextPage
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ setCurrentPrice }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultBar);
