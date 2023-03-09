import { MotionConfig, useReducedMotion } from 'framer-motion'
import Header from './components/Header/Header'
import './App.css'

const App = () => {
    const prefersReducedMotion = useReducedMotion()

    return (
        <MotionConfig reducedMotion={prefersReducedMotion ? 'user' : 'never'}>
            <div className='App'>
                <Header />
            </div>
        </MotionConfig>
    )
}

export default App
