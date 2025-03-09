export function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-text">loading</span>
      <span className="loading-dots">...</span>
    </div>
  );
}