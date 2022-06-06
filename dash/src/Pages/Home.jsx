import "./Home.css";
import { useEffect, useState } from "react";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { Navbar } from "../Components/Navbar/Navbar";
import { Title } from "../Components/Title/Title";
import { StatusEc } from "../Components/Status/StatusEc/StatusEc";
import { Status } from "../Components/Status/StatusBasic/Status";
import { Line } from "../Components/Line/Line";
import { WidgetBlock1 } from "../Components/widgetBlock/widgetBlock1/widgetBlock1";
import { WidgetBlock2 } from "../Components/widgetBlock/widgetBlock2/widgetBlock2";
import { WidgetBlock3 } from "../Components/widgetBlock/widgetBlock3/widgetBlock3";
import { WidgetBlock4 } from "../Components/widgetBlock/widgetBlock4/widgetBlock4";
import { WidgetBlock5 } from "../Components/widgetBlock/widgetBlock5/widgetBlock5";
import { WidgetBlock6 } from "../Components/widgetBlock/widgetBlock6/widgetBlock6";
import { Hidden1 } from "../Components/Hidden/Hidden1/Hidden1";
import { PieCharts } from "../Components/PieChart/PieChart";
import { Chart } from "../Components/Chart/Chart";
import { Hidden2 } from "../Components/Hidden/Hidden2/Hidden2";
import { Footer } from "../Components/Footer/Footer";

export default function Home() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dev-api.economico.ba/api/v1/admin/fake-dashboard")
      .then((res) => res.json())
      .then((data) => setData(data.payload.fakeDashboardData));
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeEdit">
        <Navbar />
        <Title />
        <Line />
        <div className="groupCont">
          <div className="statusGroup">
            {status ? (
              <StatusEc setStatus={setStatus} status={status} />
            ) : (
              <Status setStatus={setStatus} status={status} />
            )}
          </div>
          <div className="gg">
            <div className="wigGroup">
              <WidgetBlock1 data={data} />
              <WidgetBlock2 data={data} />
              <WidgetBlock3 data={data} />
            </div>
            <div className="winGroup1">
              <WidgetBlock4 data={data} />
              <WidgetBlock5 data={data} />
              <WidgetBlock6 data={data} />
            </div>
          </div>
        </div>
        <div className="groupChart">
          <Hidden1 />
          <PieCharts />
          <Chart />
        </div>
        <Hidden2 />
        <Footer />
      </div>
    </div>
  );
}
