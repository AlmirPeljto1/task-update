import { Document } from "../Components/Document/Document.jsx";
import { Navbar1 } from "../Components/Navbar/Navbar1.jsx";
import { Sidebar } from "../Components/Sidebar/Sidebar.jsx";

export default function Doc() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeEdit">
        <Navbar1 />
        <Document />
      </div>
    </div>
  );
}
