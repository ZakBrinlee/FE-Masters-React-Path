import {useState, useEffect} from 'react'

type Action = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET' | 'UPDATE_DRAFT_FROM_COUNT'
}

type ActionWithPayload = {
  type: 'UPDATE_DRAFT_COUNT',
  payload: number
}

type InitialState = {
  count: number,
  draftCount: number
}

const Counter = () => {
  const [count, setCount] = useState(0)
  const [draftCount, setDraftCount] = useState(count)

  useEffect(() => {
    setDraftCount(count)
  }, [count])


  const initialState: InitialState = {
    count: 0,
    draftCount: 0
  }

  const reducer = (state = initialState, action: Action | ActionWithPayload) => {
    const {count, draftCount} = state
    
    if(action.type === 'INCREMENT') {
      const newCount = count + 1;
      return { count: newCount, draftCount: newCount }
    }

    if(action.type === 'DECREMENT') {
      const newCount = count - 1;
      return { count: newCount, draftCount: newCount }
    }

    if(action.type === 'RESET') {
      return initialState
    }

    if(action.type === 'UPDATE_DRAFT_FROM_COUNT') {
      return { count: Number(draftCount), draftCount }
    }

    if(action.type === 'UPDATE_DRAFT_COUNT') {
      return { count, draftCount: action.payload }
    }

    return state;
  }
  
  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count => count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
        <button onClick={() => setCount(count => count + 1)}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setCount(draftCount)
        }}>
          <input 
            type="number" 
            value={draftCount} 
            onChange={(e) => setDraftCount(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
