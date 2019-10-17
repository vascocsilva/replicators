import React, { useState }  from 'react'
import {  } from 'prop-types'

import styled from 'styled-components'

import { colors } from '../constants/colors';
import { ButtonSec } from './buttons'
import helper from '../images/help.png'

const AuthorityStyled = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, .5);
	bottom: 0;
	display: flex;
	height: 70px;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	
	span {
		font-size: 40px;
		font-weight: 700;
		color: ${colors.mainBlue};
	}
`

const Helper = styled.div`
	background-color: rgba(0, 0, 0, .7);
	background-image: url(${helper});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	bottom: 0;
	display: none;
	height: 100vh;
	opacity: 0;
	position: fixed;
	transition: opacity 1s ease-in-out;
	width: 100%;
	
	&.show {
		display: block;
		opacity: 1;
		z-index: 2;
	}
`

const Authority = () => {
	const [authority, setAuthority] = useState(50)
	const [showHelp, setShowHelp] = useState(false)
	
	const handleClickPlus = () => {
		setAuthority(authority + 1)
	}
	
	const handleClickMinus = () => {
		setAuthority(authority - 1)
	}
	
	const handleShowHelp = () => {
		setShowHelp(true)
	}
	
	const handleHideHelp = () => {
		setShowHelp(false)
	}
	
  return (
  	<>
	  	<AuthorityStyled>
	  		<ButtonSec 
	  			onClick={handleClickMinus}
	  			disabled={authority === 0}
	  		>
	  			-
	  		</ButtonSec>
	  		
	  		<span onClick={handleShowHelp}>{ authority }</span>
	  		
	  		<ButtonSec onClick={handleClickPlus}>
	  			+
	  		</ButtonSec>
	  	</AuthorityStyled>
	  	<Helper 
	  		className={ showHelp ? 'show' : 'hide' } 
	  		onClick={handleHideHelp}
	  	/>
  	</>
  )
}

Authority.displayName = 'Authority'

export default Authority