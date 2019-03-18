import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setStartSteps } from '../../actions/step';

import Container from '../container';
import style from './style.scss';

import arrowSvg from '../../lib/images/arrow.svg';

export const ModelInfoBox = ({ value, unit, children }) => (
	<div className={style.modelInfoBox}>
		<span className={style.mainInfo}>
			{value} <small>{unit}</small>
		</span>
		<span className={style.complementInfo}>{children}</span>
	</div>
);

ModelInfoBox.propTypes = {
	value: PropTypes.string,
	unit: PropTypes.string,
	children: PropTypes.node
};

class HomeContainer extends React.PureComponent {
	static propTypes = {
		model: PropTypes.string,
		carImage: PropTypes.string,
		setStartSteps: PropTypes.func
	};

	handleBegin() {
		this.props.setStartSteps();
	}

	render() {
		const { model, carImage } = this.props;

		return (
			<Container withGrid={false}>
				<section className={style.modelPresentation}>
					<span className={style.preTitle}>Build your</span>
					<h1 className={style.title}>
						Model <span>{model}</span>
					</h1>
					<img
						src={carImage}
						alt={`{model} car`}
						className={style.carImage}
					/>
				</section>
				<Link href="/engine">
					<a
						className={style.begin}
						onClick={this.handleBegin.bind(this)}
					>
						BEGIN <img src={arrowSvg} alt="Begin arrow" />
					</a>
				</Link>
				<section className={style.modelInfo}>
					<ModelInfoBox value="2.5" unit="s">
						From 0 to 100
					</ModelInfoBox>
					<ModelInfoBox value="420" unit="mi">
						Miles range
					</ModelInfoBox>
					<ModelInfoBox value="250" unit="mp/h">
						Max speed
					</ModelInfoBox>
				</section>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ setStartSteps }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(HomeContainer);
