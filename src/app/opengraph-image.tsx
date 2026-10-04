import { ImageResponse } from "next/og";

export const alt = "DIY Investing Course — Know what you own. Know why.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "1200px", height: "630px", display: "flex", alignItems: "center", padding: "68px", backgroundColor: "#f5f5ef", color: "#18352d", fontFamily: "Arial, sans-serif" }}>
        <div style={{ width: "1064px", height: "494px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 54px", position: "relative", overflow: "hidden", backgroundColor: "#fbfbf7", border: "1px solid #e0e5dc" }}>
          <div style={{ width: "590px", display: "flex", flexDirection: "column", alignItems: "flex-start", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "42px" }}>
              <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#18352d", borderRadius: "10px", color: "#c9fa79", fontSize: "13px", fontWeight: 800 }}>D/I</div>
              <div style={{ display: "flex", flexDirection: "column", color: "#18352d", fontSize: "15px", fontWeight: 800, letterSpacing: "1.5px" }}><span>DIY</span><span style={{ marginTop: "3px", color: "#738074", fontSize: "8px", letterSpacing: "2.4px" }}>INVESTING COURSE</span></div>
            </div>
            <div style={{ marginBottom: "16px", color: "#71876a", fontSize: "11px", letterSpacing: "2.3px", fontWeight: 700 }}>A FREE, COMPLETE INVESTING COURSE</div>
            <div style={{ display: "flex", flexDirection: "column", color: "#112920", fontSize: "65px", lineHeight: 1.02, fontWeight: 750, letterSpacing: "-4px" }}><span>Know what</span><span>you own. <span style={{ color: "#668d49", fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>Know why.</span></span></div>
            <div style={{ marginTop: "24px", color: "#64736a", fontSize: "15px" }}>27 practical lessons. Zero accounts. No stock picks.</div>
          </div>
          <div style={{ width: "307px", height: "374px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "23px", overflow: "hidden", backgroundColor: "#18352d", color: "#f3f4e9", borderRadius: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#c1cbbf", fontSize: "9px", letterSpacing: "1.5px", fontWeight: 700 }}><span>THE LONG GAME</span><span style={{ color: "#c9fa79" }}>● LEARN</span></div>
            <svg width="310" height="116" viewBox="0 0 310 116" style={{ position: "absolute", right: "0px", bottom: "36px" }}><path d="M0 23H310M0 63H310M0 103H310" stroke="#ffffff" strokeOpacity=".11" /><path d="M16 94 C44 85 58 101 82 74 S123 84 151 60 S195 71 216 39 S255 48 294 15" fill="none" stroke="#c9fa79" strokeWidth="3" strokeLinecap="round" /><circle cx="294" cy="15" r="5" fill="#c9fa79" /></svg>
            <div style={{ display: "flex", flexDirection: "column", position: "relative" }}><span style={{ color: "#c9fa79", fontSize: "9px", letterSpacing: "2px" }}>FIELD NOTE NO. 001</span><span style={{ marginTop: "8px", fontFamily: "Georgia, serif", fontSize: "44px", lineHeight: 1.02 }}>Clarity<br />compounds.</span><span style={{ marginTop: "12px", color: "#bdcbbc", fontSize: "10px" }}>A learning curve, not a market forecast.</span></div>
            <div style={{ paddingTop: "11px", display: "flex", justifyContent: "space-between", position: "relative", borderTop: "1px solid #ffffff35", color: "#bac8b5", fontSize: "8px", letterSpacing: "1.1px" }}><span>LEARN · QUESTION · GROW</span><span>↗</span></div>
          </div>
          <div style={{ position: "absolute", right: "33px", bottom: "18px", color: "#80927b", fontSize: "8px", letterSpacing: "1.1px" }}>DIYINVESTINGCOURSE.COM</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
