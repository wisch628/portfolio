import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "@fontsource/source-code-pro"
import { siteShortTitle } from "../../config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;
  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  border-width: 3px;
  border-style: solid;
  border-color: ${({ color }) => (color ? color : "black")};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  


  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`
const LogoText = styled.div`
line-height: 1.15;
text-align: center;
color: ${({ color }) => (color ? color : "black")};
font-family: 'Source Code Pro';
weight: 100px;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    <LogoText color={color}>{siteShortTitle}</LogoText>
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
