import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-56 ">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg"> {product.name} </h2>
          </a>
        </Link>
        <p className="mb-2"> {product.brand} </p>
        <p> ${product.price} </p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
