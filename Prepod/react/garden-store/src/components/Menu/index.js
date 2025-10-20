import styles from "./index.module.css";
import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import burgerMenuIcon from "../../images/burger-menu-icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../contexts/products";

export const Menu = () => {
  const {a} = useContext(productsContext);


  return (
    <nav className={styles.navigationWrapper}>
      <div>{a}</div>
      <div className={styles.logo}>
        <Link to='/'>
           <img src={logo} alt="main logo" />
        </Link>
      </div>

      <ul className={styles.navItemsWrapper}>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Main page</NavLink>
        </li>
        <li>
          <NavLink to='/categories' className={({isActive}) => isActive ? styles.active : ''}>
            Categories
          </NavLink>
        </li>
        <li>All products</li>
        <li>All sales</li>
      </ul>

      <div className={styles.cart}>
        <img src={cart} alt="cart icon" />
      </div>
      <div className={styles.burgerMenu}>
        <img src={burgerMenuIcon} alt="burger menu" />
      </div>
    </nav>
  );
};
