import Link from "next/link";
import Star from "../ui/icons/Star";
import { useTranslation } from 'next-i18next';
import LocationIcon from "../ui/icons/Location";

export default function TradeCenters({ centers, classes = { root: "" } }) {
    const { t } = useTranslation('common')
    console.log(centers)
    return (
        <div id="shopping-centers" className={`mt-8 relative p-8 py-10 lg:p-16 bg-white rounded-3xl z-10  scroll-mt-20 lg:scroll-mt-28 ${classes.root}`}>
            <div className="text-center mb-8 lg:mb-14">
                <div className="relative inline-block">
                    <Star className="absolute left-0 top-1 lg:top-0 transform -translate-x-8 -translate-y-8 w-10 lg:w-12 h-10 lg:h-12" />
                    <h2 className="text-3xl font-bold text-gray-900">{t('shoppingCenters.title')}</h2>
                </div>
                <p className="text-gray-600 mt-2">{t('shoppingCenters.subtitle')}</p>
            </div>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {centers.slice(0, 3).map((center) => (
                    <Link href={`/shopping-centers/${center.map_key}`} key={center.id}>
                        <div
                            className="group rounded-3xl p-4 flex flex-col items-center text-center lg:items-start lg:text-start cursor-pointer transition-all hover:shadow-lg hover:bg-gradient-to-tr h-full"
                        >
                            <div className="mb-6 transition-colors">
                                <LocationIcon strokeColor={"stroke-black group-hover:stroke-white"} />
                            </div>
                            <h3 className="text-xl font-bold text-black group-hover:text-white">{center.name}</h3>
                            <p className="text-black group-hover:text-white mt-2 max-w-64">{center.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
