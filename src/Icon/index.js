import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

import icons from './icons.json';

const propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
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
    if(prop.name === 'g') { return buildSvg(prop.childs) }
    else if(prop.name === 'path') { 
      return <path {...prop.attrs} /> 
    }
    else if(prop.name === 'circle') { 
      return <circle {...prop.attrs} />
    }
  });

  return svgElements;
}

const Icon = ({
  className,
  description,
  fill,
  fillRule,
  name,
  role,
  size = 'medium',
  style,
  // ...other
}) => {
  const Svg = glamorous.svg({
    'stroke': 'black',
    'fill': 'none',
    ':hover': {
      'stroke': 'red',
    },
  });

  const icon = findIcon(`${name}`);
  const props = {
    className,
    fill,
    fillRule,
    height: size,
    name: `${name}`,
    role,
    style,
    viewBox: icon.viewBox,
    width: size,
  };
  
  const content = icon ? buildSvg(icon.childs) : '';
  const attrs = icon.attrs;

  return (
    <Svg {...attrs}>
      <title>{icon.title}</title>
      { content }
    </Svg>
  );
};

Icon.propTypes = propTypes;

export default Icon;