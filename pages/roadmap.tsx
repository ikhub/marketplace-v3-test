import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Roadmap.module.css";
import Container from "../components/Container/Container";
import { NextSeo } from 'next-seo';

const Roadmap: NextPage = () => {

  return (
    <div>
      <NextSeo
      title="Roadmap | Al Masajid 🕌"
      description="Roadmap & Milestones of Al Masajid NFTs"
      openGraph={{
        title: 'Roadmap | Al Masajid 🕌',
        description: 'Roadmap & Milestones of Al Masajid NFTs',
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
        siteName: 'Al Masajid 🕌',
      }}
    />
    <Container maxWidth="lg">
    <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE ONE:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Creating the NFT assets and metadata.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE TWO:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Uploading the NFT assets & Metada to decentralized storage.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE THREE:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Deploying the smart contract.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE FOUR:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Creating a easy to use Minting Dapp.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE FIVE:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Creating a dedicated decentralized Marketplace.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE SIX:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Applying to Haqqpad
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ✔ APPLIED
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE SEVEN:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Announcing in public forums.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ☞ TO BE DONE
                  </Link>
                </div>
                </div>
                <div className={styles.heroAssetFrame}>
    <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="">
                  ✪ PHASE EIGHT:
                  </Link>
                  <Link className={styles.secondaryCta} href="">
                  Promoting the project.
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href=""
                  >
                    ☞ TO BE DONE
                  </Link>
                </div>
                </div>
              </Container>
    </div>
    
  );
};
export default Roadmap;