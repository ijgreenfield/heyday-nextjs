export default function YotpoReviews({ data }) {
    console.log(data)
    return (
      <div>
      </div>
    )
  }
  
  export async function getStaticProps() {
    const response  = await fetch(`https://api-cdn.yotpo.com/v1/widget/7DTLUDTEEN8jf5H5TWwLgyTY60lTruCBgm2HJk7s/products/4773568938072/reviews.json`)
    const data = await response.json();
  
    if (!json) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data,
      }
    }
  }