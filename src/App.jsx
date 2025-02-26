import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./app/dashboard/Dashboard";
import User from "./app/dashboard/User";
import Merchant from "./app/dashboard/Merchant";
import Community from "./app/dashboard/Community";
import FileViewer from "./app/dashboard/FileViewer"; // Import FileViewer.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/community" element={<Community />} />
        <Route path="/file-viewer" element={<FileViewer />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
