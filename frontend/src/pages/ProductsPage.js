import axios from "axios";
const ProductsPage = {
  render: async () => {
    const response = await axios({
      url: "http://localhost:5000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    console.log(response.statusText !== "OK");
    if (!response || response.statusText !== "OK") {
      return `<div>products 데이터 가져오기 에러</div>`;
    }

    const products = response.data;
    return `
            <ul class="products">
            ${products
              .map(
                (product) => `
                <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src= "${product.image}"  alt="${product.name}"/>
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                             ${product.price} 원
                        </div>
                    </div>
                </li>
            `
              )
              .join("\n")}
        `;
  },
};

export default ProductsPage;
