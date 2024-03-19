import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Before from "@/assets/svgs/beffore";
import { ArrowUp, Etherium } from "@/assets/svgs/General";
import GetStarted from "@/assets/svgs/GetStarted";
import ArrowRight from "@/assets/svgs/ArrowRight";
import PriceChart from "@/components/PriceChart";
import CustomTab from "@/components/CustomTab";
import InfoIcon from "@/assets/svgs/InfoIcon";
import Footer from "@/components/footer/Index";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Navbar />
      <div className="px-8">
        <div className="flex gap-2 items-center my-3">
          <h3 className="font-medium text-sm text-[#3E5765]">Cryptocurrencies</h3>
          <Before />
          <h3 className="text-[#0F1629] font-medium text-sm">Bitcoin</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[70%] w-full">
            <div className="bg-white p-4">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/assets/bitcoin.png"
                  width="36"
                  height="36"
                  alt="bitcoin"
                />
                <h2 className="text-[#0B1426] text-2xl font-semibold">Bitcoin</h2>
                <p className="text-[#5D667B] text-base font-semibold">BTC</p>
                <span className="text-white font-medium bg-[#808A9D] text-base p-2 rounded-lg ml-4">Rank #1</span>
              </div>
              <div className="flex gap-2 items-center lg:gap-5">
                <h2 className="text-[#0B1426] font-semibold text-2xl">$46,953.04</h2>
                <div className="flex items-center gap-2 rounded-[4px] py-1 px-2 bg-[#EBF9F4]">
                  <ArrowUp />
                  <h3 className="text-[#14B079] text-base font-medium">2.51%</h3>
                </div>
                <h3 className="text-[#768396] font-medium text-sm">(24H)</h3>
              </div>
              <p className="text-[#0B1426] text-base font-medium mb-6">₹ 39,42,343</p>
              <div className="">
                <hr className="" />
                <PriceChart />
              </div>
            </div>
            <div className="">
              <CustomTab />
              <div className="bg-white rounded-lg pt-4 pb-7 px-4 mb-4">
                <div className="p-3">
                  <h2 className="text-[#0F1629] font-semibold text-2xl mb-4">Performance</h2>
                  <div className="flex justify-between">
                    <div className="">
                      <h4 className="text-[#44475B] text-sm font-normal mb-2">Today’s Low</h4>
                      <h3 className="text-[#44475B] text-base font-medium">46,930.22</h3>
                    </div>
                    <div className="">
                      <h4 className="text-[#44475B] text-sm font-normal mb-2">Today’s Low</h4>
                      <h3 className="text-[#44475B] text-base font-medium">46,930.22</h3>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h2 className="text-[#0F1629] font-semibold text-2xl mb-4">Fundamentals</h2>
                  <div className="flex justify-between">
                    <div className="flex flex-col w-[40%]">
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Bitcoin Price</h4>
                        <h3 className="text-[#111827] text-base font-medium">$16,815.46</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">24h Low / 24h High</h4>
                        <h3 className="text-[#111827] text-base font-medium">$16,382.07 / $16,874.12</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">7d Low / 7d High</h4>
                        <h3 className="text-[#111827] text-base font-medium">$16,382.07 / $16,874.12</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Trading Volume</h4>
                        <h3 className="text-[#111827] text-base font-medium">$23,249,202,782</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Market Cap Rank</h4>
                        <h3 className="text-[#111827] text-base font-medium">#1</h3>
                      </div>
                    </div>
                    <div className="flex flex-col w-[40%]">
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Market Cap</h4>
                        <h3 className="text-[#111827] text-base font-medium">$323,507,290,047</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Market Cap Dominance</h4>
                        <h3 className="text-[#111827] text-base font-medium">38.343%</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">Volume / Market Cap</h4>
                        <h3 className="text-[#111827] text-base font-medium">0.0718</h3>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">All-Time High</h4>
                        <div className="flex flex-col">
                          <h3 className="text-sm text-end font-medium text-[#111827]">$69,044.77 <span className="text-[#F7324C]">-75.6%</span></h3>
                          <p className="text-[#111827] font-normal text-xs">Nov 10, 2021 (about 1 year)</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-[#D3E0E6] py-3">
                        <h4 className="text-[#768396] text-sm font-normal">All-Time Low</h4>
                        <div className="flex flex-col">
                          <h3 className="text-sm text-end font-medium text-[#111827]">$67.81 <span className="text-[#0FBA83]">24729.1% </span></h3>
                          <p className="text-[#111827] font-normal text-xs">Jul 06, 2013 (over 9 years)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg pt-4 pb-7 px-4" id="sentiment">
                <div className="p-3">
                  <h2 className="text-[#0F1629] font-semibold text-2xl mb-2">Sentiment</h2>
                  <div className="flex gap-3 items-center mb-4">
                    <h2 className="text-[#44475B] font-semibold text-lg">Key events</h2>
                    <InfoIcon />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex gap-2 bg-[#E8F4FD] rounded-xl p-4 pb-8">
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.046875" width="44" height="44" rx="22" fill="#0082FF" />
                        <path d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z" fill="white" />
                      </svg>
                      <div className="flex flex-col lg:w-[365px]">
                        <h3 className="text-[#191C1F] text-sm font-medium mb-2">
                          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                        </h3>
                        <p className="text-[#3E5765] font-normal text-sm">
                          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac
                          consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 bg-[#EBF9F4] rounded-xl p-4 pb-8">
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.046875" width="44" height="44" rx="22" fill="#0FBA83" />
                        <path d="M26.2308 16.1238H33V22.893" stroke="white" stroke-width="1.69231" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699" stroke="white" stroke-width="1.69231" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div className="flex flex-col lg:w-[365px]">
                        <h3 className="text-[#191C1F] text-sm font-medium mb-2">
                          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                        </h3>
                        <p className="text-[#3E5765] font-normal text-sm">
                          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac
                          consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-center mb-3 pl-3">
                  <h2 className="text-[#44475B] font-semibold text-lg">Analyst Estimates</h2>
                  <InfoIcon />
                </div>
                <div className="p-3 flex gap-4">
                  <div className="flex justify-center items-center w-[117px] h-[120px] rounded-[50%] bg-[#EBF9F4]">
                    <h1 className="text-[#0FBA83] font-medium text-4xl">76<span className="text-base">%</span></h1>
                  </div>
                  <div className="flex flex-col lg:w-[503px] pt-5 gap-3">
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#7C7E8C] font-medium text-[15px] w-[53px]">Buy</h3>
                      <span className="lg:w-[349px] h-2 bg-[#00B386] rounded-[2px]"></span>
                      <h3 className="text-[#7C7E8C] font-medium text-[15px]">76%</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#7C7E8C] font-medium text-[15px] w-[53px]">Hold</h3>
                      <span className="lg:w-[33px] h-2 bg-[#C7C8CE] rounded-[2px]"></span>
                      <h3 className="text-[#7C7E8C] font-medium text-[15px]">8%</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#7C7E8C] font-medium text-[15px] w-[53px]">Buy</h3>
                      <span className="lg:w-[33px] h-2 bg-[#F7324C] rounded-[2px]"></span>
                      <h3 className="text-[#7C7E8C] font-medium text-[15px]">66%</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <Tokenomics/>
            <Team/>
          </div>
          <div className="lg:w-[25%] w-full">
            <div className="p-4 bg-[#0052FE] rounded-2xl flex flex-col items-center gap-8 py-8 mb-8">
              <h2 className="text-white font-bold text-2xl w-[268px] text-center">Get Started with KoinX for FREE</h2>
              <p className="text-white font-medium text-sm text-center">With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.
              </p>
              <GetStarted />
              <button className="flex justify-center items-center w-[237px] bg-white rounded-lg py-3 gap-2">
                <h2 className="text-[#0F1629] text-base font-semibold">Get Started for FREE</h2>
                <ArrowRight />
              </button>
            </div>
            <div className="flex flex-col bg-white rounded-lg p-4">
              <h2 className="font-semibold text-2xl mb-5">Trending Coins (24h)</h2>
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <Etherium />
                  <h3 className="text-[#0F1629] text-base font-medium">Ethereum(ETH)</h3>
                </div>
                <div className="flex items-center gap-2 rounded-[4px] py-1 px-2 bg-[#EBF9F4]">
                  <ArrowUp />
                  <h3 className="text-[#14B079] text-base font-medium">8.21%</h3>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <Image
                    src="/assets/bitcoin.png"
                    width="24"
                    height="24"
                    alt="bitcoin"
                  />
                  <h3 className="text-[#0F1629] text-base font-medium">Bitcoin (BTC)</h3>
                </div>
                <div className="flex items-center gap-2 rounded-[4px] py-1 px-2 bg-[#EBF9F4]">
                  <ArrowUp />
                  <h3 className="text-[#14B079] text-base font-medium">5.26%</h3>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <Image
                    src="/assets/matic.png"
                    width="24"
                    height="24"
                    alt="bitcoin"
                  />
                  <h3 className="text-[#0F1629] text-base font-medium">Polygon (MATIC)</h3>
                </div>
                <div className="flex items-center gap-2 rounded-[4px] py-1 px-2 bg-[#EBF9F4]">
                  <ArrowUp />
                  <h3 className="text-[#14B079] text-base font-medium">4.32%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
