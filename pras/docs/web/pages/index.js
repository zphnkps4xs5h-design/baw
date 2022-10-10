import BlobOne from "../components/Blobs/BlobOne";
import BlobThree from "../components/Blobs/BlobThree";
import BlobTwo from "../components/Blobs/BlobTwo";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Head from "next/head";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Pras-Kit</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Nav />
      <div className="w-full ">
        <BlobOne />
        <BlobTwo />
        <BlobThree />

        <HeroSection />
      </div>
    </div>
  );
}
