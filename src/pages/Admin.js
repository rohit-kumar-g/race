// import { AdminPage } from '../styles/AllStyles';
// import React, { useState, useEffect, Suspense } from "react";
// const AdmAddItem = React.lazy(() => import("../components/AdmUploadFirestore"));
// const AdmFormLogin = React.lazy(() => import("../components/AdmLogin"));
// const Admin = () => {
//   const [authState, setAuthState] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     // Simulate an asynchronous operation, e.g., checking authentication state
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);
//   if (isLoading) {
//     return <div>Loading...</div>; // Display a loading indicator while waiting for the initial state to be set
//   }
//   return (
//     <AdminPage>
//       <Suspense fallback={<div>Loading...</div>}>
//         {authState ? <AdmAddItem /> : <AdmFormLogin state={setAuthState} />}
//       </Suspense>
//     </AdminPage>
//   );
// };
// export default Admin;
import CarDataList from "../components/AdmDelete";
import CarDataList22 from "../components/AdmUpItem";
import { AdminPage, Sidebar, SidebarTab } from "../styles/AllStyles";
import React, { useState, useEffect, Suspense } from "react";
const AdmAddItem = React.lazy(() => import("../components/AdmAddItem"));
const AdmFormLogin = React.lazy(() => import("../components/AdmLogin"));
const Admin = () => {
  const [authState, setAuthState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("login");
  useEffect(() => {
    // Simulate an asynchronous operation, e.g., checking authentication state
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while waiting for the initial state to be set
  }
  const handleLogin = () => {
    setAuthState(true);
  };
  if (!authState) {
    return <AdmFormLogin state={handleLogin} />;
  }
  const renderTabContent = () => {
    switch (activeTab) {
      case "add":
        return (
          <div>
            {" "}
            <AdmAddItem />{" "}
          </div>
        );
      case "delete":
        return (
          <div>
            {" "}
            <CarDataList />{" "}
          </div>
        );
      case "update":
        return (
          <div>
            {" "}
            <CarDataList22 />
          </div>
        );
      case "logout":
        return <div>I am Logout</div>;
      default:
        return null;
    }
  };
  return (
    <AdminPage>
      <Sidebar>
        <SidebarTab
          active={activeTab === "add" ? "true" : undefined}
          onClick={() => setActiveTab("add")}
        >
          Add
        </SidebarTab>
        <SidebarTab
          active={activeTab === "delete" ? "true" : undefined}
          onClick={() => setActiveTab("delete")}
        >
          delete
        </SidebarTab>
        <SidebarTab
          active={activeTab === "update" ? "true" : undefined}
          onClick={() => setActiveTab("update")}
        >
          update
        </SidebarTab>
        <SidebarTab
          active={activeTab === "logout" ? "true" : undefined}
          onClick={() => setActiveTab("logout")}
        >
          logout
        </SidebarTab>
      </Sidebar>
      <Suspense fallback={<div>Loading...</div>}>{renderTabContent()}</Suspense>
    </AdminPage>
  );
};
export default Admin;
