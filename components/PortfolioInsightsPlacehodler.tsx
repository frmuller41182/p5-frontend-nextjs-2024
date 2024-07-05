export default function PortfolioInsightsPlaceholder() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-full animate-pulse">
      <h2 className="text-xl font-bold mb-4">Portfolio Insights</h2>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <p className="h-4 bg-gray-200 rounded w-1/2 mb-2"></p>
          <p className="h-4 bg-gray-200 rounded w-1/3"></p>
        </div>
        <div className="w-full h-64 bg-gray-200 rounded"></div>
      </div>
      <h3 className="text-lg font-bold mb-4">Stocks</h3>
      <ul className="space-y-2">
        {/*We are creating an array with 5 objects so we can add 5 placeholder <p> that simulate the stocks
        to be loaded from the user's portfolio. */}
        {[...Array(5)].map((_, index) => (
          <li key={index} className="mb-2 p-2 border rounded-lg">
            <p className="h-4 bg-gray-200 rounded w-full"></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
