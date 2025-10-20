import styles from './index.module.css';

export const Text = () => {
  return (
    <>
      <h2 className={styles.header}>Congratulations</h2>
      <p className={styles.text}>
        Your order has been successfully placed on the website. A manager will
        contact you shortly to confirm your order.
      </p>
    </>
  );
};
