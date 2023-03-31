import { useRef } from 'react'
import { motion } from 'framer-motion'

import stretchedDev from './../../assets/stretched-dev.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 1, scale: 1, transformOrigin: 'top' }}
        animate={{ opacity: 0, scale: 0, transformOrigin: 'top', y: -100 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <h1>
          <span className={styles['top-line']}>
            <motion.span
              key='design'
              initial={{ opacity: 0, rotate: '-45deg', originX: 'left' }}
              animate={{ opacity: 1, rotate: '0deg' }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.65 }}
              className={styles.design}
            >
              <span>Design</span>
            </motion.span>

            <span className={styles['resources-container']}>
              <motion.span
                key='resources'
                initial={{ opacity: 0, y: -600 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.65 }}
                className={styles.resources}
                data-text='Resources'
              >
                Resources
              </motion.span>
            </span>

            <motion.span
              key='for'
              initial={{ opacity: 0, rotate: '520deg' }}
              animate={{ opacity: 1, rotate: '0deg' }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.65, duration: 1 }}
              className={styles.for}
            >
              for
            </motion.span>
          </span>

          <motion.img
            key='developers'
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.85 }}
            src={stretchedDev}
            alt='developers'
          />
        </h1>
        <motion.p
          key='description'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.45, duration: 0.5 }}
        >
          Curated list of design and UI resources from stock photos, web
          templates, CSS frameworks, UI libraries, tools and much more
        </motion.p>
      </motion.header>
    </div>
  )
}

export default Header
