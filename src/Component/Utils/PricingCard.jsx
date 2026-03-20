
"use client";
import PropsType from "prop-types";
const PricingCard = (props) => {
  const { loading, proPlan } = props;

  return (
     <div className="bg-[#FBF8FF] border border-[#DDDDDD] rounded-[10px] mt-[62px] m-[10px]">
              <div className="flex flex-col justify-center items-center pt-[35px]">
                <p className="text-center text-primary font-bold text-[28px]">
                  Basic
                </p>
                <div className="flex justify-center items-start text-center">
                  <h2 className="text-primary font-bold text-[40px] mb-1 text-center">
                    ₹ {loading ? "..." : proPlan?.amount ?? "N/A"}
                  </h2>
                  <p className=" text-primary  flex flex-col font-bold text-[14px] mt-[10px]">
                    per{" "}
                    <span className="ml-[20px] text-primary">
                      / {proPlan?.frequency || "Year"}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => window.open(proPlan?.url, "_blank")}
                  className=" w-[244px] h-[56px] border border-[#DDDDDD] cursor-pointer text-white bg-primary font-semibold rounded-full  hover:bg-purple-50 hover:text-primary hover:border-primary transition"
                >
                  Start Free Trial
                </button>
              </div>
              <div className="py-[38px] px-[47px]">
                <ul className="text-sm flex flex-wrap justify-between grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 text-[#3F3F3F] font-semibold text-left leading-[24px] break-words items-start">
                  {loading ? (
                    <li className="list-disc list-outside">
                      Loading features...
                    </li>
                  ) : (
                    proPlan?.features?.map((f, idx) => (
                      <li className="list-disc list-outside" key={idx}>
                        {" "}
                        {f.feature}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
  );
};

PricingCard.propTypes = {
  loading: PropsType.bool,
  proPlan: PropsType.array,
};

export default PricingCard;
