import BlobOne from "../components/Blobs/BlobOne";
import BlobThree from "../components/Blobs/BlobThree";
import BlobTwo from "../components/Blobs/BlobTwo";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Head from "next/head";
export default function Error() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Pras-Kit</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Nav />
      <div className="w-full flex justify-center ">
        <BlobOne />
        <BlobTwo />
        <BlobThree />
        <img src="/404.svg" width="700" height="700" />
      </div>
    </div>
  );
}
