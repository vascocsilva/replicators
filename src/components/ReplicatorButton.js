import React from 'react'
import { number, func } from 'prop-types'

import styled from 'styled-components'

import { colors } from '../constants/colors'
import spaceship from '../images/spaceship.png'

const ReplicatorButtonStyled = styled.button`
	animation: buttonAnim 0.3s ease-in;
	background-color: ${colors.black};
	background-image: url(${spaceship});
	background-size: contain;
	border-radius: 50%;
	border: 1px solid ${colors.mainBlue};
	box-shadow: 0px 7px 0px 0px ${colors.mainBlue};
	color: ${colors.mainBlue};
	font-size: 30px;
	height: 70px;
	margin: 10px 5px;
	width: 70px;
	-webkit-text-stroke: 1px black;
	font-weight: 700;
		
	@keyframes buttonAnim {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`

const ReplicatorButton = ({ index, value, callback }) => {
  return (
  	<ReplicatorButtonStyled 
      className="replicator"
      onClick={() => callback(index)}
    >
      { value }
    </ReplicatorButtonStyled>
  )
}

ReplicatorButton.propTypes = {
	index: number.isRequired,
  value: number.isRequired,
  callback: func.isRequired,
}

ReplicatorButton.displayName = 'ReplicatorButton'

export default ReplicatorButton