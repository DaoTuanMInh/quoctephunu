"use client";

import React from "react";

interface NightGardenSceneProps {
  target?: "phuong" | "me" | "both";
  sisterName?: string;
  customMessage?: string;
}

export default function NightGardenScene({
  target = "phuong",
  sisterName = "Phượng",
  customMessage,
}: NightGardenSceneProps) {
  return (
    <div className={`night-garden-container ${target === "me" ? "theme-classic" : "theme-colorful"}`}>


    <div className="night" aria-hidden="true"></div>
    <div className="moon" aria-hidden="true">
      <div className="moon__halo moon__halo--1"></div>
      <div className="moon__halo moon__halo--2"></div>
      <div className="moon__disc">
        <div className="moon__crater moon__crater--1"></div>
        <div className="moon__crater moon__crater--2"></div>
        <div className="moon__crater moon__crater--3"></div>
        <div className="moon__crater moon__crater--4"></div>
        <div className="moon__crater moon__crater--5"></div>
        <div className="moon__crater moon__crater--6"></div>
        <div className="moon__shade"></div>
      </div>
      <div className="moon__sparkle moon__sparkle--1"></div>
      <div className="moon__sparkle moon__sparkle--2"></div>
      <div className="moon__sparkle moon__sparkle--3"></div>
    </div>
    <div className="sky-fx" aria-hidden="true">
      <div className="shooting-star shooting-star--1"></div>
      <div className="shooting-star shooting-star--2"></div>
      <div className="shooting-star shooting-star--3"></div>
    </div>

    <div className="horizon" aria-hidden="true"></div>

    <div className="side-garden side-garden--left" aria-hidden="true">
      <div className="vine vine--a">
        <div className="vine__leaf" style={{ '--i': '0' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '1' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '2' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '3' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '4' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '5' } as React.CSSProperties}></div>
        <div className="vine__bloom vine__bloom--1"></div>
        <div className="vine__bloom vine__bloom--2"></div>
      </div>
      <div className="vine vine--b">
        <div className="vine__leaf" style={{ '--i': '0' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '1' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '2' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '3' } as React.CSSProperties}></div>
        <div className="vine__bloom vine__bloom--1"></div>
      </div>
      <div className="side-bush"></div>
    </div>

    <div className="side-garden side-garden--right" aria-hidden="true">
      <div className="vine vine--a">
        <div className="vine__leaf" style={{ '--i': '0' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '1' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '2' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '3' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '4' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '5' } as React.CSSProperties}></div>
        <div className="vine__bloom vine__bloom--1"></div>
        <div className="vine__bloom vine__bloom--2"></div>
      </div>
      <div className="vine vine--b">
        <div className="vine__leaf" style={{ '--i': '0' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '1' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '2' } as React.CSSProperties}></div>
        <div className="vine__leaf" style={{ '--i': '3' } as React.CSSProperties}></div>
        <div className="vine__bloom vine__bloom--1"></div>
      </div>
      <div className="side-bush"></div>
    </div>

    <div className="fireflies" aria-hidden="true">
      <div className="firefly" style={{ '--fx': '4vw', '--fy': '62vh', '--t': '7s', '--d': '0s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '11vw', '--fy': '40vh', '--t': '9s', '--d': '1.4s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '18vw', '--fy': '72vh', '--t': '8s', '--d': '2.8s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '27vw', '--fy': '30vh', '--t': '10s', '--d': '0.9s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '38vw', '--fy': '55vh', '--t': '7.5s', '--d': '3.6s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '62vw', '--fy': '48vh', '--t': '9.5s', '--d': '2.1s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '73vw', '--fy': '34vh', '--t': '8.5s', '--d': '4.3s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '82vw', '--fy': '66vh', '--t': '11s', '--d': '1.7s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '90vw', '--fy': '44vh', '--t': '8.2s', '--d': '5.1s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '96vw', '--fy': '58vh', '--t': '9.8s', '--d': '3.2s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '7vw', '--fy': '22vh', '--t': '10.5s', '--d': '6s' } as React.CSSProperties}></div>
      <div className="firefly" style={{ '--fx': '94vw', '--fy': '20vh', '--t': '9.2s', '--d': '4.8s' } as React.CSSProperties}></div>
    </div>

    <div className="greeting">
      <div className="happy-woman-day">𝓗𝓪𝓹𝓹𝔂 𝔀𝓸𝓶𝓮𝓷'𝓼 𝓭𝓪𝔂 2️0/1️0</div>
      <h1 className="greeting__title">
        <span className="greeting__word" style={{ '--i': '0' } as React.CSSProperties}>Chúc</span>
        <span className="greeting__word" style={{ '--i': '1' } as React.CSSProperties}>mừng</span>
        <span className="greeting__word" style={{ '--i': '2' } as React.CSSProperties}>ngày</span>
        <span className="greeting__word" style={{ '--i': '3' } as React.CSSProperties}>Phụ</span>
        <span className="greeting__word" style={{ '--i': '4' } as React.CSSProperties}>nữ</span>
        <span className="greeting__word" style={{ '--i': '5' } as React.CSSProperties}>Việt</span>
        <span className="greeting__word" style={{ '--i': '6' } as React.CSSProperties}>Nam</span>
        <span className="greeting__word greeting__word--date" style={{ '--i': '7' } as React.CSSProperties}>20/10</span>
      </h1>
            <p className="greeting__sub">
        {customMessage ? (
          <span className="greeting__line">{customMessage}</span>
        ) : target === "me" ? (
          <span className="greeting__line">
            Gửi <strong className="greeting__name">mẹ dấu yêu</strong> — cảm ơn mẹ đã luôn
            yêu thương và chăm sóc chúng con <span className="greeting__heart">💕</span>
          </span>
        ) : target === "both" ? (
          <>
            <span className="greeting__line">
              Chúc <strong className="greeting__name">{sisterName}</strong> ngày 20/10 thật nhiều niềm vui, xinh tươi và hạnh phúc <span className="greeting__heart">❤</span>
            </span>
            <span className="greeting__line">
              Gửi <strong className="greeting__name">mẹ dấu yêu</strong> — cảm ơn mẹ đã luôn
              yêu thương và chăm sóc chúng con <span className="greeting__heart">💕</span>
            </span>
          </>
        ) : (
          <>
            <span className="greeting__line">
              Chúc <strong className="greeting__name">Phượng</strong> ngày 20/10 ngập tràn niềm vui, luôn xinh đẹp và rạng rỡ như những đóa hoa nở rộ.
            </span>
            <span className="greeting__line">
              Mong bạn luôn hạnh phúc, may mắn, bình an và gặt hái được mọi điều ước mơ trong cuộc sống <span className="greeting__heart">❤</span>
            </span>
          </>
        )}
      </p>
    </div>
    <div className="flowers">
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
  
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
  
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
          <div className="flower__line__leaf flower__line__leaf--5"></div>
          <div className="flower__line__leaf flower__line__leaf--6"></div>
        </div>
      </div>
  
      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
  
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
  
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>
  
      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
  
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
  
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>
  
      <div className="flower flower--4">
        <div className="flower__leafs flower__leafs--4">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--5">
        <div className="flower__leafs flower__leafs--5">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      {target !== "me" && (
        <>
      <div className="flower flower--6">
        <div className="flower__leafs flower__leafs--6">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--7">
        <div className="flower__leafs flower__leafs--7">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--8">
        <div className="flower__leafs flower__leafs--8">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--9">
        <div className="flower__leafs flower__leafs--9">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--10">
        <div className="flower__leafs flower__leafs--10">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>
        </>
      )}

      <div className="grow-ans" style={{ '--d': '1.2s' } as React.CSSProperties}>
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>
  
      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>
  
      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>
  
      <div className="grow-ans" style={{ '--d': '2.4s' } as React.CSSProperties}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf"></div>
        </div>
      </div>
  
      <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf"></div>
        </div>
      </div>
  
      <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
        <div className="flower__g-front">
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__line"></div>
        </div>
      </div>
  
      <div className="grow-ans" style={{ '--d': '3.2s' } as React.CSSProperties}>
        <div className="flower__g-fr">
          <div className="leaf"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
        </div>
      </div>
  
      <div className="long-g long-g--0">
        <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.4s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--1">
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.8s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--2">
        <div className="grow-ans" style={{ '--d': '4s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.4s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--3">
        <div className="grow-ans" style={{ '--d': '4s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--4">
        <div className="grow-ans" style={{ '--d': '4s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--5">
        <div className="grow-ans" style={{ '--d': '4s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--6">
        <div className="grow-ans" style={{ '--d': '4.2s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.4s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.6s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.8s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
  
      <div className="long-g long-g--7">
        <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.2s' } as React.CSSProperties}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.5s' } as React.CSSProperties}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
    </div>

    <div className="hearts" aria-hidden="true">
      <div className="heart-float" style={{ '--x': '-46vmin', '--s': '2.6vmin', '--t': '9s', '--d': '0s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-37vmin', '--s': '1.7vmin', '--t': '11s', '--d': '1.3s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-29vmin', '--s': '3.2vmin', '--t': '8s', '--d': '2.6s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-21vmin', '--s': '2vmin', '--t': '12s', '--d': '0.7s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-13vmin', '--s': '2.8vmin', '--t': '10s', '--d': '3.4s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-5vmin', '--s': '1.6vmin', '--t': '13s', '--d': '1.9s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '3vmin', '--s': '2.4vmin', '--t': '9.5s', '--d': '4.2s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '11vmin', '--s': '3vmin', '--t': '11.5s', '--d': '0.4s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '19vmin', '--s': '1.8vmin', '--t': '8.5s', '--d': '2.1s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '27vmin', '--s': '2.6vmin', '--t': '12.5s', '--d': '3.8s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '35vmin', '--s': '2.2vmin', '--t': '10.5s', '--d': '1.1s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '43vmin', '--s': '3.4vmin', '--t': '9.2s', '--d': '5s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '-41vmin', '--s': '2.1vmin', '--t': '13.5s', '--d': '6.1s' } as React.CSSProperties}><div className="heart"></div></div>
      <div className="heart-float" style={{ '--x': '39vmin', '--s': '1.9vmin', '--t': '11.8s', '--d': '7.3s' } as React.CSSProperties}><div className="heart"></div></div>
    </div>

    <div className="petals" aria-hidden="true">
      <div className="petal" style={{ '--x': '-44vmin', '--s': '2.4vmin', '--t': '12s', '--d': '0s', '--drift': '10vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '-33vmin', '--s': '1.8vmin', '--t': '15s', '--d': '2.2s', '--drift': '-8vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '-22vmin', '--s': '2.8vmin', '--t': '11s', '--d': '4.5s', '--drift': '12vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '-11vmin', '--s': '2vmin', '--t': '14s', '--d': '1.4s', '--drift': '-6vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '0vmin', '--s': '2.6vmin', '--t': '13s', '--d': '6.2s', '--drift': '9vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '12vmin', '--s': '1.9vmin', '--t': '16s', '--d': '3.1s', '--drift': '-11vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '23vmin', '--s': '2.5vmin', '--t': '12.5s', '--d': '7.4s', '--drift': '7vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '34vmin', '--s': '2.1vmin', '--t': '14.5s', '--d': '5.3s', '--drift': '-9vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '45vmin', '--s': '3vmin', '--t': '10.5s', '--d': '8.6s', '--drift': '6vmin' } as React.CSSProperties}></div>
      <div className="petal" style={{ '--x': '-50vmin', '--s': '2.2vmin', '--t': '15.5s', '--d': '9.7s', '--drift': '14vmin' } as React.CSSProperties}></div>
    </div>

    <div className="butterflies" aria-hidden="true">
      <div className="butterfly butterfly--1">
        <div className="butterfly__wing butterfly__wing--l"></div>
        <div className="butterfly__body"></div>
        <div className="butterfly__wing butterfly__wing--r"></div>
      </div>
      <div className="butterfly butterfly--2">
        <div className="butterfly__wing butterfly__wing--l"></div>
        <div className="butterfly__body"></div>
        <div className="butterfly__wing butterfly__wing--r"></div>
      </div>
    </div>
    </div>
  );
}
