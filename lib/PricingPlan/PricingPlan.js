import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PricingPlan = ({
  children,
  title,
  price,
  priceDesc,
  savings,
  smallPrint,
  upgradeButton,
  contactButton,
  className,
  current,
  ...rest
}) => {
  const classNames = cx(`pricing__plan ${className}`, {
    'pricing__plan--current': current
  });

  return (
    <article className={classNames} {...rest}>
      <h2 className="pricing__plan-title">{title}</h2>
      <div className="pricing__plan-inner">
        <header className="pricing__plan-header">
          {contactButton && (
            <div className="pricing__plan-contact-button">{contactButton}</div>
          )}
          {price && <div className="pricing__plan-price">{price}</div>}
          {priceDesc && (
            <div className="pricing__plan-description">{priceDesc}</div>
          )}
          {savings && <div className="pricing__plan-savings">{savings}</div>}
          {smallPrint && (
            <div className="pricing__plan-small-print">{smallPrint}</div>
          )}
          {upgradeButton}
        </header>

        <section className="pricing__plan-body">{children}</section>

        <footer className="pricing__plan-footer">
          {contactButton}
          {upgradeButton}
        </footer>
      </div>
    </article>
  );
};

PricingPlan.propTypes = {
  title: PropTypes.string,
  price: PropTypes.node,
  priceDesc: PropTypes.node,
  smallPrint: PropTypes.node,
  children: PropTypes.node,
  upgradeButton: PropTypes.node,
  contactButton: PropTypes.node,
  savings: PropTypes.string,
  className: PropTypes.string,
  current: PropTypes.bool
};

PricingPlan.defaultProps = {
  title: '',
  price: '',
  priceDesc: '',
  smallPrint: '',
  children: null,
  savings: null,
  upgradeButton: null,
  contactButton: null,
  className: '',
  current: false
};

export default PricingPlan;
