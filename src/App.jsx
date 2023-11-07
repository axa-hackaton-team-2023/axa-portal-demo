import './App.css'
import "./story.js";
import AXAPage from "./story.js";
import Widget from 'remoteApp/Widget'
function App() {
  return (
    <>
        <AXAPage>
            <p slot="widget"><Widget/></p>
        </AXAPage>
    </>
  )
}

export default App
