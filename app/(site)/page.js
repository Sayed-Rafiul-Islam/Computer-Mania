import Banner from "@/components/Banner/Banner";
import ContactUs from "@/components/ContactUS/ContactUs";
import Footer from "@/components/Footer/Footer";
import Parts from "@/components/Parts/Parts";
import Repair from "@/components/Repair/Repair";
// import Review from "@/components/Reviews/Review";
import Summery from "@/components/Summery/Summery";

export default function Home() {
  return (
    <main>
      <div className='mt-12'>
            <Banner></Banner>
            <Parts></Parts>
            <ContactUs></ContactUs>
            <Summery></Summery>
            <Repair></Repair>
            {/* <Review></Review> */}
            <Footer></Footer>
        </div>
    </main>
  )
}
