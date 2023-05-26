import React from "react"

export default function ProductsPage({image, name, id, description, price}) {
  return (
     <div
          key={id}
          className="bg-white shadow-lg p-6 mb-4"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-50 object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">${price}</span>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
              Add to Cart
            </button>
          </div>
        </div>
  )
}