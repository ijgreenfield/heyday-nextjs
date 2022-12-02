import {
    builder,
    BuilderContent,
    useIsPreviewing,
} from "@builder.io/react";
import Head from "next/head";
import React from "react";
import DefaultErrorPage from "next/error";
import Container from "../../components/Container";
import Image from "next/image";

const BUILDER_API_KEY = '169056aaf8fc47cc9dd22bb1d1e732fa'
builder.init(BUILDER_API_KEY);

function ShopLocation({ location }) {
    const socialProof = [
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/New-York-Times-logo_1_86288b55-1b29-4369-ac9e-8529034c03a2_876x.png?v=1642697613',
            copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/1280px-Gooponlinelogo_1_363x.png?v=1642697163',
            copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/New_York_Magazine_Logo_1_657x.png?v=1642697163',
            copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
        },

    ]
    const isPreviewing = useIsPreviewing();
    if (!location && !isPreviewing) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>
        );
    }

    return (
        <BuilderContent
            content={location}
            model="locations"
        >
            {(data) => (
                <div>
                    <Head>
                        {/* Render meta tags from custom field */}
                        <title>{data?.title}</title>
                    </Head>

                    <div>
                        <section>
                            <Container>
                                <div>
                                    <div className=''/>
                                </div>
                            </Container>
                        </section>
                        <section className='py-24'>
                            <Container>
                                <div className="grid grid-cols-3">
                                    {socialProof.map(item =>
                                        <div class="text-center" key={item.copy}>
                                            <Image
                                                className="mx-auto"
                                                src={item.image}
                                                alt='New York Times Logo'
                                                width={200}
                                                height={60}
                                            />
                                            <div>
                                                <p>{item.copy}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Container>
                        </section>
                    </div>
                </div>
            )}
        </BuilderContent>
    );
}

export async function getStaticProps({ params }) {
    const location = await builder
        .get("locations", {
            query: {
                // Get the specific location by handle
                "data.handle": params.handle,
            },
        })
        .promise() || null;

    return {
        props: {
            location,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export default ShopLocation;
