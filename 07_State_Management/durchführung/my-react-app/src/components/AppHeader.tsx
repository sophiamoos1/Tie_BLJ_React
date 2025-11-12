import '../App.css';
import darkBannerImage from '../images/panorama-dark.png';
import lightBannerImage from '../images/panorama-light.png';
import { useTheme } from '../context/ThemeContext';

export default function AppHeader() {
    const { theme, toggleTheme } = useTheme();
    const bannerImage = theme === "dark" ? darkBannerImage : lightBannerImage;
    return (
        <div className="fiexedHeader">
    <div className="header">
      <h1 className="headerTitle">My Personal Blog</h1>
      <h2 className="headerSubtitle">Here I share my thoughts and conclusions during the day</h2>
      <button type="button" className="theme-switcher-fab" onClick={toggleTheme}>{theme}</button>
      </div>
      <div className="headerBanner">
        <img src={bannerImage}/>
        </div>
      </div>
    )
}