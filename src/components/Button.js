import React from 'react'
import { node, func, boolean } from 'prop-types'

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

const Button = ({ children, callback, disabled }) => {
  return (
  	<ButtonStyled onClick={callback} disabled={disabled}>
  		{ children }
  	</ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
  disabled: boolean,
}

Button.defaultProps = {
  disabled: false,
}



Button.displayName = 'Button'

export default Button