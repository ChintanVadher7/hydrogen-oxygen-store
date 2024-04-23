const SPACE = "teq1jkftfc1r"
const TOKEN = "_-ti1VAWJTto5pxmyTA6o6GffKu6hXjAeKOMAocnjOc"

async function apiCall(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ query }),
    }
    return await fetch(fetchUrl, options)
}


async function getTalks() {
    const query = `
    {
      homepageCollection(limit: 0) {
        items {
          sys {
            id
          }
          headings
          heroImageCollection {
            items {
              url
            }
          }
          zigzagrefCollection(limit: 0) {
            items {
              ... on Zigzag {
                heading
                content
                image {
                  url
                }
              }
            }
          }
          itemBanner
          cardSectionRefrenceCollection(limit: 0) {
            items {
              ... on CardSection {
                heading
                cardRefrenceCollection {
                  items {
                    ... on Cards {
                      title
                      cardImage {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          writeSectionRefCollection {
            items {
              ... on Writes {
                writeContent
              }
            }
          }
          headings
        }
      }
    }`;
    const response = await apiCall(query);
    const json = await response.json();
    return await json.data.homepageCollection.items[0]
}

async function HederItems() {
    const query = `{
        headerCollection {
            items {
                sys {
                    id
                }
                headerItems
                shoplogo {
                    description
                    url
                }
            }
            
        }
    }`;
    const response = await apiCall(query);
    const json = await response.json();
    return await json?.data?.headerCollection?.items[0]
}

const client = { getTalks, HederItems }

export default client