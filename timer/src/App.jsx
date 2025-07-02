import { useEffect, useRef, useState } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return

    timeoutRef.current = setTimeout(() => {
      setTime(prev => prev + 1)
    }, 1000)

    return () => clearTimeout(timeoutRef.current)
  }, [time, isRunning])

  const stopTimer = () => {
    clearTimeout(timeoutRef.current)
    setIsRunning(false)
  }

  const restartTimer = () => {
    clearTimeout(timeoutRef.current)
    setTime(0)
    setIsRunning(true)
  }

  const startTimer = () => {
    if (isRunning) return
    clearTimeout(timeoutRef.current)
    setIsRunning(true)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <span style={{ fontSize: '48px' }}>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</span>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button style={{ backgroundColor: 'green', color: 'white' }} onClick={startTimer}>Start</button>
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={stopTimer}>Stop</button>
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={restartTimer}>Restart</button>
        </div>
    </div>
  )
}

export default App
