import { useDispatch } from 'react-redux';

import { toggleTheme } from '../../store/main-process/main-slice';


export function Header(): JSX.Element {

  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__weather-label">
          <img src="./img/cloud.svg" alt="cloud" className="header__cloud" />
          <p className="header__label-desc">weather</p>
        </div>
        <img src="./img/loupe.svg" alt="loupe" className="header__loupe" />
        <input type="search" name="search-city" placeholder="Enter city name" id="1" className="header__city-search" />
        <button
          className="header__btn"
          onClick={() => dispatch(toggleTheme())}
        >
          <img src="./img/full-moon.svg" alt="to dark mode" className="header__btn-img" />
        </button>
        <button className="header__support-btn">
          <img src="./img/github.svg" alt="github" className="header__github" />
          <p className="header__support-desc">Support Project</p>
        </button>
      </div>
    </header>
  );
}
