import React from 'react';

// Thanks to https://joshwcomeau.com/snippets/react-hooks/use-interval
// and to https://overreacted.io/making-setinterval-declarative-with-react-hooks/

function useInterval(callback, delay) {

  const intervalId = React.useRef(null)
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  })

  React.useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === "number") {
      intervalId.current = window.setInterval(tick, delay)
      return () => window.clearInterval(intervalId.current)
    }
  }, [delay])

  return intervalId.current
  
}

export default useInterval