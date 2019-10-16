import React, { useState }  from 'react'
import {  } from 'prop-types'

import styled from 'styled-components'

import { colors } from '../constants/colors';
import Button from './Button'

const AuthorityStyled = styled.div`
	align-items: center;
	background-color: ${colors.darkBlue};
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

const Authority = () => {
	const [authority, setAuthority] = useState(50)
	
	const handleClickPlus = () => {
		setAuthority(authority + 1)
	}
	
	const handleClickMinus = () => {
		setAuthority(authority - 1)
	}
	
  return (
  	<AuthorityStyled>
  		<Button 
  			styles={{ fontSize: '40px', height: '100%', marginBottom: '0', width: '100px' }}
  			callback={handleClickMinus}
  			disabled={authority === 0}
  		>
  			-
  		</Button>
  		
  		<span>{ authority }</span>
  		
  		<Button 
  			styles={{ fontSize: '40px', height: '100%', marginBottom: '0', width: '100px' }}
  			callback={handleClickPlus}
  		>
  			+
  		</Button>
  	</AuthorityStyled>
  )
}

Authority.propTypes = {
  
}

Authority.defaultProps = {
  
}

Authority.displayName = 'Authority'

export default Authority