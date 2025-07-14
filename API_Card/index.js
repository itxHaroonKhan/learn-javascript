







fetch("https://dummyjson.com/products?limit=20")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("productBox");
    data.products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <div class="title">${product.title}</div>
        <div class="price">$${product.price}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error fetching data:", err));






  

  fetch("https://dummyjson.com/products")
  .then(response => response.json())  
  .then(data => {
    console.log(data);  
  });

