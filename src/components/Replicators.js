import React from 'react'
import { node } from 'prop-types'

import styled from 'styled-components'

const ReplicatorsStyled = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 50%;
	box-sizing: border-box;
	padding: 30px 60px;
	min-height: 330px;
	transform: rotate3d(1, 0, 0, 50deg);
	width: 95%;
`

const Replicators = ({ children }) => {
  return (
  	<ReplicatorsStyled>
  		{ children }
  	</ReplicatorsStyled>
  )
}

Replicators.propTypes = {
  children: node.isRequired,
}

Replicators.displayName = 'Replicators'

export default Replicators