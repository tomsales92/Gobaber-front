import React from 'react';
import GobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GobalStyle />
    </>
  );
};

export default App;
