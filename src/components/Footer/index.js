import React from 'react'
import styles from './styles.module.css'
import HeartIcon from '/static/img/heart-icon.svg'

const footerList = []

const FooterElement = ({ category, items }) => {
  return (
    <div>
      <p className={styles.title}>{category}</p>
      <div>
        {items.map((item, index) => (
          <ul key={index} className={styles.list}>
            <li className={styles.list}>
              <a href={item.link} className={styles.text} target='_blank'>
                {item.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className='footer'>
      <div className={('container', styles.footer)}>
        <div className={styles.gridRow}>
          {footerList.map((props, index) => (
            <FooterElement key={index} {...props} />
          ))}
        </div>
        <div className={styles.center}>
          <p className={styles.text}>
            {' '}
            Copyright © 2023 Yun Ji. Made with <HeartIcon />
          </p>
        </div>
      </div>
    </footer>
  )
}
