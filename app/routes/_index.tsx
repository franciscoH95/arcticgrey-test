import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Banner from '~/components/Home/Banner';
import Reviews from '~/components/Home/Reviews';
import Slider from '~/components/Home/Slider';
import Goals from '~/components/Home/Goals';
import RecommendedProducts from '~/components/Home/RecommendedProducts';
import SalesPitch from '~/components/Home/SalesPitch';
import ReviewPeople from '~/components/Home/ReviewPeoples';
import Bundles from '~/components/Home/Bundles';
import Customized from '~/components/Home/Customized';
import BannerPromotional from '~/components/Home/BannerPromotional';
import Blogs from '~/components/Home/Blogs';
import BannerInsta from '~/components/Home/BannerInsta';
import {COLLECTION_QUERY} from '~/lib/fragments';

export const meta: MetaFunction = () => {
  return [{title: 'uncmfrt.com | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);

  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const {collections} = await storefront
    .query(COLLECTION_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        firstCollection: 10,
      },
    })
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    collections,
  };
}

function loadDeferredData({context}: LoaderFunctionArgs) {
  return {};
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="home">
      <Banner />
      <Slider />
      <Reviews />
      <Goals />
      <RecommendedProducts collections={data.collections} />
      <SalesPitch />
      <ReviewPeople />
      <Bundles collections={data.collections} />
      <Customized />
      <BannerPromotional />
      <Blogs />
      <BannerInsta />
    </div>
  );
}
