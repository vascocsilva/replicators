import React, { useState } from 'react'

import styled from 'styled-components'

import Replicators from './components/Replicators'
import ReplicatorButton from './components/ReplicatorButton'
import { Button } from './components/buttons'
import Authority from './components/Authority'
import './App.css'

const ButtonWrapper = styled.div`
  position: fixed;
  top: 10px;
  width: 100%;
`
const App = () => {
  const [replicators, setReplicators] = useState([5, 5, 5, 6, 6, 7, 7, 8, 8, 8])
  const [addedReplicators, setAddedReplicators] = useState([])
  const [removedReplicators, setRemovedReplicators] = useState([])

  const handleAddReplicator = () => {
    if (replicators.length > 0) {
      const index = Math.floor(Math.random() * replicators.length)

      addedReplicators.push(replicators[index])
      setAddedReplicators([...addedReplicators])
      replicators.splice(index, 1)
      setReplicators(replicators)
    } else {
      setReplicators([...replicators, ...removedReplicators])
      setRemovedReplicators([])
    }
  }

  const handleRemoveReplicator = (index) => {
    setRemovedReplicators([...removedReplicators, addedReplicators[index]])
    addedReplicators.splice(index, 1)
    setAddedReplicators(addedReplicators)    
  }

  const renderAddText = () => {
    return replicators.length === 0 && removedReplicators.length > 0
      ? 'Restock Pool'
      : 'Add Replicator'
  }

  const renderAddedReplicators = () => {
    return addedReplicators.map((item, index) => {
      return (
        <ReplicatorButton
          key={index}
          value={item} 
          index={index} 
          callback={handleRemoveReplicator} 
        />
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <ButtonWrapper>
          <Button
            onClick={handleAddReplicator}
            disabled={replicators.length === 0 && removedReplicators.length === 0}
          >
            { renderAddText() }
          </Button>
        </ButtonWrapper>
        <Replicators>
          { renderAddedReplicators() }
        </Replicators>
        
        <Authority />
      </header>
    </div>
  );
}

export default App;
