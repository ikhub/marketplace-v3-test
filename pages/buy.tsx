import { useContract, useNFTs, useTokenSupply, useTotalCount } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
//import CollectionPage from "../components/Collection/banner"
import { NFT, SmartContract } from "@thirdweb-dev/sdk";
import { BaseContract } from "ethers";
import styles from "../styles/Buy.module.css";
import { NextSeo } from 'next-seo';



const loadSupply = (contract: SmartContract<BaseContract> | undefined) => {

  const { data: count, isLoading, error } = useTotalCount(contract);
  if (!isLoading) {
    return count?.toNumber();
  }
}



export default function Buy() {

  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(100);

  const loadMore = () => {
    setStart(end)
    setEnd(end + 100)
  }

  const supply = loadSupply(contract)


  const { data, isLoading } = useNFTs(contract, { start: start, count: end });


  // Load all of the NFTs from the NFT Collection
  // const { data, isLoading } = useNFTs(contract);

  return (

<div>
      <NextSeo
      title="Buy | Al Masajid 🕌"
      description="Browse all Al Masajid NFTs that are for sale by current owners. You can still send an offer if it is not for sale."
      openGraph={{
        title: 'Buy | Al Masajid 🕌',
        description: 'Browse all Al Masajid NFTs that are for sale by current owners. You can still send an offer if it is not for sale.',
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
      {/*
      <CollectionPage contractMetadata={undefined} nft={{
        metadata: {
          name: undefined,
          description: undefined,
          image: undefined,
          external_url: undefined,
          animation_url: undefined,
          background_color: undefined,
          properties: undefined,
          attributes: undefined,
          id: "",
          uri: ""
        },
        owner: "",
        type: "ERC1155",
        supply: 0,
        quantityOwned: undefined
      }} />
    */}
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection."
        }
      />{supply && end < supply && (
        <div className={styles.center}>
        <button className={styles.loadmorebutton} onClick={loadMore}>
          LOAD MORE
        </button>
        </div>
      
      )}
    </Container>
    </div>
  );
}