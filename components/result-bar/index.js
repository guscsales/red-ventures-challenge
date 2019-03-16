import React from 'react';
import classnames from 'classnames';

import Container from '../container';
import style from './style.scss';
import grid from '../../lib/scss/grid.scss';

import arrowSvg from '../../lib/images/arrow.svg';
import dotRed from '../../lib/images/dot-red.png';
import wheel from '../../lib/images/wheel-gray-grafitti.png';

class ResultBar extends React.PureComponent {
	render() {
		return (
			<div className={style.wrapper}>
				<Container>
					<div className={style.bar}>
						<div className={classnames(grid.two, style.total)}>
							<small>Total</small>
							$65.000
						</div>
						<div className={classnames(grid.two, style.model)}>
							Model R
						</div>
						<div className={classnames(grid.two, style.engine)}>
							75 <span>P</span>
						</div>
						<div className={grid.two}>
							<img
								src={dotRed}
								className={style.color}
								alt="Color"
							/>
						</div>
						<div className={grid.two}>
							<img
								src={wheel}
								className={style.wheel}
								alt="Wheel"
							/>
						</div>
						<div
							className={classnames(grid.two, style.wrapperNext)}
						>
							<div className={style.next}>
								next <img src={arrowSvg} alt="Arrow" />
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default ResultBar;
