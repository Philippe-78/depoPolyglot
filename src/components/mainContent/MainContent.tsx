import Menu from "../menu/Menu";
import  WorkingArea  from "../workingArea/WorkingArea";
import "./MainContent.css";
import "./../menu/menu.css";
import "./../workingArea/workingArea.css";

const MainContent = () => {
  return (
    <div className="maincontent">
        <Menu />
        <WorkingArea />
    </div>
  );
};

export default MainContent;
