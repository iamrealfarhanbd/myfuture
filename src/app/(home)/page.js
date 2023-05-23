import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>Farhan's Future Home</p>
			</div>
		</main>
	);
}
