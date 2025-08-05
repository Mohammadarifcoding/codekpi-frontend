import "./../globals.css";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
  return (
    <div className="english">
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
