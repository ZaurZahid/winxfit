import Image from "next/image";

export default function AppDownloadButtons() {
    return (
        <div className="flex mt-8 gap-4 items-center">
            <a
                href="https://apps.apple.com/ie/app/allver/id6737849296"
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    src="/apple-store-badge.png"
                    alt="Download on the App Store"
                    width={135}
                    height={45}
                    className="h-auto w-auto"
                />
            </a>

            <a
                href="https://play.google.com/store/apps/details?id=com.orignos.allver"
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={45}
                    className="h-auto w-auto"
                />
            </a>
        </div>
    );
}
