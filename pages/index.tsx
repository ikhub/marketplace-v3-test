import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextSeo } from 'next-seo';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
      title="Al Masajid 🕌"
      description="Al Masajid is a collection of NFTs featuring popular and lesser known Masjids across the globe with a touch of artistic traits launched on the Haqq Network."
      openGraph={{
        title: 'Al Masajid 🕌',
        description: 'Al Masajid is a collection of NFTs featuring popular and lesser known Masjids across the globe with a touch of artistic traits launched on the Haqq Network.',
        images: [
          {
            url: 'https://ipfs.thirdwebcdn.com/ipfs/QmauKCyC1n85u2so9KLp482ce6AKa9Pgm6ppESKE5UL6Bq/almasajid.jpg',
            width: 1200,
            height: 630,
            alt: 'Al Masajid',
            type: 'image/jpeg',
          },
          {
            url: 'https://ipfs.thirdwebcdn.com/ipfs/QmSkBhXKpqoEG6qaunCMQLHLrHR9AicotnkiDit6rknwRc/AlMasajid.jpg',
            width: 480,
            height: 480,
            alt: 'Al Masajid',
            type: 'image/jpeg',
          },
        ],
        siteName: 'Al Masajid🕌',
      }}
    />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src="/hero-gradient.png"
                  width={1390}
                  height={1390}
                  alt="Background gradient from red to blue"
                  quality={100}
                  className={styles.gradient}
                />
              </div>
            </div>
            <div className={styles.heroAssetFrame}>
              <Image
                src="/hero-asset.gif"
                width={860}
                height={400}
                alt="Buy, Sell or Auction Al Masajid NFTs."
                quality={100}
                className={styles.heroAsset}
              />
            </div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleGradient}>
                    🕌 Al Masajid 🕌
                  </span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Al Masajid is a collection of NFTs featuring popular and lesser known Masjids across the globe with a touch of artistic traits launched on the <b>Haqq Network</b>.
                </p>
                <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="/mint">
                    Mint Now
                  </Link>
                  <Link className={styles.secondaryCta} href="/buy">
                    Buy Now
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href="/sell"
                  >
                    Sell Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;