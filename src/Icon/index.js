import PropTypes from 'prop-types';
import React from 'react';

import icons from './icons.json';

const propTypes = {
  description: PropTypes.string,
  fill: PropTypes.string,
  fillRule: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  viewBox: PropTypes.string,
};

function findIcon(name, iconsObj = icons) {
  const icon = iconsObj.filter(obj => obj.title.split(' ').join('-') === name);
  if(icon.length > 1) throw new Error('More that one icons was found with same name: ' . name);
  if(icon.svg < 1) throw new Error('No icon found with the name: ' . name);
  const iconObj = icon.length === 0 ? false : icon[0];
  return iconObj;
}

const Icon = ({
  description = 'icon',
  fill = 'currentColor',
  name,
  role,
  size = 'medium',
  stroke = 'none',
  style = {}
}) => {
  const icon = findIcon(`${name}`);
  let sizeNumber;

  if(size === 'default') {
    sizeNumber = '16'
  } else if(size === 'large') {
    sizeNumber = '24'
  }

  const iconStyles = Object.assign({}, style, { fill, stroke });

  const svgClass = `oui-icon display--inline oui-icon--${sizeNumber}`
  const props = {
    className: svgClass,
    height: sizeNumber,
    name: `${name}`,
    role,
    stroke,
    fill,
    style: iconStyles,
    width: sizeNumber
  };

  return (
    <div
      data-oui-component={ true }
      {...props}>
      { icon.svg }
    </div>
  );
};

Icon.propTypes = propTypes;

export default Icon;
