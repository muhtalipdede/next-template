import Head from 'next/head'
import styles from '@/styles/Dashboard.module.css'

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Next Template Project</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Dashboard</h1>
            </main>
        </>
    )
}