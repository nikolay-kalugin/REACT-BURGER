import styles from './feed.module.css';

export function FeedPage() {
	return (

		<section className={styles.FeedIngredients}>

			<h1 className={styles.MainTitle}>Лента заказов</h1>

			<section className={styles.MainSection}>
				<article className={styles.LeftSide}>
					
					<ul>
						<li>

						</li>
					</ul>

				</article>

				<article className={styles.RightSide}>

					<div className={styles.OrdersNumbers}>

						<h6>Готовы</h6>
						<ul>
							<li></li>
						</ul>
						
					</div>
					
					
				</article>

			</section>



		</section>
	)
}