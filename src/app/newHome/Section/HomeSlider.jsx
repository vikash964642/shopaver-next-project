
import styles from "./home.module.css";
import Image from "next/image";
function HomeSlider() {
  const logos = [
    "/landingPage/HomeSliderImg1.webp",
    "/landingPage/HomeSliderImg2.webp",
     "/landingPage/HomeSliderImg3.webp",
      "/landingPage/HomeSliderImg1.webp",
       "/landingPage/HomeSliderImg2.webp",
        "/landingPage/HomeSliderImg3.webp",
  ];

  return (
    <section className="max-w-5xl max-[350px]:px-[15px] px-[30px] xl:px-0 mx-auto mt-[200px]">
      <h3 className="text-[#393939] text-[24px]  font-semibold text-center font-bricolage">
      Trusted by Growing Businesses Across India
      </h3>
    <div className={styles.slider}>
      <div className={styles.gradient1}></div>
      <div className={styles.slideTrack}>
        {logos.concat(logos).map((logo, index) => (
          <div className={styles.slide} key={index}>
            <Image className="sliderImage"  src={logo} alt="Trusted by Merchants Across India" width={150} height={35} />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default HomeSlider;
