import Link from "next/link";
import Image from "next/image";
import './ThankYou.css'

function ThankYou() {
  return (
    <section className="max-w-screen-lg mx-auto mb-[50px] mt-[30px] lg:mb-[0px] ">
      <div className="flex justify-center">
        <div className="container-box m-3">
          <div className="left py-[15px]">
            <Image
              src="/img/Top.png"
              alt="cloud-image"
              width={160}
              height={88}
              className="object-contain top-image"
            />
            <h2>Thank You</h2>
            <p>
              Your form has been successfully submitted.
              <br />
              We will contact you soon.
            </p>
            <Link href="/">
              <button className="button">Back To Home</button>
            </Link>
            <Image
              src="/img/Down.png"
              alt="cloud-image "
              width={183}
              height={107}
              className="object-contain bottom-image"
            />{" "}
          </div>

          <div className="right">
            <Image
              src="/img/Thankyou.png"
              alt="thankyou-image"
              width={450}
              height={350}
              className="thankyou-image"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
