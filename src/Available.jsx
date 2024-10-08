import AvailHead from "./AvailHead";
import BedSVG from "./BedSVG";
import TubSVG from "./TubSVG";

export const people = [
  {
    id: 0,
    name: "Karimganj Villa",
    rent: 30000,
    bed: 3,
    bath: 2,
  },
  {
    id: 1,
    name: "Sorder Villa",
    rent: 35000,
    bed: 3,
    bath: 3,
  },
  {
    id: 2,
    name: "Chowdhury Villa",
    rent: 40000,
    bed: 4,
    bath: 2,
  },
  {
    id: 3,
    name: "Momota Villa",
    rent: 50000,
    bed: 4,
    bath: 3,
  },
  {
    id: 4,
    name: "Sweet House",
    rent: 30000,
    bed: 3,
    bath: 2,
  },
];

export default function Available() {
  const Name = people.map((ele) => ele.name);
  const Rent = people.map((ele) => ele.rent);
  const Bed = people.map((ele) => ele.bed);
  const Bath = people.map((ele) => ele.bath);
  return (
    <section>
      <div className="container">
        <AvailHead />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src="/assets/images/Avail/Property1.jpeg" alt="property" />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{Name[0]}</h4>

              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                  Tk.{Rent[0]}
                </span>{" "}
                /M
              </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
              <div className="flex items-center">
                <BedSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bed[0]}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <TubSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bath[0]}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src="/assets/images/Avail/Property2.jpeg" alt="property" />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{Name[1]}</h4>

              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                  Tk.{Rent[1]}
                </span>{" "}
                /M
              </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
              <div className="flex items-center">
                <BedSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bed[1]}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <TubSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bath[1]}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src="/assets/images/Avail/Property3.jpeg" alt="property" />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{Name[2]}</h4>

              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                  Tk.{Rent[2]}
                </span>{" "}
                /M
              </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
              <div className="flex items-center">
                <BedSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bed[2]}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <TubSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bath[2]}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src="/assets/images/Avail/Property4.jpeg" alt="property" />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{Name[3]}</h4>

              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                  Tk.{Rent[3]}
                </span>{" "}
                /M
              </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
              <div className="flex items-center">
                <BedSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bed[3]}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <TubSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bath[3]}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src="/assets/images/Avail/Property5.jpeg" alt="property" />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{Name[4]}</h4>

              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                  Tk.{Rent[4]}
                </span>{" "}
                /M
              </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
              <div className="flex items-center">
                <BedSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bed[4]}</span>{" "}
                  Bedrooms
                </p>
              </div>
              <div className="flex items-center">
                <TubSVG />
                <p>
                  <span className="font-bold text-gray-900">{Bath[4]}</span>{" "}
                  Bathrooms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
