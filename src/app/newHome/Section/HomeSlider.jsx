
import styles from "./home.module.css";
import Image from "next/image";

const logos = [
  "/landingPage/HomeSliderImg1.webp",
  "/landingPage/HomeSliderImg2.webp",
  "/landingPage/HomeSliderImg3.webp",
  "/landingPage/HomeSliderImg1.webp",
  "/landingPage/HomeSliderImg2.webp",
  "/landingPage/HomeSliderImg3.webp",
];

function HomeSlider() {
  return (
    <section className="max-w-[115.625rem] mx-auto mt-[7.5rem]">
      <div className="">
      <h3 className="text-[#393939] text-[1.5rem] xl2:text-[2.11rem] font-semibold text-center font-bricolage">
        Trusted by Growing Businesses Across India
      </h3>
      <div className={styles.slider}>
        <div className={styles.gradientLeft}></div>
        <div className={styles.gradientRight}></div>
        <div className={styles.slideTrack}>
          {/* Two identical sets — second set picks up exactly where first ends */}
          {[...logos, ...logos].map((logo, index) => (
            <div className={styles.slide} key={index}>
              <Image
                src={logo}
                alt="Trusted by Merchants Across India"
                width={160}
                height={40}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default HomeSlider;
