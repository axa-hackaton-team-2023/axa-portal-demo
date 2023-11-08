import './App.css'
import "./story.js";
import AXAPage from "./story.js";
import Widget from 'remoteApp/Widget'
function App() {
  return (
    <>
        <AXAPage>
            <p slot="widget"><Widget propositionId={4} /></p>
        </AXAPage>
    </>
  )
}

export default App
