import React, { useState } from 'react'

import Replicators from './components/Replicators'
import ReplicatorButton from './components/ReplicatorButton'
import Button from './components/Button'
import './App.css'

const App = () => {
  const [replicators, setReplicators] = useState([5, 5, 5, 6, 6, 7, 7, 8, 8, 8])
  const [addedReplicators, setAddedReplicators] = useState([])
  const [removeReplicators, setRemovedReplicators] = useState([])

  const handleAddReplicator = () => {
    if (replicators.length > 0) {
      const index = Math.floor(Math.random() * replicators.length)

      addedReplicators.push(replicators[index])
      setAddedReplicators([...addedReplicators])
      replicators.splice(index, 1)
      setReplicators(replicators)
    } else {
      setReplicators([...replicators, ...removeReplicators])
      setRemovedReplicators([])
    }
  }

  const handleRemoveReplicator = (index) => {
    setRemovedReplicators([...removeReplicators, addedReplicators[index]])
    addedReplicators.splice(index, 1)
    setAddedReplicators(addedReplicators)    
  }

  const renderAddText = () => {
    return replicators.length === 0 && removeReplicators.length > 0
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
        <Button
          callback={handleAddReplicator}
          disabled={replicators.length === 0 && removeReplicators.length === 0}
        >
          { renderAddText() }
        </Button>
        <Replicators>
          { renderAddedReplicators() }
        </Replicators>
      </header>
    </div>
  );
}

export default App;
