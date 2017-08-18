import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

import icons from './icons.json';

const propTypes = {
  className: PropTypes.string,
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
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return <path {...prop.attrs} /> 
    }
    else if(prop.name === 'circle') { 
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return <circle {...prop.attrs} />
    }
    else if(prop.name === 'rect') { 
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return <rect {...prop.attrs} />
    }
    else if(prop.name === 'g') { return buildSvg(prop.childs) }
  });

  return svgElements;
}

const Icon = ({
  className,
  color,
  description,
  fill = 'none',
  name,
  role,
  size = 'medium',
  stroke = 'black',
  style
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

  const props = {
    className,
    desc: description || `icon for ${name}`,
    fill,
    height: sizeNumber,
    name: `${name}`,
    role,
    stroke,
    style,
    viewBox: icon.attrs.viewBox,
    width: sizeNumber
  };
  
  const content = icon ? buildSvg(icon.childs) : '';

  return (
    <svg {...props}>
      <title>{icon.title}</title>
      <desc>{ props.desc }</desc>
      { content }
    </svg>
  );
};

Icon.propTypes = propTypes;

export default Icon;