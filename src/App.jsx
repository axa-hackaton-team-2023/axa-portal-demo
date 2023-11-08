import './App.css'
import "./story.js";
import AXAPage from "./story.js";
import Widget from 'remoteApp/Widget';

function App() {
  return (
    <>
        <AXAPage>
            <p slot="widget">
                <div className={'page-container'}>
                    <div className={'placeholder-container'}>
                        <div className={'page-placeholder'} style={{
                            width: 320
                        }}/>
                        <div className={'page-placeholder'} style={{
                            height: 320
                        }}/>

                        <div className={'page-placeholder'} style={{
                            height: 160,
                            backgroundColor: '#FAFAFA'
                        }}/>

                        <div className={'page-placeholder'} style={{
                            width: 320
                        }}/>
                        <div className={'page-placeholder'} style={{
                            height: 160,
                            backgroundColor: '#F5F5F5'
                        }}/>

                        <div className={'page-placeholder'} style={{
                            height: 600
                        }}/>

                    </div>
                    <div className={'widgetContainer'}>
                        <Widget propositionId={4}/>
                    </div>
                </div>

            </p>
        </AXAPage>
    </>
  )
}

export default App
