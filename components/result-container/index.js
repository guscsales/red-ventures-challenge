import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Container from '../container';
import Title from '../title';

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
	title: propTypes.string,
	value: propTypes.string,
	big: propTypes.bool
};

class ResultContainer extends React.PureComponent {
	static propTypes = {};

	render() {
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
							src="https://bit.ly/2onwCX5"
							alt=""
						/>
					</div>
					<section className={grid.dHalf}>
						<RowInfo title="Starting price" value="$63.000" />
						<hr className={style.separator} />
						<RowInfo
							title="75 P - 75 kWh - 275 miles range"
							value="+ $5.500"
						/>
						<RowInfo
							title="Metallic Vermilion Paint"
							value="Included"
						/>
						<RowInfo
							title='22" Performance Carbon'
							value="+ $2.000"
						/>
						<hr className={style.separator} />
						<RowInfo title="Final Price" value="$71.000" big />

						<a href="" className={style.rebuild}>
							Rebuild <img src={rebuildSvg} alt="Rebuild Icon" />
						</a>
					</section>
				</Container>
			</>
		);
	}
}

const mapStateToProps = ({ result: { items } }) => ({
	items
});

export default ResultContainer;
