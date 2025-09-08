import styles from "./index.module.css";
import ReactDOM from "react-dom";
import crossIcon from "../../images/icons/cross.svg";

export const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
    <div className={styles.backdrop}></div>
    <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.iconWrapper}>
            <img src={crossIcon} alt="close icon" onClick={onClose}/>
        </div>
    </div>
    </>,
    document.body
  );
};
