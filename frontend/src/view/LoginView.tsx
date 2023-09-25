import React, { useState, ChangeEvent, MouseEvent, useContext } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import { EmptyLoginStore } from '../store/EntryLoginStore';
import { UseVM } from '../viewModel/UseVM';
import '../style/style.css';
const LoginPage = () => {
  const loginStore = useContext(EmptyLoginStore)
  const vm = UseVM()
  const [username, setUsername] = useState(loginStore.entity.name);
  const [password, setPassword] = useState(loginStore.entity.password);



  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value)

  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)

  };
  
  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
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
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
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