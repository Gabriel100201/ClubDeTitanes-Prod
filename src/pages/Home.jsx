/* import { GridAcceso } from "../components/Home/GridAcceso" */
/* import { Banner } from "../components/Home/Banner" */
/* import { SectionEspacio } from "../components/Home/SectionEspacio" */
/* import { Testimonial } from "../components/Home/Testimonials" */
import { Footer } from "../components/Global/Footer"
import { SectionProximamente } from "../components/Home/SectionProximamente"
/* import { AboutUs } from "../components/Home/AboutUs"
import { SectionContact } from './../components/Home/SectionContact'; */

const Home = () => {
  return (
    <main>
      {/* <Banner /> */}
      {/* <SectionEspacio /> */}
      <SectionProximamente/>
{/*       <GridAcceso />
      <Testimonial />
      <AboutUs />
      <SectionContact /> */}
      <Footer />
    </main>
  )
}

export default Home