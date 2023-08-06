import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({ rows, time, currency, search, select, timeselect }) => {
  const findId = (id) => {
    return time.find((timestamp) => timestamp["&id"] === id);
    // return timestampData ? timestampData.timestamps.orderSubmitted : "N/A";
  };

  const filterRows = (rows) => {
    if (!search) return rows;
    return rows.filter((row) =>
      row["&id"].toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filterRows(rows).map((row, index) => (
          <ListRow key={`${row["&id"]}-${index}`}  handleClick={() => select(row.executionDetails, index)} timeClick={()=>timeselect(findId(row["&id"]).timestamps)}>
            <ListRowCell>
              {row["&id"]}
            </ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {findId(row["&id"]).timestamps.orderSubmitted}
            </ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[currency]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
