import { FC } from "react"
import Nav from "../components/nav";

interface DashBoardProps {
}
 
const DashBoard: FC<DashBoardProps> = ({}) => {
    return(
        <div className="bg-blue-900 min-h-screen">
            <Nav/>
        <div> DashBoard</div>
      </div>
      ) 
}
 
export default DashBoard;
