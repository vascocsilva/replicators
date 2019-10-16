import React from 'react'
import { node, func } from 'prop-types'

import styled from 'styled-components'

import { colors } from '../constants/colors'

const ButtonStyled = styled.button`
	appearance: none;
	background-color: ${colors.black};
	border: 1px solid ${colors.mainBlue};
	color: ${colors.mainBlue};
	font-size: 20px;
	height: 60px;
	margin-bottom: 30px;
	width: 220px;
	text-transform: uppercase;
`

const Button = ({ children, callback }) => {
  return (
  	<ButtonStyled onClick={callback}>
  		{ children }
  	</ButtonStyled>
  )
}

Button.propTypes = {
  children: node.isRequired,
  callback: func.isRequired,
}

Button.displayName = 'Button'

export default Button