import {useSession} from 'next-auth/client';

import Head from 'next/head'
import Landing from '../components/landing/Landing'
import Home from '../components/home/Home'

import styles from '../styles/Home.module.css'

export default function Index() {
  const [session,loading] = useSession();

  if(loading){
    return(
      <div className={styles.loaderContainer}>
        <div className="loader" />
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Tunes</title>
        <link rel="icon" href="../favicon.ico"></link>
      </Head>

      {session?<Home />:<Landing />}
    </>
  )
}
