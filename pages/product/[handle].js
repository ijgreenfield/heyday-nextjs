import {storefront} from "../../utils";

export default function ProductTemplate({ product }) {
    return (
            <div>
                {product.title}
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
    const product = data.productByHandle
    return {
        props: {
            product,
        }
    }
}

const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
      productByHandle(handle: $handle) {
        title
      }
    }
`

