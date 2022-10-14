import { Route, Routes } from "react-router-dom";
import Feedback from "./dashbordscreens/feedback";
import Message from "./dashbordscreens/message";
import Notification from "./dashbordscreens/notifications";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>     
      
      <Routes>
        <Route path='message' element={<Message/>} />
        <Route path="feedback" element={<Feedback/>} />
        <Route path="notification" element={<Notification/>} />
      </Routes>

    </>
  );
}
export default Dashboard;


