console.log("init");

function removeNodes(...nodes) {
  try {
    nodes.forEach((node) => node.remove());
  } catch (e) {}
}

// /gp/cart/view.html
removeNodes(document.querySelector(".maple-banner"));
removeNodes(document.querySelector(".prime-cart-upsell"));
removeNodes(document.querySelector("#signup-cta-card"));

// /gp/buy/spc/handlers/display.html
removeNodes(
  document.querySelector("._osu-widget-cards_style_container__1InpL")
);
removeNodes(document.querySelector(".prime-ad-banner-content"));
removeNodes(document.querySelector(".prime-fake-radio"));
removeNodes(document.querySelectorAll(".a-fixed-left-grid-col > .a-row")[4]);
