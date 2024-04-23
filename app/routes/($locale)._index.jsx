import { defer } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link } from '@remix-run/react';
import { Fragment, Suspense } from 'react';
import { CartForm, Image, Money } from '@shopify/hydrogen';
import client from '~/models/contentful.server';
import HomepageHero from '~/components/HomepageHero';
import ZigZag from '~/components/ZigZag';
import ItemBanner from '~/components/ItemBanner';
import BlogCard from '~/components/BlogCard';
import BlogWrites from '~/components/BlogWrites';


export const meta = () => {
  return [{ title: 'Hydrogen | Home' }];
};


export async function loader({ context }) {
  const { storefront } = context;
  const { collections } = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = await storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const homepageContent = await client.getTalks();


  return defer({ featuredCollection, recommendedProducts, homepageContent });
}

export default function Homepage() {

  const data = useLoaderData();
  const { homepageContent } = useLoaderData();
  return (
    <div className="home">
      <HomepageHero homepageContent={homepageContent} />
      <RecommendedProducts products={data.recommendedProducts} />
      {
        homepageContent.zigzagrefCollection.items.map((res, index) => (
          <ZigZag key={index} content={{ res, index }} />
        ))
      }
      <ItemBanner content={homepageContent.itemBanner} />
      <BlogCard content={homepageContent.cardSectionRefrenceCollection.items[0]} />
      <BlogWrites content={homepageContent.writeSectionRefCollection.items[0]} />
      {/* <FeaturedCollection collection={data.featuredCollection} />  */}
     

    </div>
  );
}


function FeaturedCollection({ collection }) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
    </Link>
  );
}

function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  return (
    <CartForm
      route="/cart"
      inputs={{ lines }}
      action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <button
            className=' text-[15px] font-[600] uppercase leading-[24px] text-black !important w-full text-center border border-black py-[14px]'
            type="submit"
            onClick={onClick}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

function RecommendedProducts({ products }) {
  return (
    <div className="recommended-products px-[30px]">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({ products }) => (
            <div className="recommended-products-grid py-[80px]">
              {products.nodes.map((product,index) => (
                <div key={index}>
                  <Link
                    key={product.id}
                    className="recommended-product"
                    to={`/products/${product.handle}`}
                  >
                    <Image
                      data={product.images.nodes[0]}
                      aspectRatio="1/1"
                      height={550}
                      width={440}
                    />
                    <div className='flex items-center px-[15px] justify-between my-[1.7rem]'>
                      <h4>{product.title}</h4>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </div>
                  </Link>
                  <AddToCartButton
                    onClick={() => {
                      if (!window.location.hash) {
                        window.location.href = window.location.href + '#cart-aside';
                      }else{
                        history.go(-1);
                      }
                    }}
                    lines={
                      [
                        {
                          merchandiseId: product.variants.nodes[0].id,
                          quantity: 1,
                        },
                      ]

                    }
                  >
                    Add to Bag
                  </AddToCartButton>
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    variants(first: 1) {
      nodes {
        availableForSale
        id
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;


