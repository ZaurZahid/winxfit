import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../src/components/layout/Layout'
import OnboardingSection from '../src/components/layout/OnboardingSection'
import ValueSection from '../src/components/layout/ValuesSection'
import HowItWorks from '../src/components/layout/HowItWorks'
import TradeCenters from '../src/components/layout/TradeCenters'
import Fags from '../src/components/layout/Fags'
import BlogSection from '../src/components/layout/BlogSection'
import ContactForm from '../src/components/layout/ContactForm'
import { useTranslation } from 'next-i18next'
import { fetchFromAPI } from './../src/hooks/apiFetcher';

export default function HomePage({ error }) {
  const { t } = useTranslation('common')

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Layout>
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is em Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.
      Lorem Ipsum is a type of placeholder text commonly used in the design and publishing industries. It is derived from a work by the Roman statesman and philosopher Cicero, specifically from "De finibus bonorum et malorum," and has been altered to create nonsensical Latin phrases.

      {/* <OnboardingSection centers={shoppingCenters} />
      <ValueSection features={featureData} />
      <HowItWorks onboardingData={onboardingData} />
      <TradeCenters centers={shoppingCenters} />
      <Fags fags={faqData} />
      <BlogSection blogsData={blogsData} />
      <ContactForm siteData={siteData} /> */}
    </Layout>
  );
}

export async function getServerSideProps({ locale, req  }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}
