import ReactDOM from 'react-dom/client';

const App = () => <div>Weather</div>;

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
