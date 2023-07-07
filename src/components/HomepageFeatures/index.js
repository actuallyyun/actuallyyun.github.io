import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage'
import yunClimbing from '/static/img/yun-climbing-mexico.jpeg'
import yunGeekPark from '/static/img/yun-present-geekpark.jpeg'
import yunProgramming from '/static/img/yun-present-final-project.jpeg'

const FeatureList = [
  {
    title: 'Tech Reporter',
    img: yunGeekPark,
    description: (
      <>
        I started my carrer as a new reporter, then followed my curiosity to the
        booming tech industry in Beijing, I transitioned to be a tech reporter.{' '}
      </>
    )
  },
  {
    title: 'Rock Climber',
    img: yunClimbing,
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
    description: (
      <>
        How I wish I had studied computer science in college.However, learning
        how much I love coding in my 30s is not too late. There's no such thing
        as too late. When we gain something, we always loose something. I am
        glad I found my passion in coding.
      </>
    )
  }
]

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Image img={img} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
