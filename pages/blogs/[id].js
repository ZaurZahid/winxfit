import Head from "next/head";
import blogsMock from "../../mock/blog";
import Layout from '../../src/components/layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import BlogPost from "../../src/components/blogs/BlogPost";
import { fetchFromAPI } from './../../src/hooks/apiFetcher';

export default function BlogPostPage({ siteData, blogDetail, error }) {
    const { t } = useTranslation('common')

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <Layout siteData={siteData}>
            <Head>
                <title>AllVer | {t('navigation.blog')}</title>
                <meta name="description" content="This is a description of single blog page." />
            </Head>

            <BlogPost post={blogDetail} />
            <img src="/group-ellipses.svg" alt="group ellipses" className='absolute right-0 -top-16' />
        </Layout>
    );
}

export async function getServerSideProps({ params, locale }) {
    const { id } = params

    try {
        const [siteData, blogDetail] = await Promise.all([
            fetchFromAPI('/api/v1/support/site/', locale),
            fetchFromAPI(`/api/v1/support/blog/${id}`, locale),

        ]);
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
                siteData,
                blogDetail,
            },
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);

        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
                siteData: null,
                blogDetail: null,
                error: 'Failed to load data.',
            },
        };
    }
}