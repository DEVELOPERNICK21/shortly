import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShortLink from "./Shortlink";
import Subscribe from "./Subscribe";

export default function Layout({children}) {
return(
    <>
        <Navbar />
        <Banner />
        <ShortLink />
        <Subscribe />
        <Footer />
    </>
)
}