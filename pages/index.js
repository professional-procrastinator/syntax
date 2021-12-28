import {useSession} from 'next-auth/client';

import Head from 'next/head'
import Landing from '../components/landing/Landing'
import Home from '../components/home/Home'

import styles from '../styles/Home.module.css'
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {session?<Home />:<Landing />}
    </>
  )
}
