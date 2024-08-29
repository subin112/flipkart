const img = document.getElementById("flipname");
const explore = document.getElementById("explore");
const plus = document.getElementById("plus");
const left = document.getElementById("left");
const search = document.getElementById("search");
const ogin = document.getElementById("login");
const rock = document.getElementById("seller");
const more = document.getElementById("more");
const cartImg = document.getElementById("cart-img");
const Cart = document.getElementById("cart");
const check = document.getElementById("check");
const filter = document.getElementById("filter");
const brand = document.getElementById("brand");
const checkBox = document.querySelector(".checkbox");
const sidBar = document.querySelector(".sidebar");
const filtered = document.getElementById("filter");
const cat = document.querySelector(".catogories");
const price = document.querySelector(".price-range");
const priceTxt = document.querySelector(".price-span");
const rangeTop = document.querySelector(".range-top");
const Lrange = document.getElementById("left-range");
const midrange = document.querySelector(".mid-range");
const Rrange = document.getElementById("right-range");
const minMax = document.querySelector(".min-max");
const branded = document.querySelector(".brand");
const checkInput = document.querySelectorAll(".checkboxInput");
const topPadding = document.querySelector(".toper-padding");
const downPadding = document.querySelector(".down-padding");
const main = document.querySelector(".mainTop-padding");
const searchInput =document.querySelector(".mobile")
const bottomDiv = document.querySelector("bottom-div")
  const btmBtnDiv = document.querySelector(".btmBtnDiv");
const rightContent = document.querySelector(".right-content")



