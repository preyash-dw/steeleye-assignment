import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import ButtonStories from "../stories/Button.stories";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const select = (e) => {
    setSelectedOrderDetails({
      "buySellIndicator": e.buySellIndicator,
      "orderStatus": e.orderStatus,
      "orderType": e.orderType,
    });
  };
  const timeselect = (e) => {
    setSelectedOrderTimeStamps({
      "orderReceived": e.orderReceived,
        "orderStatusUpdated": e.orderStatusUpdated,
        "orderSubmitted": e.orderSubmitted
    });
  };
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${mockData.results.length} orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            key="selectedOrderDetails"
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            key="selectedOrderTimeStamps"
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={mockData.results}
          time={timestamps.results}
          currency={currency}
          search={searchText}
          select={select}
          timeselect={timeselect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
