import React from 'react'
import { node } from 'prop-types'

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const ReplicatorsStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    box-sizing: border-box;
    padding: 30px 60px;
    max-width: 650px;
    min-height: 330px;
    transform: rotate3d(1, 0, 0, 50deg);
    width: 95%;

    ${breakpoint('tablet')`
      padding-top: 70px;
    `}
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