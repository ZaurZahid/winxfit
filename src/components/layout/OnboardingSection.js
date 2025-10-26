import React from 'react';
import Star from '../ui/icons/Star';
import { useTranslation } from 'next-i18next';
import AppDownloadButtons from '../ui/DownloadApps';

function OnboardingSection({ centers }) {
    const { t } = useTranslation('common');

    return (
        <section className="relative pb-[24rem] sm:pb-[36rem] lg:pb-8 py-4 lg:py-12 h-[780px] rounded-3xl">
            <div className="h-full flex flex-col lg:flex-row">
                <div className="h-full flex flex-col justify-center m-auto max-w-md lg:max-w-sm xl:max-w-xl relative z-10">
                    <h1 className="text-3xl font-bold mb-5">
                        {t('onboarding.title_header')}
                        <span className="bg-gradient-to-tr rounded-3xl px-3 lg:px-5 py-1 text-base sm:text-3xl mx-2 text-white inline-block transform -skew-y-3">
                            {t('onboarding.title_header_span')}
                        </span>
                        <div className="block">{t('onboarding.title_footer')}</div>
                    </h1>
                    <p className="text-gray-600 mb-6">{t('onboarding.subtitle')}</p>
                    <AppDownloadButtons />
                </div>

                {/* Image Section */}
                <div className="grow lg:ml-8 relative gb-gray-500">
                    <img
                        src="/phones-gradient-2x.png"
                        alt="phones gradient"
                        className="max-h-96 absolute top-6 left-1/2 transform -translate-x-1/2 sm:top-36 sm:right-48 sm:scale-[1.4] lg:top-36 lg:right-44 lg:scale-[2.1] xxl:right-0 z-10"
                    />
                </div>
            </div>

            <img src="/onboarding-pattern-4x.png" alt="onboarding pattern" className='absolute left-0 bottom-0 -top-28 md:-top-40 xl:-top-28 w-full h-[78rem] md:h-[80rem] lg:h-[90rem] object-cover' />
        </section>
    );
}

export default OnboardingSection;