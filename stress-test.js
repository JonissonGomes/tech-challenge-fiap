import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const url = 'http://localhost:3000/api/products';
  const res = http.get(url);

  console.log(`Request to ${url} returned status: ${res.status}`); // Loga o status da resposta

  if (res.status !== 200) {
    console.error(`Error: ${res.status} - ${res.body}`);
  }

  sleep(2);
}
