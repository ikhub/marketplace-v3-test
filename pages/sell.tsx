import {
  ThirdwebNftMedia,
  useAddress,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import tokenPageStyles from "../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import SaleInfo from "../components/SaleInfo/SaleInfo";
import { NextSeo } from 'next-seo';
import { useContract, useNFTs, useTokenSupply, useTotalCount } from "@thirdweb-dev/react";
//import CollectionPage from "../components/Collection/banner"
import { NFT, SmartContract } from "@thirdweb-dev/sdk";
import { BaseContract } from "ethers";
import styles from "../styles/Buy.module.css";

export default function Sell() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNft, setSelectedNft] = useState<NFTType>();

  return (
    <div>
      <NextSeo
      title="Sell | Al Masajid 🕌"
      description="Sell your Al Masajid NFTs for a fixed price or list it for public auction."
      openGraph={{
        title: 'Sell | Al Masajid 🕌',
        description: 'Sell your Al Masajid NFTs for a fixed price or list it for public auction.',
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
      <h1>Sell NFTs</h1>
      {!selectedNft ? (
        <>
          <p>Select which NFT you&rsquo;d like to sell below.</p>
          <NFTGrid
            data={data}
            isLoading={isLoading}
            overrideOnclickBehavior={(nft) => {
              setSelectedNft(nft);
            }}
            emptyText={
              "Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"
            }
          />
        </>
      ) : (
        <div className={tokenPageStyles.container} style={{ marginTop: 0 }}>
          <div className={tokenPageStyles.metadataContainer}>
            <div className={tokenPageStyles.imageContainer}>
              <ThirdwebNftMedia
                metadata={selectedNft.metadata}
                className={tokenPageStyles.image}
              />
              <button
                onClick={() => {
                  setSelectedNft(undefined);
                }}
                className={tokenPageStyles.crossButton}
              >
                X
              </button>
            </div>
          </div>

          <div className={tokenPageStyles.listingContainer}>
            <p>You&rsquo;re about to list the following item for sale.</p>
            <h1 className={tokenPageStyles.title}>
              {selectedNft.metadata.name}
            </h1>
            <p className={tokenPageStyles.collectionName}>
              Token ID #{selectedNft.metadata.id}
            </p>

            <div className={tokenPageStyles.pricingContainer}>
              <SaleInfo nft={selectedNft} />
            </div>
          </div>
        </div>
      )}
    </Container>
    </div>
  );
}