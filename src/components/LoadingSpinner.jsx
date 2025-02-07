const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
