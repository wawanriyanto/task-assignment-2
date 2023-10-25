import "./App.css";

function App() {
  const product = [
    {
      id: 1,
      name: "Soto Lamongan",
      price: 20000,
      description:
        "Soto Lamongan adalah hidangan tradisional Indonesia yang terbuat dari kuah gurih, daging ayam atau sapi, dan berbagai rempah-rempah. Ini adalah hidangan yang populer di Jawa Timur.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 2,
      name: "Soto Banjar",
      price: 22000,
      description:
        "Soto Banjar adalah sup khas Indonesia dari Banjarmasin, Kalimantan Selatan. Sup ini terbuat dari bumbu rempah-rempah dan berbagai bahan seperti ayam, lontong, dan lainnya.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 3,
      name: "Bebek Berkutu",
      price: 35000,
      description:
        "Bebek Berkutu adalah hidangan lezat Indonesia yang terbuat dari bebek, santan kelapa, dan berbagai rempah-rempah. Ini adalah hidangan tradisional dengan cita rasa yang unik.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 4,
      name: "Gudeg",
      price: 38000,
      description:
        "Gudeg adalah masakan Jawa dari Yogyakarta, Indonesia. Terbuat dari nangka muda, santan kelapa, dan gula aren. Gudeg adalah hidangan manis dan gurih.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 5,
      name: "Gado Gado",
      price: 20000,
      description:
        "Gado Gado adalah hidangan salad khas Indonesia dengan beragam sayuran dan saus kacang. Ini adalah hidangan lezat dan sehat.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 6,
      name: "Pecel Madiun",
      price: 25000,
      description:
        "Pecel Madiun adalah hidangan khas Jawa Timur yang terdiri dari sayuran, tahu, dan saus kacang. Rasanya lezat dan pedas.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 7,
      name: "Stroberi Soda",
      price: 28000,
      description:
        "Stroberi Soda adalah minuman berkarbonasi yang segar dengan rasa stroberi yang manis. Cocok untuk hari-hari panas.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 8,
      name: "Es Teh",
      price: 15000,
      description:
        "Es Teh adalah minuman klasik yang terbuat dari daun teh, air, dan gula. Nikmat disajikan dengan es.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 9,
      name: "Lemon Tea",
      price: 18000,
      description:
        "Lemon Tea adalah campuran segar antara teh hitam atau hijau dengan perasan lemon. Memiliki rasa yang menyegarkan.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 10,
      name: "Matcha Latte",
      price: 24000,
      description:
        "Matcha Latte adalah minuman berbasis bubuk matcha yang diaduk dengan susu. Memiliki cita rasa unik dan penuh antioksidan.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 11,
      name: "Thai Tea",
      price: 25000,
      description:
        "Thai Tea adalah minuman teh khas Thailand yang manis dan berwarna oranye. Biasanya disajikan dengan susu atau es krim.",
      count: 1,
      created_at: "2023-09-01",
    },
    {
      id: 12,
      name: "Marshmellow Hazelnut",
      price: 28000,
      description:
        "Marshmellow Hazelnut adalah minuman cokelat yang dihidangkan dengan marshmallow dan rasa hazelnut yang lezat.",
      count: 1,
      created_at: "2023-09-01",
    },
  ];
  return (
    <div className="table-container">
      <h1>Makanan & Minuman Nusantara</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Count</th>
            <th>Create_at</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.count}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
