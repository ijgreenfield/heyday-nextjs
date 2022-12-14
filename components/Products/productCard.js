import Link from "next/link";
import Image from "next/image"

export default function ProductCard({ product }) {
    const image = product.images.edges[0].node;

    return (
        <Link href={`/product/${product.handle}`}>
            <div key={product.title} className="mt-4 text-neutral-primary" >
                <div className="w-full  responsive overflow-hidden">
                    <Image
                        src={image.url}
                        width={400}
                        height={600}
                        alt={image.altText}
                    />
                </div>
                <p className="uppercase text-xs tracking-widest mt-3 font-light font-maison">{product.vendor}</p>
                <h2 className="mt-2 h-16 font-maison font-normal">{product.title}</h2>
                <div>
                    <button className="border border-black w-full py-3 font-maison text-sm font-light hover:bg-accent-primary hover:text-white">Add to Cart - ${product.priceRange.minVariantPrice.amount}</button>
                </div>
            </div>
        </Link>
    )
}