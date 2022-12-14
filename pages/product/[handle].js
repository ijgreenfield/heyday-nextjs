import { storefront } from "../../utils";
import StarRatings from "react-star-ratings";
import Image from "next/image";

export default function ProductTemplate({ product, responseData }) {
    //const product_id = product.id.split('Product/')[1]
    return (
        <div className="">
            <div>
                <p>{product.title}</p>
            </div>
            {/* How We Use It */}
            <div className="bg-[#FDFAF8] py-20">
                <div className="flex mx-auto max-w-6xl">
                    <div className="w-full h-full">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/HowTo_Serum01_f66f7197-eb52-4d62-a719-6ceb42ab4ed2_588x.gif?v=1613750352"
                            width={500}
                            height={600}
                        />  
                    </div>
                    <div>
                        <div>
                            <span>How We Use It</span>
                            <h1>Morning and Night</h1>
                            <p>Apply a few drops to clean, toned skin, focusing on areas that you feel need a bit of extra attention.</p>
                        </div>
                        <div>
                            <p>Complete Your Routine</p>
                            <div>
                                <span className="uppercase">before</span>
                                <div className="flex">
                                    <div></div>
                                    <div className="bg-white">
                                        <p className="uppercase">Image Skincare</p>
                                        <h4>Vital C Hydrating Facial Cleanser</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="uppercase">After</span>
                                <div className="flex">
                                    <div></div>
                                    <div className="bg-white">
                                        <p className="uppercase">Image Skincare</p>
                                        <h4>Vital C Hydrating Facial Cleanser</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* How We Use It End */}

            {/* From Treatment Room */}
            <div className="bg-accent-primary-dark text-white text-center py-20">
                <div className="max-w-xl mx-auto flex flex-col gap-8">
                    <span>• FROM THE TREATMENT ROOM •</span>
                    <h3 className="text-2xl">Apply with toner, or mix with your favorite facial oil for the complete balance of brightening and hydration. This anti-aging serum is also safe to use around the eyes.</h3>
                </div>
            </div>
            {/* From Treatment Room End */}

            {/* Yotpo Reviews */}
            <div className="max-w-4xl mx-auto py-16">
                <div className="text-center">
                    <h1>Reviews</h1>
                </div>
                <div className="flex flex-col gap-6">
                    {responseData.response.reviews.map(review => (
                        <div key={review.id}>
                            <div className="flex gap-3">
                                <h2>{review.user.display_name}</h2>
                                <p>{review.verified_buyer ? 'Verified Buyer' : ''}</p>
                            </div>
                            <StarRatings
                            rating={review.score}
                            starRatedColor="#F2B14E"
                            starDimension="16px"
                            starSpacing="2px"
                            numberOfStars={5}
                            name='rating'
                            className='h-6'
                            />
                            <p>{review.created_at}</p>
                            <p>{review.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Yotpo Reviews End*/}
        </div>
    )
}

const gql = String.raw

export async function getStaticPaths() {
    const { data } = await storefront(gql`
        {
            products(first: 10) {
                edges {
                    node {
                        handle
                    }
                }
            }
        }
    `)
    return {
        paths: data.products.edges.map((product) => ({ params: { handle: product.node.handle }})),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { data } = await storefront(singleProductQuery, { handle: params.handle })
    const response  = await fetch(`https://api-cdn.yotpo.com/v1/widget/7DTLUDTEEN8jf5H5TWwLgyTY60lTruCBgm2HJk7s/products/4773568938072/reviews.json`)
    const responseData = await response.json();
    const product = data.productByHandle
    return {
        props: {
            product,
            responseData
        }
    }
}

const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
      }
    }
`

