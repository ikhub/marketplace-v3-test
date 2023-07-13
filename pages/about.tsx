import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Container from "../components/Container/Container";
import { NextSeo } from 'next-seo';

const About: NextPage = () => {

  return (
    <div>
      <NextSeo
      title="About | Al Masajid 🕌"
      description="Learn more about Al Masajid NFTs"
      openGraph={{
        title: 'About | Al Masajid 🕌',
        description: 'Learn more about Al Masajid NFTs',
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
        </div>
    
      <div>
        <b>✪ What is an NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
      NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same. NFTs can be a unique digital artwork, sneaker in a limited-run fashion line, in-game item, digital collectible etc.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ What makes an NFT valuable?</b>
      </div>
      <div>ㅤ</div>
      <div>
      The value of an NFT comes from the property it represents, which is generally something that exists in the digital world like an original piece of art or digital memorabilia. The NFT itself doesn’t necessarily contain the digital property, but points to its location on the blockchain.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ How do NFTs work?</b>
      </div>
      <div>ㅤ</div>
      <div>
      Traditional works of art such as paintings are valuable because they are one of a kind. But digital files can be easily and endlessly duplicated. With NFTs, artwork can be “tokenised” to create a digital certificate of ownership that can be bought and sold. As with crypto-currency, a record of who owns what is stored on a shared ledger known as the blockchain. The records cannot be forged because the ledger is maintained by thousands of computers around the world.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ What’s the connection between NFTs and cryptocurrency?</b>
      </div>
      <div>ㅤ</div>
      <div>
      NFTs aren’t cryptocurrencies, but they are built using technology similar to Ethereum and Bitcoin. Also, like cryptocurrencies, NFTs exist on a blockchain, which verifies their unique identity and ownership. The blockchain also keeps a record of all the transactions connected to the NFT and the property it represents.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ What is <i>Al Masjid</i>?</b>
      </div>
      <div>ㅤ</div>
      <div>
      Al Masajid is a collection of NFTs featuring popular and lesser known Masjids across the globe with a touch of artistic traits launched on the Haqq Network. Each NFT in the collection is called Al Masjid, followed by a number (eg., Al Masjid #1, Al Masjid #25) which is the unique Token Id of the particular NFT.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ How can I get an Al Masajid NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
        Al Masajid NFTs can be minted till all the NFts are minted. Minted NFts can only be purchased/acquired from the current owner.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ How do I Buy an Al Masajid NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
        Al Masajid NFTs can only be bought if the current owner is willing to sell. Browsw through the Buy page to see all the NFTs that are listed for sale. The NFTs can also be listed for sale in third party marketplaces from where you may purchase it.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ How can I sell an Al Masajid NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
        Al Masajid NFTs can be listed for sale in the Sell Page or in any Third party Marketplace.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ Is there any cost to sell an Al Masajid NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
        This integrated Marketplace will deduct a 5 percent commission on every sales. The cost in other marketplace may vary.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
      <div>
        <b>✪ Where to validate the authencity of an Al Masajid NFT?</b>
      </div>
      <div>ㅤ</div>
      <div>
        Al Masajid NFT is launched on the Haqq Network. You can validate the authenticity of the NFT by visiting the Al Masajid <Link href="https://explorer.haqq.network/address/0xd006658C0dE0BBce8E255884DCD703374094A0A6" target="_blank"><b>Contract Address</b></Link>.
      </div>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </Container>
    </div>
  );
};
export default About;