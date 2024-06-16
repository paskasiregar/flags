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
    <div>
      {" "}
      <div>
        <h3 className="text-xl font-bold text-slate-700">
          Country: {item.country}
        </h3>
        <p className="text-lg text-slate-400">Capital: {item.capital}</p>
        <p className="text-4xl">{item.flag}</p>
        <button
          onClick={handleDeleteCountry}
          className="border-2 border-solid border-indigo-500 px-4 py-2 rounded-lg text-indigo-500 hover:border-rose-500 hover:bg-rose-100 hover:text-rose-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
