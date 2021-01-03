import React from 'react'

const Index: React.FC = () => {
    const [count, setCount] = React.useState(0)

    return (
        <>
            <h1>here is top page.</h1>
            <div>count: {count}</div>
            <button onClick={() => setCount(count => count + 1)}>increment</button>
        </>
    )
}

export default Index
