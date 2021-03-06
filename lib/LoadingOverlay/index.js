import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadingSVG from '../../assets/loading.svg';

const LoadingOverlay = ({ fixed, hideSVG, percentageLoaded, loadingText }) => {
  const className = cx('loading-overlay', {
    'loading-overlay--fixed': fixed
  });

  return (
    <div className={className}>
      <div className="loading-overlay__content weight-semi-bold text-align-center">
        {!hideSVG && loadingSVG()}
        {percentageLoaded > 0 && (
          <Fragment>
            <p className="h-margin-bottom-quarter h-margin-top-clear">
              {loadingText}
            </p>
            <p className="h-margin-clear color-neutral-base">{`${percentageLoaded}%`}</p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

LoadingOverlay.propTypes = {
  fixed: PropTypes.bool,
  hideSVG: PropTypes.bool,
  percentageLoaded: PropTypes.number,
  loadingText: PropTypes.string
};

LoadingOverlay.defaultProps = {
  fixed: false,
  hideSVG: false,
  percentageLoaded: 0,
  loadingText: 'Loading'
};

export default LoadingOverlay;
