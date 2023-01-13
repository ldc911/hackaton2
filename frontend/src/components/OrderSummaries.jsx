/* This example requires Tailwind CSS v2.0+ */
const products = [
  {
    id: 1,
    name: "Cold Brew Bottle",
    description:
      "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
    href: "#",
    quantity: 1,
    price: "$32.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg",
    imageAlt: "Glass bottle with black plastic pour top and mesh insert.",
  },
];

export default function OrderSummaries({ dataCar, total }) {

  const car = [
    {
      id: dataCar.id,
      manufacturer: dataCar.manufacturer,
      model: dataCar.model,
      price: dataCar.price,
      color: "couleur " + dataCar.color,
      size: dataCar.mileage + "km",
      imageSrc: dataCar.picture,
      imageAlt: dataCar.type,
    },
  ]
  let reduction = total * 0.133
  let totalReduction = total - reduction
  return (
    <div className="bg-white z-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Merci
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Vous avez commandé une {car[0].manufacturer} {car[0].model}
          </p>
          <p className="mt-2 text-base text-gray-500">
            Votre commande #14034056 est confirmée.
          </p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Factures</dt>
            <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Votre commande</h2>

          <h3 className="sr-only">Items</h3>
          {car.map((product) => (
            <div
              key={product.id}
              className="py-10 border-b border-gray-200 flex space-x-6"
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="flex-none w-60 h-60 object-center object-cover bg-gray-100 rounded-lg sm:w-80 sm:h-80"
              />
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                   {product.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Vos informations</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Adresse</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block"> 2 avenue de la foire</span>
                    <span className="block">17009</span>
                    <span className="block">Toronto</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Paiement</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">Mastercard</span>
                    <span className="block">Carte Noire</span>
                    <span className="block">Carte Routiére</span>
                  </address>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Sous total</dt>
                <dd className="text-gray-700">€{total}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Réduction
                  <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                    sépetitetduraliresurtoutsiséattacéetmalécrit50
                  </span>
                </dt>
                <dd className="text-gray-700">-€{reduction} (13,3%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">${totalReduction}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
