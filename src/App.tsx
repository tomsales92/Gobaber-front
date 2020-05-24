import React from 'react';
import GobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import AuthContext from './context/authContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Tom' }}>
        <SignIn />
      </AuthContext.Provider>
      <GobalStyle />
    </>
  );
};

export default App;
