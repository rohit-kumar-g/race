import React ,{useState} from 'react'
import CarForm from '../components/UploadFirestore';
import { AdminPage } from '../styles/AllStyles';
import LoginForm from '../components/LoginForm';

const Admin = () => {
  
  const [authState, setAuthState] = useState(false);
  return (
    <AdminPage>
      {authState ?<CarForm/>  :<LoginForm state={setAuthState}/>}
      
    </AdminPage>
  )
}

export default Admin;