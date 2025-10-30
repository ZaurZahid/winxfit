import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/layout/Layout";
import BlogDetail from "../../src/components/blogs/BlogDetail";
import ContactForm from "../../src/components/layout/ContactForm";
import { useTranslation } from "next-i18next";
import { fetchFromAPI } from "./../../src/hooks/apiFetcher";

export default function BlogDetailPage({ error }) {
  const { t } = useTranslation("common");

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Layout>
      <BlogDetail />
      <ContactForm />
    </Layout>
  );
}

export async function getServerSideProps({ locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
