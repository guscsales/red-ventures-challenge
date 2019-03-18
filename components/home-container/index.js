import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
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
	value: propTypes.string,
	unit: propTypes.string,
	children: propTypes.node
};

const HomeContainer = ({ model, carImage }) => (
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
			<a className={style.begin}>
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

HomeContainer.propTypes = {
	model: propTypes.string,
	carImage: propTypes.string
};

export default HomeContainer;
