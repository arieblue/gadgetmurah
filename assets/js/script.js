fetch('assets/data/produk.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(p => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <h3>${p.nama}</h3>
        <img src="${p.gambar}" width="150">
        <p>Harga: Rp ${p.harga}</p>
        <a href="https://wa.me/62xxxxxxxxxx?text=Halo,%20saya%20mau%20beli:%20${encodeURIComponent(p.nama)}" target="_blank">Beli via WhatsApp</a>
      `;
      list.appendChild(item);
    });
  });
