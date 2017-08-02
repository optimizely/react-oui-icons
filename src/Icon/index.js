import PropTypes from 'prop-types';
import React from 'react';
import icons from './icons';

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

export function findIcon(name, iconsObj = icons) {
  const icon = iconsObj.filter(obj => obj.name === name);

  if (icon.length === 0) {
    return false;
  } else if (icon.length > 1) {
    throw new Error('Multiple icons found...');
  } else {
    return icon[0];
  }
}


export function getSvgData(iconName) {
  const name = findIcon(iconName);
  return name ? name.svgData : false;
}


export function svgShapes(svgData) {
  const svgElements = Object.keys(svgData)
    .filter(key => svgData[key])
    .map(svgProp => {
      const data = svgData[svgProp];

      if (svgProp === 'circles') {
        return data.map(circle => {
          const circleProps = {
            cx: circle.cx,
            cy: circle.cy,
            r: circle.r,
          };

          return <circle {...circleProps} />;
        });
      } else if (svgProp === 'ellipses') {
        return data.map(ellipse => {
          const ellipseProps = {
            cx: ellipse.cx,
            cy: ellipse.cy,
            rx: ellipse.rx,
            ry: ellipse.ry,
          };

          return <ellipse {...ellipseProps} />;
        });
      } else if (svgProp === 'paths') {
        return data.map(path => <path d={path.d} />);
      }

      return '';
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
  const icon = findIcon(`${name}`);
  if(size === 'small') { size = '12'}
  else if( size === 'medium') { size = '16'}
  else if( size === 'large') { size = '24'}
  else { size = '16'}
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
  
  const svgContent = icon ? svgShapes(icon.svgData) : '';

  return (
    <svg {...props}>
      <title>{description}</title>
      {svgContent}
    </svg>
  );
};

Icon.propTypes = propTypes;

export { icons };

export default Icon;