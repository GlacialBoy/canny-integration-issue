import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // The first initialization is always working, so I'll call it here even if it is not applied to any button
    Canny('initChangelog', {
      appID: '5ff439e258761e6123b61e7f',
      position: 'bottom',
      align: 'left',
      theme: 'light', // options: light [default], dark, auto
   });
  },[])


  return (
    <div className="App">
      <div>
      </div>
      <h1>Multiple Button with Canny integration</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add Button
        </button>
        { Array.from(Array(count)).map((_,i)=> <ButtonWithCanny></ButtonWithCanny>) }
      </div>
      <p className="read-the-docs">
        Click on "Add Button" to get a Button with Canny Integration
      </p>
    </div>
  )
}


const ButtonWithCanny = () => {

  // Following https://developers.canny.io/install/changelog :
  // `If your button element might be rendered after page load, then you'll want to call our SDK every time the button is created.`
  
  useEffect(() => {
    Canny('initChangelog', {
      appID: '5ff439e258761e6123b61e7f',
      position: 'bottom',
      align: 'left',
      theme: 'light', // options: light [default], dark, auto
   });
  },[])

  return <button data-canny-changelog>Show ChangeLog</button>
}

export default App
