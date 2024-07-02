import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (q) {
      fetch(`/api/products?search=${q}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [q]);

  return (
    <div>
      {q && (
        <p>
          Showing results for <strong>{q}</strong>
        </p>
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
