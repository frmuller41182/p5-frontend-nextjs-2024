const PortfolioWelcomeMessage = () => {
  return (
    <section className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Your Portfolio Overview</h2>
      <p>
        Welcome to your personal investment dashboard. Here you can find
        detailed information about your current stock holdings, track your
        portfolio performance, and manage your investments effectively.
      </p>
      <p>
        {" "}
        Use the interactive graph to visualize the composition of your portfolio
        and gain insights into your investment strategy. The Buy/Sell form
        allows you to quickly execute trades and adjust your portfolio as
        needed.
      </p>
      <p>
        {" "}
        Browse through the stock offerings to discover new investment
        opportunities and keep your portfolio diversified.
      </p>
    </section>
  );
};

export default PortfolioWelcomeMessage;
