import Image from "next/image";
import Link from "next/link";

const Supported = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-b border-gray-300 flex justify-around items-center py-8">
          <span className="text-lg font-semibold">Supported by:</span>
          <Link
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon/Spotify.png"
              alt="Spotify"
              width={120}
              height={40}
            />
          </Link>
          <Link
            href="https://podcasts.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon/Google-Podcast.png"
              alt="Google Podcasts"
              width={160}
              height={40}
            />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icon/Youtube.png"
              alt="YouTube"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Supported;
