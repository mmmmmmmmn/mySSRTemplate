import React from 'react'

const App: React.FC = () => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <div>count: {count}</div>
            <button onClick={() => setCount(count => count + 1)}>increment</button>
        </>
    )
}

export default App
