import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Navbar from "./ShortNav/Navbar";
import ShortLink from "./Shortlink/Shortlink";
import Subscribe from "./Subscribe/Subscribe";

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