document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("index.json");
  const data = await response.json();

  img.src = data.header.img;
  explore.innerHTML = data.header.img1;
  plus.innerHTML = data.header.img2;
  left.src = data.header.img3;
  search.src = data.header.search;
  ogin.innerHTML = data.header.login;
  rock.innerHTML = data.header.Become;
  more.innerHTML = data.header.more;

  cartImg.src = data.header.image2;
  Cart.innerHTML = data.header.carter;

  data.subHeader.forEach((item) => {
    const navItem = document.createElement("div");
    navItem.className = "nav-item";
    navItem.innerHTML = `<span>${item.navText}</span><img src="${item.navArrow}">`;
    check.appendChild(navItem);
  });
  filtered.innerHTML = `<span>${data.sideBar.filterTxt}</span>`;

  const catty = document.createElement("div");
  catty.className = "txt";
  catty.innerHTML = `<span>${data.sideBar.catogoryTxt}</span>`;
  cat.appendChild(catty);

  const catogoryTxt1 = document.createElement("div");
  catogoryTxt1.className = "catogory-Txt1";
  catogoryTxt1.innerHTML = `<img src="${data.sideBar.mobileimg}"> <a>${data.sideBar.mobileAccessories}</a>`;
  cat.appendChild(catogoryTxt1);

  const dram = document.createElement("div");
  dram.className = "rip";
  dram.innerHTML = `<span class ="peer">${data.sideBar.mobileTxt}</span>`;
  cat.appendChild(dram);

  priceTxt.innerText = data.sideBar.priceTxt;

  const ranger = document.createElement("div");
  ranger.className = "range-top";
  rangeTop.appendChild(ranger);

  const LrangeDiv = document.createElement("div");
  LrangeDiv.className = "round";
  Lrange.appendChild(LrangeDiv);

  const midrangeDiv = document.createElement("div");
  midrangeDiv.className = "mid-line";
  midrange.appendChild(midrangeDiv);

  const RrangeDiv = document.createElement("div");
  RrangeDiv.className = "round";
  Rrange.appendChild(RrangeDiv);

  const min = document.createElement("div");
  min.className = "min";
  const minSelect = document.createElement("select");
  data.sideBar.min.forEach((item) => {
    const option = document.createElement("option");
    option.innerHTML = item;
    minSelect.appendChild(option);
  });
  min.appendChild(minSelect);
  minMax.appendChild(min);

  const toTxt = document.createElement("div");
  toTxt.className = "tooth";
  toTxt.innerHTML = data.sideBar.toTxt;
  minMax.appendChild(toTxt); //

  const max = document.createElement("div");
  max.className = "max";
  const maxSelect = document.createElement("select");
  data.sideBar.max.forEach((item) => {
    const option = document.createElement("option");
    option.innerHTML = item;
    maxSelect.appendChild(option);
  });
  max.appendChild(maxSelect);
  minMax.appendChild(max); //

  const brandTxt = document.createElement("div");
  brandTxt.className = "branded";
  brandTxt.innerHTML = `<span>${data.sideBar.brandTxt}</span><img src="${data.sideBar.brandIcon}">`;
  branded.appendChild(brandTxt);

  // brand search
  const brandCount = document.createElement("div");
  brandCount.className = "brand-count";

  const brandSearch = document.createElement("div");
  brandSearch.className = "search-content";
  const searchDiv = document.createElement("div");
  searchDiv.className = "search-div";
  searchDiv.innerHTML = `<img src="${data.sideBar.searchIcon}">
    <input type="text"  class="brand-input"  placeholder="${data.sideBar.brandInput}">`;

  brandSearch.appendChild(searchDiv);
  brandCount.appendChild(brandSearch);
  branded.appendChild(brandCount);
  const brandMOre = document.createElement("div");
  brandMOre.className = "rolex";
  brandMOre.innerHTML = data.sideBar.more;

  branded.appendChild(brandMOre);
  brandTxt.addEventListener("click", () => {
    if (
      brandCount.style.display === "none" ||
      brandCount.style.display === ""
    ) {
      brandCount.style.display = "block";
    } else {
      brandCount.style.display = "none";
    }
  });

  // brand search input

  const brandInput = document.querySelector(".brand-input");
  // console.log(brandInput)
  brandInput.addEventListener("input", function () {
    const searchItem = this.value.toLowerCase();

    const filteredItem = data.sideBar.brand.filter((product) =>
      product.includes(searchItem.toLowerCase())
    );
    console.log(filteredItem);
    products(filteredItem);
  });

  // brand checkboxes
  const checkboxContent = document.createElement("div");
  checkboxContent.className = "checkbox-content";

  // brand checkbox loop
  data.sideBar.brand.forEach((item) => {
    const checkboxItem = document.createElement("div");
    checkboxItem.className = "checkbox-item";
    checkboxItem.innerHTML = ` <label>
      <input type="checkbox" " name="brand"  class="checkboxInput" value="${item}">
      <div class="checkboxTxt">  ${item}</div>
    </label>`;
    checkboxContent.appendChild(checkboxItem);
  });
  brandCount.appendChild(checkboxContent);

  // brand filter
  const checkInputs = document.querySelectorAll(".checkboxInput");
  function filterData() {
    const selectedBrands = Array.from(checkInputs)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value.toLowerCase());

    console.log("Selected Brands:", selectedBrands);

    if (selectedBrands.length > 0) {
      const filteredProducts = data.main.mobileGrid.filter((product) =>
        selectedBrands.includes(product.id.toLowerCase())
      );
      console.log("Filtered Products:", filteredProducts);
      products(filteredProducts);
    } else {
      console.log("All Products:", data.main.mobileGrid);
      products(data.main.mobileGrid);
    }
  }

  document.querySelectorAll(".checkboxInput").forEach((checkbox) => {
    checkbox.addEventListener("change", filterData);
  });

  // filterData()

  // flipkart Assured img

  const flipImgContent = document.createElement("div");
  flipImgContent.className = "flipImgContent";
  flipImgContent.innerHTML = `<input type="checkbox">`;

  const flipkartImg = document.createElement("div");
  flipkartImg.className = "flip-img";
  flipkartImg.innerHTML = `<img src="${data.sideBar.flipCheck}">`;
  flipImgContent.appendChild(flipkartImg);
  const flipspan = document.createElement("div");
  flipspan.className = "flip-span";
  flipspan.innerHTML = `<span>?</span>`;
  flipImgContent.appendChild(flipspan);

  sidBar.appendChild(flipImgContent);

  // sidesection
  const sideSections = document.createElement("div");
  sideSections.className = "side-section";
  data.sideBar.sidebarSections.forEach((item) => {
    const section = document.createElement("div");
    section.className = item.id;
    section.id = item.nameId;
    const secHead = document.createElement("div");
    secHead.className = "sec-head";
    secHead.innerHTML = `<span>${item.sectionName}</span><img class="drop-img"  src="${item.brandIcon}">`;
    section.appendChild(secHead);

    const dropDownImg = document.querySelector(".drop-img");
    console.log(dropDownImg);
    secHead.addEventListener("click", () => {
      if (
        secDropdown.style.display === "none" ||
        secDropdown.style.display === ""
      ) {
        secDropdown.style.display = "block";
      } else {
        secDropdown.style.display = "none";
      }
    });

    secHead.addEventListener("click", function () {
      dropDownImg.style.transform =
        dropDownImg.style.transform === "rotate(180deg)"
          ? "rotate(0deg)"
          : "rotate(180deg)";
    });

    const secDropdown = document.createElement("div");
    secDropdown.className = "sec-dropdown";
    item.selectedItems.forEach((checkItem) => {
      const checkDiv = document.createElement("div");
      checkDiv.className = "checkDiv";

      const checkInput = document.createElement("input");
      checkInput.type = "checkbox";
      checkDiv.appendChild(checkInput);
      const checkLabel = document.createElement("label");
      checkLabel.innerHTML = checkItem;
      checkDiv.appendChild(checkLabel);

      secDropdown.appendChild(checkDiv);

      section.appendChild(secDropdown);
      sideSections.appendChild(section);
    });
    const moreBtn = document.createElement("div");
    moreBtn.className = "hp";
    moreBtn.innerHTML = `<button>${item.more}</button>`;
    moreBtn.className = item.moreDisplay;
    section.appendChild(moreBtn);
  });

  sidBar.appendChild(sideSections);

  // footer
  data.footer.footerTop.forEach((element) => {
    const footerGrid = document.createElement("div");
    footerGrid.className = "footer-grid";
    const gridPadding = document.createElement("div");
    gridPadding.className = "grid-padding";
    footerGrid.appendChild(gridPadding);
    const gridHead = document.createElement("div");
    gridHead.className = "grid-head";
    gridHead.innerText = element.topHead;
    gridPadding.appendChild(gridHead);
    const topUl = document.createElement("ul");
    element.footerGrid.forEach((topItem) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a>${topItem}</a>`;
      topUl.appendChild(listItem);
    });
    gridPadding.appendChild(topUl);
    topPadding.appendChild(footerGrid);
  });

  data.footer.footerBottom.forEach((item) => {
    const downItemDiv = document.createElement("div");
    downItemDiv.className = "down-item";
    downItemDiv.innerHTML = `<img src="${item.footerImg}">
        <span>${item.imgSpan}</span>`;
    downPadding.appendChild(downItemDiv);
  });
  // ----mainContent

  const topMain = document.createElement("div");
  topMain.className = "top-content";
  main.appendChild(topMain);
  // first
  data.main.mainHeader.headerTop.forEach((item) => {
    const topitem = document.createElement("div");
    topitem.className = "top-item";
    topitem.innerHTML = `<span>${item.text}</span>
<img src="${item.topIcon}" alt="">`;
    topMain.appendChild(topitem);
  });
  // second
  const second = document.createElement("div");
  second.className = "top-middle";
  second.innerHTML = `<span>${data.main.mainHeader.mainHead}</span>`;
  main.appendChild(second);
  // third
  const heead = document.createElement("div");
  heead.className = "head-btn";
  main.appendChild(heead);
  const headUl = document.createElement("ul");
  heead.appendChild(headUl);
  data.main.mainHeader.headFilter.forEach((item) => {
    const ulItem = document.createElement("li");
    ulItem.innerText = item.name;
    ulItem.id = item.id;
    heead.appendChild(ulItem);
  });
  // low price to high price
  const lowToHigh = document.getElementById("filter4");
  lowToHigh.addEventListener("click", function () {
    const arrayCopy = [data.main.mobileGrid];
    const sortedItems = arrayCopy.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    products(sortedItems);
  });
  // high to low price
  const hightoLow = document.getElementById("filter5");
  hightoLow.addEventListener("click", function () {
    const arrayItems = [data.main.mobileGrid];
    const sortedArray = arrayItems.sort(
      (a, b) => parseFloat(b.price) - a.price
    );
    products(sortedArray);
  });
// searrch input
  searchInput.addEventListener("input",function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = data.main.mobileGrid.filter((item)=> item.mobileName.toLowerCase().include(searchTerm)
  );
  products(filteredProducts);

  });
// right bottom


      const btnSpan = document.createElement("span");
      btnSpan.innerText = data.main.bottomBtn.btmSpan;
      // btmBtnDiv.appendChild(btnSpan);
      // bottomBtn.appendChild(btmBtnDiv);

const prev =  document.createElement("div")
prev.className = "prev"
prev.innerHTML = data.main.bottomBtn.prev
prev.style.display = "none"
// bottomDiv.appendChild(prev)
// bottomBtn.appendChild(bottomDiv)
  
// right phone
//  rightContent.appendChild(bottomBtn);
  
      function products(productItem, page = 1, perPage = 10) {
        const rightContent = document.querySelector(".right-content");
        rightContent.innerHTML = "";

     const start = (page - 1) * perPage;
        const end = start + perPage;
        const paginatedItems = productItem.slice(start, end);

        paginatedItems.forEach((item) => {
          const cardPadding = document.createElement("div");
          cardPadding.className = "card-padding";

          const card = document.createElement("div");
          card.className = "card";

          const cardLeft = document.createElement("div");
          cardLeft.className = "card-left";

          const cardLeftImg = document.createElement("div");
          cardLeftImg.className = "phone-img";
          cardLeftImg.innerHTML = `<img src="${item.mobileImg}">`;
          cardLeft.appendChild(cardLeftImg);
          const cardLeftInput = document.createElement("div");
          cardLeftInput.className = "rebel";

          cardLeftInput.innerHTML = `<input type="checkbox"> <span>${item.checkBoxTxt}`;
          cardLeft.appendChild(cardLeftInput);
          const likeImg = document.createElement("div");
          likeImg.className = "like-img";
          likeImg.innerHTML = `<img src="${item.likeImg}">`;
          cardLeft.appendChild(likeImg);
          card.appendChild(cardLeft);

          const cardRight = document.createElement("div");
          cardRight.className = "card-right";
          // card.appendChild(cardRight)

          const rightFirst = document.createElement("div");
          rightFirst.className = "right-first";
          const mobileName = document.createElement("h2");
          mobileName.innerText = item.mobileName;
          rightFirst.appendChild(mobileName);

          const rating = document.createElement("div");
          rating.className = "rating";
          const rateBtn = document.createElement("div");
          rateBtn.className = "rate-btn";
          rateBtn.innerHTML = `<span>${item.rateTxt}<img src="${item.rateImg}"></span>`;
          rating.appendChild(rateBtn);
          // let html = ``
          // rateBtn.insertAdjacentHTML('afterbegin', html)
          const review = document.createElement("p");
          review.innerText = item.rateNumber;
          rating.appendChild(review);
          rightFirst.appendChild(rating);

          const specUl = document.createElement("ul");

          item.specification.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = item;
            specUl.appendChild(listItem);
          });
          rightFirst.appendChild(specUl);

          //  rating.appendChild(rateBtn)

          cardRight.appendChild(rightFirst);

          const rightEnd = document.createElement("div");
          rightEnd.className = "right-end";
          const endTop = document.createElement("div");
          endTop.className = "end-top";
          const priceDetail = document.createElement("div");
          priceDetail.className = "price-details";

          const priceTop = document.createElement("div");
          priceTop.className = "price-top";
          priceTop.innerHTML = `<h2>₹${item.price}</h2>
          <div class="price-last"><p>₹${item.originalPrice}</p><span>${item.percentage}</span></div>`;
          priceDetail.appendChild(priceTop);

          const priceBottom = document.createElement("div");
          priceBottom.className = "price-btm";
          priceBottom.innerHTML = `<span>${item.deliveryStatus}  </span>`;
          priceDetail.appendChild(priceBottom);
          endTop.appendChild(priceDetail);
          const flipkartImg = document.createElement("div");
          flipkartImg.className = "flipkart-img";
          flipkartImg.innerHTML = `<img src="${item.flipkartImg}">`;

          // endTop.appendChild(priceDetail)
          endTop.appendChild(flipkartImg);

          rightEnd.appendChild(endTop);

          const offerTxt = document.createElement("div");
          offerTxt.className = "offer-txt";
          offerTxt.innerHTML = `<span>${item.offerTxt}</span>`;
          rightEnd.appendChild(offerTxt);

          const bottomSpan = document.createElement("div");
          bottomSpan.className = "btm-span";
          bottomSpan.innerHTML = item.exchangeTxt;
          rightEnd.appendChild(bottomSpan);
          cardRight.appendChild(rightEnd);

          card.appendChild(cardRight);
          cardPadding.appendChild(card);
          rightContent.appendChild(cardPadding);
        });
        addPaginationControls(productItem.length, page, perPage);
   
      }












products(data.main.mobileGrid);
});
