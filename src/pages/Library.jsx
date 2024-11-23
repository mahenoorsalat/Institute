import React from 'react';
import Main from '../components/Library/MainContent';
import Popular from '../components/Library/Popular';
import New from '../components/Library/NewCollection';
import StaffPicks from '../components/Library/Staff';


const Library = () => {
  return (
    <>
      <Main />
      <Popular />
      <New />
      <StaffPicks/>
    </>
  );
};

export default Library;
