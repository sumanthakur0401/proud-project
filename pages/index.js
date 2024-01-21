import Head from 'next/head'
import styles from '@/styles/index.module.css'


export default function Home() {
  return (
    <>
    <Head>
        <title>Proud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"></link>
      </Head>
      <>
        <div className={styles.description}>
          <a href="/Volunteer/home">Let's get started.</a>
        </div>
      </>
    </>
  )
}
