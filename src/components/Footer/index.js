import React from 'react'
import styles from './styles.module.css'
import HeartIcon from '/static/img/heart-icon.svg'

const footerList = [
  {
    category: 'Yun Ji',
    items: [
      { name: 'About', link: '/' },
      { name: 'Contact', link: '/' },
      { name: 'Blog', link: '/blog' }
    ]
  },
  {
    category: 'Writing',
    items: [
      { name: 'Coding', link: '/docs/intro' },
      { name: 'Tech Interviews', link: '/docs/category/tech-interview' },
      { name: 'Job Search', link: '/docs/category/job-search' }
    ]
  },
  {
    category: 'Social',
    items: [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yun-ji/' },
      { name: 'Instagram', link: 'https://www.instagram.com/actuallyyun/' },
      {
        name: '小红书',
        link: 'https://www.xiaohongshu.com/user/profile/62dd28ee000000001e01d804'
      }
    ]
  }
]

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
