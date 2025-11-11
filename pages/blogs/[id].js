import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/layout/Layout";
import BlogDetail from "../../src/components/blogs/BlogDetail";
import ContactForm from "../../src/components/layout/ContactForm";
import { useTranslation } from "next-i18next";
import { fetchFromAPI } from "./../../src/hooks/apiFetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import blogsMock from "../../mock/blogs";

export default function BlogDetailPage({ error }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = blogsMock.items.find((item) => item.id === Number(id));
      setBlog(found || null);
      setLoading(false);
    }
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!blog) return null;

  return (
    <Layout>
      <BlogDetail post={blog} />
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
