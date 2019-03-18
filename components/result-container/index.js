import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import Router from 'next/router';

import Container from '../container';
import Title from '../title';

import { resetResult } from '../../actions/result';
import { setNextPage } from '../../actions/next-page';

import { toCurrency } from '../../lib/scripts/money';

import grid from '../../lib/scss/grid.scss';
import style from './style.scss';

import rebuildSvg from '../../lib/images/rebuild.svg';

export const RowInfo = ({ title, value, big }) => (
	<div
		className={classnames(style.rowInfo, grid.flexContainer, {
			[style.rowInfoBig]: big
		})}
	>
		<div className={grid.twoThird}>{title}</div>
		<div className={classnames(grid.oneThird, style.spotlight)}>
			{value}
		</div>
	</div>
);

RowInfo.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
	big: PropTypes.bool
};

class ResultContainer extends React.PureComponent {
	static propTypes = {
		engine: PropTypes.object,
		color: PropTypes.object,
		wheel: PropTypes.object,
		currentPrice: PropTypes.number,
		initialPrice: PropTypes.number,
		nextPage: PropTypes.string,
		resetResult: PropTypes.func,
		setNextPage: PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {
			car: {}
		};
	}

	componentDidMount() {
		const { results, color } = this.props;
		const image = results.filter(item => item.id === color.id)[0].image;

		this.setState({
			car: { image, color: color.label }
		});

		this.props.setNextPage(Router.pathname);
	}

	handleRebuild() {
		const { nextPage, initialPrice } = this.props;

		this.props.resetResult({ initialPrice });

		Router.replace(nextPage);
	}

	render() {
		const { car } = this.state;
		const { engine, color, wheel, currentPrice, initialPrice } = this.props;

		return (
			<>
				<Container withGrid={false}>
					<div className={classnames(grid.dHalf, grid.dHalfOffset)}>
						<Title>
							Your{' '}
							<span className={style.modelType}>
								Model <span>R</span>
							</span>
						</Title>
					</div>
				</Container>
				<Container withBottomSpace>
					<div className={classnames(grid.dHalf, style.wrapperImage)}>
						<img
							className={style.image}
							src={car.image}
							alt={`Model R ${car.color} car`}
						/>
					</div>
					<section className={grid.dHalf}>
						<RowInfo
							title="Starting price"
							value={toCurrency(initialPrice)}
						/>
						<hr className={style.separator} />
						{engine && (
							<RowInfo
								title={`${engine.kwh} ${engine.type} - ${
									engine.kwh
								} kWh - ${engine.range} miles range`}
								value={
									engine.price > 0
										? `+ ${toCurrency(engine.price)}`
										: 'Included'
								}
							/>
						)}
						{color && (
							<RowInfo
								title={`${color.label} paint`}
								value={
									color.price > 0
										? `+ ${toCurrency(color.price)}`
										: 'Included'
								}
							/>
						)}
						{wheel && (
							<RowInfo
								title={wheel.label}
								value={
									wheel.price > 0
										? `+ ${toCurrency(wheel.price)}`
										: 'Included'
								}
							/>
						)}
						<hr className={style.separator} />
						<RowInfo
							title="Final Price"
							value={toCurrency(currentPrice)}
							big
						/>

						<div
							className={style.rebuild}
							onClick={this.handleRebuild.bind(this)}
						>
							Rebuild <img src={rebuildSvg} alt="Rebuild Icon" />
						</div>
					</section>
				</Container>
			</>
		);
	}
}

const mapStateToProps = ({
	data: {
		price: initialPrice,
		results: { items: results }
	},
	result: { engine, color, wheel, currentPrice },
	nextPage
}) => ({
	initialPrice,
	results,
	engine,
	color,
	wheel,
	currentPrice,
	nextPage
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ resetResult, setNextPage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultContainer);
