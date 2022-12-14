import {storefront} from "../../utils";
import ProductCard from "../../components/Products/productCard";
import Container from "../../components/Container";
import Head from "next/head";

export default function CollectionTemplate({ collection }) {
    return (
        <div>
            <Head>
                <title>title</title>
            </Head>
            <Container>
                <div className="grid grid-cols-4 gap-8">
                    {collection.products.edges.map((col) => {
                        const product = col.node

                        return (
                            <ProductCard product={product} key={product.handle}/>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

const gql = String.raw

export async function getStaticPaths() {
    const { data } = await storefront(gql`
        {
            collections(first: 100) {
                edges {
                    node {
                        handle
                    }
                }
            }
        }
    `)
    return {
        paths: data.collections.edges.map((collection) => ({ params: { handle: collection.node.handle }})),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { data } = await storefront(singleCollectionQuery, { handle: params.handle })
    const collection = data.collectionByHandle
    return {
        props: {
            collection,
        }
    }
}

const singleCollectionQuery = gql`
    query SingleCollection($handle: String!) {
        collectionByHandle(handle: $handle) {
            title
            description
            products(first: 100){
              edges {
                node {
                  title
                  vendor
                  handle
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                    maxVariantPrice {
                      amount
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                }
              }
            }
        }
    }
`