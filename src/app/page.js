import Image from "next/image";
import { AddCountry } from "@/components/addCountry";
import { CountryCard } from "@/components/countryCard";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fDEV7iyXh64i", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className="max-w-6xl m-auto py-2 space-y-8">
      <h1 className="text-4xl font-bold w-full bg-indigo-50 p-8">
        All the countries across the world 🌍
      </h1>
      <div className="grid grid-cols-3 p-4 justify-between items-center">
        {data.map((item) => {
          return <CountryCard key={item._id} item={item} />;
        })}
      </div>
      <div className="p-2 font-bold text-xl">Add more here 👇 </div>
      <AddCountry />
    </main>
  );
}
