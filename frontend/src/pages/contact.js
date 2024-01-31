import Head from "next/head";
import ContactMain from "../components/Contact/ContactMain";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Liên Hệ Chúng Tôi</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://nauphache.com/wp-content/uploads/2022/05/nau-pha-che-09-1024x721.png"
        />
      </Head>
      <Header />
      <ContactMain />
      <Footer />
    </>
  );
}
