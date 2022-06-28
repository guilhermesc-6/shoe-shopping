import { shoes } from "../data/data";

import { Card } from "../components/Card";

export const Products = () => {
  return (
    <div className="min-h-screen w-full pb-8 pt-10 flex flex-col items-center gap-6 bg-gray-100">
      <h1 className="text-5xl text-gray-800">Shoes</h1>
      <p className="text-lg text-gray-500">
        High quality shoes for your lifestyle.
      </p>
      <div className="w-full h-1 bg-zinc-900 border rounded"></div>
      <div className="grid grid-cols-3 gap-7">
        {shoes.map((shoe) => {
          return <Card key={shoe.name} shoe={shoe} />;
        })}
      </div>
    </div>
  );
};
