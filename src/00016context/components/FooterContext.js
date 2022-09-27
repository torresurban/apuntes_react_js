import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import ThemeContext from '../context/ThemeContext'

const FooterContext = () => {

  const {texts} = useContext(LanguageContext)

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext