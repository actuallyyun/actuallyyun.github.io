import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Footer from '../components/Footer'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={('container', styles.introWrapper)}>
        <div className={styles.intro}>
          <h1 className={styles.h1}>{siteConfig.title}</h1>
          <p className={styles.text}>
            Passionate software developer and rock climber with a love for
            writing and sharing. A growth-minded learning addict. Always seeking
            challenges to expand my horizon.
          </p>
          <div>
            <Link className={styles.button} to='/docs/intro'>
              Let's Learn Together
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Explore a wealth of coding tips, 
      job search strategies, and tech interview tips that I learned along the way.
      Stay ahead in your software engineering career with expert insights, best practices, and practical resources on programming languages, frameworks, resume building, networking, and acing technical interviews. '
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Footer />
      </main>
    </Layout>
  )
}
