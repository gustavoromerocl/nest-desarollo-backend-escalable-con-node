import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Web socket client</h1>
<span>offline</span>
</div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();

