import { GithubLogo } from '@phosphor-icons/react'
import './App.css'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

function App() {


  return (
    <div>
      <img src="anusha.jpg" width="400px" height="100%" />
      <h1>Anusha Muthekepalli</h1>
      <a className='github' target="_blank" href="https://github.com/anush18"><GithubLogo size={32} weight="bold" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/anusha-muthekepalli"><LinkedinLogo size={32} weight="bold" /></a>
    </div>
  )
}

export default App
