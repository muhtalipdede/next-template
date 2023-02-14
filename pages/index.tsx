import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/router';

export default function Home() {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleContinue = () => {
    router.push('/dashboard');
  }

  return (
    <>
      <Head>
        <title>Next Template Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input className={styles.input} type="text" value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input className={styles.input} type="text" value={user?.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <button className={styles.button} onClick={() => handleContinue()}>Continue</button>
      </main>
    </>
  )
}
