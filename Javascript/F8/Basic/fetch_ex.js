const API_KEY = "cbAkYfvVuovcBbRDk0PIvGDn0O0zUaGSRamjNgqbqwFI9Z6mqRNFwRsC";
const BASE_URL = "https://api.pexels.com/v1/search?query=";

// async function fetchImage(query) {
//   const response = await fetch(BASE_URL + query + "&per_page=1", {
//     headers: {
//       Authorization: API_KEY,
//     },
//   });
//   const data = await response.json();
//   return data.photos[0]?.src.medium || "https://via.placeholder.com/150";
// }

async function renderProduct(product) {
  const li = document.createElement("li");
  li.className = "product";

  const img = document.createElement("img");
  //   img.src = await fetchImage(product.name);
  img.src = product.image_url;
  img.alt = product.name;

  //   update url
  //   updateProductImage(product, img.src);

  const name = document.createElement("h2");
  name.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("p");
  price.textContent = `Price: $${product.price}`;

  li.appendChild(img);
  li.appendChild(name);
  li.appendChild(description);
  li.appendChild(price);

  return li;
}

function updateProductImage(product, img_link) {
  fetch("http://localhost:3000/products/" + product.id, {
    method: "PATCH",
    body: JSON.stringify({
      id: product.id,
      name: product.name,
      description: product.description,
      image_url: img_link,
      price: product.price,
    }),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function getProducts(url) {
  const productList = document.getElementById("products");
  fetch(url)
    .then((data) => data.json())
    .then((products) => {
      products.forEach(async (product) => {
        productList.appendChild(await renderProduct(product));
      });
    })
    .catch((err) => console.log(err));
}

getProducts("http://localhost:3000/products");
