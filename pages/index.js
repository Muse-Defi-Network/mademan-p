import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muse Defi Network | Open Music Collective</title>
        <meta name="description" content=" An Open Music Label project that combines the idea of Music Marketing and Defi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <div>
            <nav>
              
            </nav>
            <div>
              
            </div>
          </div>
        </header>
        <section className={styles.hero}>
          <div>
              <h1></h1>
          </div>
          <div>
              <h1 className={styles.title}>
          MUSE DEFI <span>NETWORK</span>
          </h1>
          </div>
        
        </section>


        <div className={styles.grid}>
          <a href="https://opencollective.com/muse-defi-network" className={styles.card}>
            <h2>Open Collective &rarr;</h2>
            <p>Become a Contributor and join a thriving community of creators. </p>
          </a>

          <a href="https://chat.whatsapp.com/E4onwdYTQMs5RLhAIzhmL5" className={styles.card}>
            <h2>WhatsApp &rarr;</h2>
            <p>Connect & vibe with like minded members and get support.</p>
          </a>

          <a
            href="https://github.com/Muse-Defi-Network/landing-page"
            className={styles.card}
          >
            <h2>GitHub &rarr;</h2>
            <p>Clone the repo for this page and deploy in you local environment.</p>
          </a>

          <a
            href="https://www.ahzudirecttech.com/"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Reach out to us concerning inquires or feature requests.
            </p>
          </a>
        </div>
        
        <div className={styles.grid}>
          <a href="https://opencollective.com/muse-defi-network" className={styles.card}>
            <h2>Open Collective &rarr;</h2>
            <p>Become a Contributor and join a thriving community of creators. </p>
          </a>

          <a href="https://chat.whatsapp.com/E4onwdYTQMs5RLhAIzhmL5" className={styles.card}>
            <h2>WhatsApp &rarr;</h2>
            <p>Connect & vibe with like minded members and get support.</p>
          </a>

          <a
            href="https://github.com/Muse-Defi-Network/landing-page"
            className={styles.card}
          >
            <h2>GitHub &rarr;</h2>
            <p>Clone the repo for this page and deploy in you local environment.</p>
          </a>

          <a
            href="https://www.ahzudirecttech.com/"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Reach out to us concerning inquires or feature requests.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://opencollective.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2022 Muse Defi Network | Protected by <span className={styles.ftitle}> Open Collective
          </span>
        </a>
      </footer>
    </div>
  )
}
