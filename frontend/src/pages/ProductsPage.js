const ProductsPage = {
  render: async () => {
    const response = await fetch("http://localhost:5000/api/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response || !response.ok) {
      return `<div>products 데이터 가져오기 에러</div>`;
    }
    const products = await response.json();
    return `
            <ul class="products">
            ${products
              .map(
                (product) => `
                <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}"/>
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
