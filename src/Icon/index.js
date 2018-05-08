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
  if(icon.length > 1) throw new Error('More that one icons was found with same name');
  const iconObj = icon.length === 0 ? false : icon[0];
  return iconObj;
}

function buildSvg(iconData) {
  const svgElements = iconData.map( (prop, index) => {
    if(prop.name === 'path') {
      return <path {...prop.attrs} key={ `path-${index}` } />
    }
    else if(prop.name === 'circle') {
      return <circle {...prop.attrs} key={ `circle-${index}` } />
    }
    else if(prop.name === 'rect') {
      return <rect {...prop.attrs} key={ `rect-${index}` } />
    }
    else if(prop.name === 'ellipse') {
      return <ellipse {...prop.attrs} key={ `ellipse-${index}` } />
    }
    else if(prop.name === 'g') {
      return buildSvg(prop.childs)
    }
    else {
      return null;
    }
  });

  return svgElements;
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

  if(size === 'small') {
    sizeNumber = '12'
  } else if(size === 'medium') {
    sizeNumber = '16'
  } else if(size === 'large') {
    sizeNumber = '24'
  }

  const iconStyles = style;
  iconStyles['fill'] = fill;

  const svgClass = `oui-icon display--inline oui-icon--${sizeNumber}`
  const props = {
    className: svgClass,
    height: sizeNumber,
    name: `${name}`,
    role,
    stroke,
    style: iconStyles,
    viewBox: icon.attrs.viewBox,
    width: sizeNumber
  };

  const content = icon ? buildSvg(icon.childs) : '';

  return (
    <svg
      data-oui-component={ true }
      {...props}>
      <title>{icon.title}</title>
      <desc>{ description }</desc>
      { content }
    </svg>
  );
};

Icon.propTypes = propTypes;

export default Icon;
