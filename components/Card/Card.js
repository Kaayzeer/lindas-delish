import Image from "next/image";
import { API_URL } from "../../config/index";

const products = [
  {
    id: 1,
    name: "Jordgubbssylt",
    href: "#",
    imageSrc: "https://picsum.photos/400",
    imageAlt: "Sweet marmelade made with organic ingredients.",
    price: "350 kr.",
    category: "Marmelade",
  },
  {
    id: 2,
    name: "Jordgubbssylt",
    href: "#",
    imageSrc: "https://picsum.photos/400",
    imageAlt: "Sweet marmelade made with organic ingredients.",
    price: "350 kr.",
    category: "Marmelade",
  },
  {
    id: 3,
    name: "Jordgubbssylt",
    href: "#",
    imageSrc: "https://picsum.photos/400",
    imageAlt: "Sweet marmelade made with organic ingredients.",
    price: "350 kr.",
    category: "Marmelade",
  },
  {
    id: 4,
    name: "Jordgubbssylt",
    href: "#",
    imageSrc: "https://picsum.photos/400",
    imageAlt: "Sweet marmelade made with organic ingredients.",
    price: "350 kr.",
    category: "Marmelade",
  },
];

// ska kunna ta emot alla produkter eller bara en produkt?
export default function Card({ products }) {
  console.log(products);
  products.map((product) =>
    console.log(
      product.attributes.images.data.map(
        (data) => data.attributes.formats.large
      )
    )
  );
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Produkter
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                {product.attributes.images.data.map((data) => (
                  <Image
                    src={API_URL + data.attributes.formats.large.url}
                    width={data.attributes.formats.large.width}
                    height={data.attributes.formats.large.height}
                    alt={data.attributes.formats.large.hash}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                ))}
              </div>
              <div className="">
                <p className="mt-1 text-sm text-gray-400">{product.category}</p>

                <div className="mt-1 flex justify-between">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.attributes.name}
                    </a>
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {product.attributes.price}
                  </p>
                </div>
              </div>
              <button className="btn-outlined">Lägg till korgen</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
