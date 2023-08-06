import styles from "./ListRow.module.css";

const ListCell = ({ children,handleClick,timeClick}) => {
  const handleCellClick = () => {
    handleClick();
    timeClick();   
  };
  return <tr className={styles.cell} onClick={handleCellClick}>{children}</tr>;
};

export default ListCell;
