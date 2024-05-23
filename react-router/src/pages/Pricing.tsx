// Uses the same styles as Product
import { PageNav } from "../components";
import styles from "./Product.module.css";

export function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple <em>pricing</em>.
            <br />
            Just $9/month.
          </h2>
          <p>
            The <em>pricing</em> is the pricing.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
