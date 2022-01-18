import Navbar from '../components/Navbar';
import Styles from '../styles/about.module.css';
const about = () => {
  return (
    <>
      <Navbar />
      <h2 className={Styles.txt}>this is about page</h2>
    </>
  );
};

export default about;
