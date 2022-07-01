import { shoes } from "../data/data";

import { Card } from "../components/Card";

export const Products = () => {
  scrollTo(0, 0);
  return (
    <div className="min-h-screen w-full pb-8 pt-10 flex flex-col items-center gap-6 bg-gray-100">
      <p className="text-xl text-gray-500">
        High quality shoes for your lifestyle.
      </p>
      <div className="w-full h-1 bg-zinc-900 border rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {shoes.map((shoe) => {
          return <Card key={shoe.name} shoe={shoe} />;
        })}
      </div>
    </div>
  );
};
