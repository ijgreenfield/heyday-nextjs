import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://cdn.shopify.com/s/files/1/1704/8471/t/499/assets/Cadiz-Regular.woff2?v=118879432380538914361669612111"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdn.shopify.com/s/files/1/1704/8471/t/443/assets/Tobias-SemiBold.woff2?v=9113664531067424261649776762"
                        rel="stylesheet"
                    />
                    <link 
                        href="https://cdn.shopify.com/s/files/1/1704/8471/t/501/assets/MaisonNeueBook.woff2?v=160879981933109394541669923579"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;