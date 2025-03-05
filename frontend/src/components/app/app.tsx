import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Header } from '../header/header';
import { MainCard } from '../main-card/main-card';
import { SmallCards } from '../small-cards/small-cards';
import { Forecast } from '../forecast/forecast';
import { ChartBlock } from '../chart-block/chart-block';
import { getIsDarkTheme } from '../../store/main-process/selectors';
import { toggleTheme } from '../../store/main-process/main-slice';

function App(): JSX.Element {
  // const authorizationStatus = AuthorizationStatus.Unknown;

  // if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  const dispatch = useDispatch();
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (systemDarkMode) {
    dispatch(toggleTheme());
  }

  const darkTheme = useSelector(getIsDarkTheme);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  return (
    <section className="content">
      <Header />
      <main className="main">
        <div className="container">
          <section className="overview">
            <h1 className="overview__title">Today Overview</h1>
            <div className="overview__items">
              <MainCard />
              <SmallCards />
              <Forecast />
            </div>
          </section>
          <section className="chart">
            <div className="chart__content">
              <ChartBlock
                period={3}
              />
              <ChartBlock
                period={10}
              />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default App;
