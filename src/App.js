import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
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
        <button 
          key={index}
          onClick={() => handleRemoveReplicator(index)}
        >
          { item }
        </button>
      )
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Realms Replicators</h1>
        <p>{ replicators }</p>
        <button 
          onClick={handleAddReplicator}
          disabled={replicators.length === 0 && removeReplicators.length === 0}
        >
          { renderAddText() }
        </button>
        <p>{ renderAddedReplicators() }</p>
        <p>{ removeReplicators }</p>
      </header>
    </div>
  );
}

export default App;
