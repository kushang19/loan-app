import React from 'react';
import PropTypes from 'prop-types';
import './CustomCard.css'; // Optional: for default styles

const CustomCard = ({
  title,
  subtitle,
  description,
  footer,
  image,
  children,
  onClick,
  className = '',
  style = {},
  bgColor = '#fff',
  textColor = '#000',
  border = '1px solid #ddd',
  borderRadius = '12px',
  padding = '16px',
  boxShadow = '0 2px 8px rgba(0,0,0,0.1)',
}) => {
  return (
    <div
      className={`custom-card ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border,
        borderRadius,
        padding,
        boxShadow,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={onClick}
    >
      {image && <img src={image} alt="Card" className="card-image" />}
      {title && <h2 className="card-title">{title}</h2>}
      {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      {description && <p className="card-description">{description}</p>}
      {children && <div className="card-children">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.node,
  image: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  boxShadow: PropTypes.string,
};

export default CustomCard;
