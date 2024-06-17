"use client";
import { useRouter } from "next/navigation";

export const CountryCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteCountry() {
    const url = "https://v1.appbackend.io/v1/rows/fDEV7iyXh64i";

    fetch("https://v1.appbackend.io/v1/rows/fDEV7iyXh64i", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div className="w-full max-w-sm mx-auto p-8 border-2 border-dashed border-indigo-100 rounded-lg shadow-md bg-white space-y-4 md:space-y-2">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-700">
            Country: {item.country}
          </h3>
          <p className="text-lg text-slate-400">Capital: {item.capital}</p>
        </div>
        <div className="text-4xl md:ml-4">{item.flag}</div>
      </div>
      <button
        onClick={handleDeleteCountry}
        className="w-full border-2 border-solid border-indigo-100 px-4 py-2 rounded-lg text-indigo-500 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-500 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};
