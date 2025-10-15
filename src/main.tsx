import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Users } from "./components/UsersList/Users";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="listOfUsers">
            <h1>List of Users</h1>
            <Users />
        </div>
    </StrictMode>
);
