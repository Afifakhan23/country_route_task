
import Link from "next/link";

interface ICountry {
  name: string;
  population: number;
  capital: string;
}

// Country data stored as an array of objects
const countries: ICountry[] = [
  { name: "Pakistan", population: 231000000, capital: "Islamabad" },
  { name: "Canada", population: 38000000, capital: "Ottawa" },
  { name: "Malaysia", population: 33000000, capital: "Kuala Lumpur" },
  { name: "Spain", population: 48000000, capital: "Madrid" },
  { name: "SaudiArabia", population: 34193875, capital: "Riyadh" },
];

// Page Component for Dynamic Route
export default async function Page({ params }: { params: Promise<{ countryName: string }> }) {
  const { countryName } = await params; // Wait for the Promise to resolve

  // Find the matching country
  const countryDetail = countries.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  // If the country is invalid, show an alert and redirect
  if (!countryDetail) {
    return (
      <script>
        {`
          alert("The country '${countryName}' does not exist.");
          window.location.href = "/";
        `}
      </script>
    );
  }
  // If the country is valid, show the details
  return (
    <div className="h-screen flex justify-center items-center font-bold text-2xl md:text-4xl bg-[#A3CB38] flex-col">
      <h2 className="py-5 md:pb-12 text-2xl md:text-6xl text-orange-700">COUNTRY DETAIL</h2>
      <h2>
        <span className="text-[#B33771]">Country: </span>
        {countryDetail.name}
      </h2>
      <h2 className="my-5">
        <span className="text-[#B33771]">Capital: </span>
        {countryDetail.capital}
      </h2>
      <h2>
        <span className="text-[#B33771]">Population: </span>
        {countryDetail.population.toLocaleString()}
      </h2>
      <Link href="/">
        <button className="text-white bg-[#009432] text-2xl py-3 px-5 mt-5 rounded-full shadow-lg shadow-green-400">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
