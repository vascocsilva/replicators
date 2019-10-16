import React from 'react'
import { node, func, boolean, object } from 'prop-types'

import styled from 'styled-components'

import { colors } from '../constants/colors'

const ButtonStyled = styled.button`
	appearance: none;
	background-color: ${colors.black};
	border: 1px solid ${colors.mainBlue};
	color: ${colors.mainBlue};
	font-size: 14px;
	height: 40px;
	margin-bottom: 30px;
	width: 200px;
	text-transform: uppercase;
`

const Button = ({ children, callback, disabled, styles }) => {
  return (
  	<ButtonStyled onClick={callback} disabled={disabled} style={styles}>
  		{ children }
  	</ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
  disabled: boolean,
  styles: object,
}

Button.defaultProps = {
  disabled: false,
  styles: {},
}



Button.displayName = 'Button'

export default Button