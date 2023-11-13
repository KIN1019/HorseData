import React, { useState, ChangeEvent, MouseEvent, useContext } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';
import { UseVM } from '../viewModel/UseVM';
import '../style/style.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const DashboardStore = useContext(EmptyDashboardStore)
  const vm = UseVM()
  const [username, setUsername] = useState<string>(DashboardStore.entity.name);
  const [password, setPassword] = useState<string>(DashboardStore.entity.password);
  const [useNameError, setuseNameError] = useState(false);
  const [passwordError, setPassWordError] = useState(false);
  const navigate = useNavigate();


  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  };
  
  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
      if(username == ""){
        setuseNameError(true)
      }else{
        setuseNameError(false)
      }
      if(password == ""){
        setPassWordError(true)
      }else{
        setPassWordError(false)
      }
        if(username == "asd" && password == "asd"){
          navigate('dashboard')
        }
      
      vm.loginStatus(username, password)
  };
  return (

    <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
    maxWidth="sm"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // marginTop: 'auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
          error={useNameError}
          helperText={useNameError ? 'empty data' : ''}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
          error={passwordError}
          helperText={passwordError ? 'empty data' : ''}
        />
         <div className="loginButton" >
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
        </Box>
        </Container>
  );
};

export default LoginPage;