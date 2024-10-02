import React from 'react'
import styles from './styles.module.css'
import Image from '@theme/IdealImage'
import yunGeekPark from '/static/img/yun-present-geekpark.jpeg'
import yunProgramming from '/static/img/yun-present-final-project.jpeg'
import yunClimbingSpain from '/static/img/yun-climbing-spain.jpeg'
import reactagonia from '/static/img/catagonia.png'
import catgonia from '/static/img/cat.png'
import cherryTomatoes from '/static/img/dreadfulCherryTomatoes.png'

const FeatureList = [
  {
    title: 'Tech Reporter',
    img: yunGeekPark,
    alt: 'Yun presenting at a tech event organized by Geekpark in Beijing,China cc:@Geekpark',
    description: (
      <>
        <p>
          I started my carrer as a news reporter, then followed my curiosity to
          the booming tech industry in Beijing and transitioned to be a tech
          reporter.
        </p>
        <p>
          My work inclued covered breaking news in the tech industry, e.g.,
          Tesla's expansion in China and developments in Uber; Reported on
          emerging startups that later achieved global success, such as
          ByteDance(TikTok).
        </p>
        This experience gave me a deep understanding of the tech industry and
        shaped me into a storyteller through writing.
      </>
    ),
    link: '/docs/category/chinese-writing'
  },
  {
    title: 'Rock Climber',
    img: yunClimbingSpain,
    alt: 'Yun climbing in Siurana,Spain cc:@Adria',
    description: (
      <>
        Discovering rock climbing has been one of the best experiences of my
        life. Driven by a thirst for adventure, I fell in love with this
        incredible sport, which offers endless challenges and opportunities for
        personal growth.
      </>
    ),
    link: 'https://web.6parkbbs.com/index.php?app=forum&act=view&bbsid=2033&tid=1082123'
  },
  {
    title: 'Programmer',
    img: yunProgramming,
    alt: 'Yun presenting her final project at MigraCode Barcelona cc:@MigraCode',
    description: (
      <>
        I often wish I had studied computer science at university, but very few
        women from my background ever considered that possibility. I am grateful
        for the journey journalism has taken me on, and I am fully committed to
        my transition into software development. With two major training
        programs, motivated self-education, and experience in open-source work,
        I am eager to continue learning in a professional environment.
      </>
    ),
    link: 'https://github.com/actuallyyun'
  }
]

const WorkList = [
  {
    title: 'Reactagonia',
    img: reactagonia,
    alt: 'A solid React ecommerce web app built with TypeScript',
    description: <>Score 4.5/5 of overall project performance.</>,
    link: 'https://github.com/actuallyyun/reactagonia',
    linkDes: 'Source Code'
  },
  {
    title: 'Dreadful Cherry Tomatoes',
    img: cherryTomatoes,
    alt: 'A coding challenge from an innovative recuiting firm- Rviewr.',
    description: (
      <>
        Scored 4/5 in code quality, 4/5 in maintainability and 5/5 in testing.
      </>
    ),
    link: 'https://github.com/actuallyyun/Rviewer-coding-challenge-cherry-tomatoes'
  },
  {
    title: 'Catagonia',
    img: catgonia,
    alt: 'A static copy of Patagonia homepage.',
    description: <>Responsive, accessible, and maintainable.</>,
    link: 'https://github.com/actuallyyun/catagonia'
  }
]

function Feature({ img, title, description, alt, link, linkDes }) {
  return (
    <div className={styles.gridCol}>
      <a href={link} target='blank'>
        <Image img={img} alt={title} />
      </a>
      <p className={styles.textSmall}>{alt}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{description}</p>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h1 className={styles.header}>My Journey to Software Development</h1>
        <div className={styles.gridRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1 className={styles.header}>Work I am proud of</h1>
        <div className={styles.gridRow}>
          {WorkList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1 className={styles.header}>Interested?</h1>

        <div className={styles.gridRow}>
          <p>
            Let's connect!{' '}
            <a href='https://www.linkedin.com/in/yun-ji/' target='_blank'>
              LinkedIn
            </a>
          </p>
          <p>
            Email me!{' '}
            <a href='mailto:this.jiyun@gmail.com' target='_blank'>
              Send email
            </a>
          </p>
          <p>
            Check my CV{' '}
            <a
              href='https://drive.google.com/file/d/121IA7eBUVGycnlVfBLVi2h72BeOsXF3L/view?usp=sharing'
              target='_blank'
            >
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
