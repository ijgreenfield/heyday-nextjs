import {boulevard} from "../../utils/boulevard";
import LocationCard from "../../components/Products/locationCard";
import Container from "../../components/Container";

export default function LocationsList({location}) {
    return (
        <div>
            <div>

            </div>
            <div>
                <Container>

                    <div className="flex flex-wrap justify-center gap-x-4">
                        {location.edges.map(item => {
                            const shop = item.node
                            return (
                                <div key={shop.id}>{shop.address.state}</div>
                                //<LocationCard key={shop.id} shop={shop}/>
                            )
                        })}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await boulevard(locationQuery)
    const location = data.business.locations
    return {
        props: {
            location,
        }
    }
}

const gql = String.raw

const locationQuery = gql`
    query {
  business {
    locations(first: 20) {
      edges {
        node {
          id
          name
          tz
          phoneNumber
          contactEmail
          id
          
          address {
            line1
            line2
            city
            state
            zip
          }
        }
      }
    }
  }
}
`