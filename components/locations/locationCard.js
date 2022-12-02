import Image from "next/image";

export default function LocationCard({shop}) {
    return (
        <div className=''>
            <div>
                <Image
                    src='https://cdn.shopify.com/s/files/1/1704/8471/files/shop_image_bea1f1af-19ef-4bbf-8eeb-5053a3351615.png?v=1659042312'
                    alt='shop img'
                    width={300}
                    height={400}
                />
            </div>
            <div>
                <div>
                    <h3>{shop.name}</h3>
                    <p>{shop.address.line1} {shop.address.line2}</p>
                    <p>{shop.address.city}, {shop.address.state}</p>
                </div>
            </div>
        </div>
    )
}