import Navbar from "@/components/shared/Navbar/Navbar";
import "./../globals.css";

const layout = ({ children }) => {
  return (
    <div className="english">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default layout;
