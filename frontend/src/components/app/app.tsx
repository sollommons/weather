import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { Header } from '../header/header';
import { MainCard } from '../main-card/main-card';
import { SmallCards } from '../small-cards/small-cards';
import { Forecast } from '../forecast/forecast';
import { ChartBlock } from '../chart-block/chart-block';

function App(): JSX.Element {
  // const authorizationStatus = AuthorizationStatus.Unknown;

  // if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

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
              <ChartBlock />
              <ChartBlock />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default App;
