import { AdminPage } from '../styles/AllStyles';

import React, { useState, useEffect, Suspense } from "react";

const CarForm = React.lazy(() => import("../components/AdmUploadFirestore"));
const LoginForm = React.lazy(() => import("../components/AdmLogin"));

const Admin = () => {
  const [authState, setAuthState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, e.g., checking authentication state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while waiting for the initial state to be set
  }

  return (
    <AdminPage>
      <Suspense fallback={<div>Loading...</div>}>
        {authState ? <CarForm /> : <LoginForm state={setAuthState} />}
      </Suspense>
    </AdminPage>
  );
};

export default Admin;
