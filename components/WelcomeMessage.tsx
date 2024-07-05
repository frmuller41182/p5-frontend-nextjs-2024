import Link from "next/link";

const WelcomeMessage = () => {
  return (
    <section className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Welcome to WealthWave</h2>
      <p>
        Your one-stop solution for managing and growing your investments. At
        Wealthwave, we provide you with the tools and insights you need to make
        informed decisions and maximize your financial potential.
      </p>
      <p>
        Browse through our extensive stock offerings, analyze your portfolio,
        and execute buy/sell orders with ease. Whether you're a seasoned
        investor or just getting started, at WealthWave we have you covered.
      </p>
      <p> </p>
      <p>
        Below you will find a preview of our available stocks, but please take
        your time exploring our entire offering in{" "}
        <Link
          href="/stocks"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          this page.
        </Link>
      </p>
    </section>
  );
};

export default WelcomeMessage;
