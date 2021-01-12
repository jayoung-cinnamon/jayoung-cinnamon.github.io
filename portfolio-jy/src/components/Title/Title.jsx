import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes  from 'prop-types';
import '../../styles/components/title.css'

const Title = ({title})=>(
  <Fade bottom duration={1000} delay={1000} distance ="0px">
    <div className="section-title">{title}</div>
  </Fade>
);

Title.propTypes={
  title:PropTypes.string.isRequired,
};

export default Title;