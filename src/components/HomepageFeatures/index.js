import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage'
import yunClimbing from '/static/img/yun-climbing-mexico.jpeg'
import yunGeekPark from '/static/img/yun-present-geekpark.jpeg'
import yunProgramming from '/static/img/yun-present-final-project.jpeg'
import yunClimbingSpain from '/static/img/yun-climbing-spain.jpeg'

const FeatureList = [
  {
    title: 'Tech Reporter',
    img: yunGeekPark,
    alt: 'Yun presenting at a tech event organized by Geekpark in Beijing,China cc:@Geekpark',
    description: (
      <>
        I started my carrer as a news reporter, then followed my curiosity to
        the booming tech industry in Beijing, I transitioned to be a tech
        reporter. I covered breaking news in the tech industry, including
        Tesla's expansion in China and developments in Uber; reported on
        emerging startups that later achieved global success, such as TikTok.
        This experience gave me a deep understanding of the tech industry and
        shaped me into a storyteller through writing.
      </>
    )
  },
  {
    title: 'Rock Climber',
    img: yunClimbingSpain,
    alt: 'Yun climbing in Siurana,Spain cc:@Adria',
    description: (
      <>
        Discovering rock climbing is one of the best things that heppened to me.
        I was hungry for adventures, and fell in love with this incredible
        sport. So I embraced it, and set off for a journey around the globe to
        climb and live in the dirt.
      </>
    )
  },
  {
    title: 'Programmer',
    img: yunProgramming,
    alt: 'Yun presenting her final project at MigraCode Barcelona cc:@MigraCode',
    description: (
      <>
        How I wish I had studied computer science in the university! However,
        learning how much I love coding in my 30s is not too late. There's no
        such thing as too late. When we gain something, we always loose
        something. I am grateful for the experiences I had, and I am excited for
        the new coding adventure!
      </>
    )
  }
]

function Feature({ img, title, description, alt }) {
  return (
    <div className={styles.gridCol}>
      <Image img={img} alt={title} />
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
        <h1 className={styles.header}>
          A very brief history about me as a person
        </h1>
        <div className={styles.gridRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
