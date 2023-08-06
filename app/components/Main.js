import classes from './Main.module.css';

import SideBar from './left side/SideBar';
import RightSide from './right side/RightSide';

const Main = () => {
  return (
    <main className={classes.main}>
      <SideBar />
      <RightSide />
    </main>
  );
};

export default Main;
