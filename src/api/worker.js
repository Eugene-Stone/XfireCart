const data = {
  categories: [
    { id: '15', name: 'Все' },
    { id: '11', name: 'комбинированный' },
    { id: '12', name: 'электро' },
    { id: '13', name: 'твердотопливный' },
    { id: '14', name: 'на газу' },
  ],
  products: [
    {
      id: '1',
      name: 'Котел XFire Premium',
      image: '/img/products/1.jpg',
      category: 'комбинированный',
      types: [{ typeName: 'на газу' }, { typeName: 'электро' }],
      power_options: ['800 Вт', '1100 Вт', '1500 Вт'],
      selected_power: '800 Вт',
      defaultPrice: 499,
      price: { '800 Вт': 499, '1100 Вт': 549, '1500 Вт': 599 },
      popularity: 95,
      rating: 4.9,
    },
    {
      id: '2',
      name: 'Котел XFire EcoPlus',
      image: '/img/products/2.jpg',
      category: 'электро',
      types: [{ typeName: 'электро' }],
      power_options: ['1100 Вт', '1500 Вт', '2000 Вт'],
      selected_power: '1100 Вт',
      defaultPrice: 420,
      price: { '1100 Вт': 420, '1500 Вт': 470, '2000 Вт': 520 },
      popularity: 88,
      rating: 4.7,
    },
    {
      id: '3',
      name: 'Котел XFire SolidMax',
      image: '/img/products/3.jpg',
      category: 'твердотопливный',
      types: [{ typeName: 'твердотопливный' }],
      power_options: ['1500 Вт', '2200 Вт'],
      selected_power: '1500 Вт',
      defaultPrice: 650,
      price: { '1500 Вт': 650, '2200 Вт': 730 },
      popularity: 74,
      rating: 4.5,
    },
    {
      id: '4',
      name: 'Котел XFire GasMaster',
      image: '/img/products/4.jpg',
      category: 'на газу',
      types: [{ typeName: 'на газу' }],
      power_options: ['800 Вт', '1100 Вт'],
      selected_power: '800 Вт',
      defaultPrice: 480,
      price: { '800 Вт': 480, '1100 Вт': 530 },
      popularity: 92,
      rating: 4.8,
    },
    {
      id: '5',
      name: 'Котел XFire Hybrid Pro',
      image: '/img/products/5.jpg',
      category: 'комбинированный',
      types: [{ typeName: 'на газу' }, { typeName: 'электро' }],
      power_options: ['1100 Вт', '1500 Вт', '2500 Вт'],
      selected_power: '1100 Вт',
      defaultPrice: 580,
      price: { '1100 Вт': 580, '1500 Вт': 640, '2500 Вт': 710 },
      popularity: 81,
      rating: 4.6,
    },
    {
      id: '6',
      name: 'Котел XFire Standard',
      image: '/img/products/6.jpg',
      category: 'на газу',
      types: [{ typeName: 'на газу' }],
      power_options: ['800 Вт', '1100 Вт', '1500 Вт'],
      selected_power: '800 Вт',
      defaultPrice: 390,
      price: { '800 Вт': 390, '1100 Вт': 435, '1500 Вт': 480 },
      popularity: 85,
      rating: 4.4,
    },
    {
      id: '7',
      name: 'Котел XFire VoltLine',
      image: '/img/products/7.jpg',
      category: 'электро',
      types: [{ typeName: 'электро' }],
      power_options: ['800 Вт', '1100 Вт'],
      selected_power: '800 Вт',
      defaultPrice: 350,
      price: { '800 Вт': 350, '1100 Вт': 395 },
      popularity: 69,
      rating: 4.2,
    },
    {
      id: '8',
      name: 'Котел XFire TermoWood',
      image: '/img/products/8.jpg',
      category: 'твердотопливный',
      types: [{ typeName: 'твердотопливный' }],
      power_options: ['1500 Вт', '3000 Вт'],
      selected_power: '1500 Вт',
      defaultPrice: 720,
      price: { '1500 Вт': 720, '3000 Вт': 850 },
      popularity: 63,
      rating: 4.3,
    },
    {
      id: '9',
      name: 'Котел XFire Optima',
      image: '/img/products/9.jpg',
      category: 'комбинированный',
      types: [{ typeName: 'на газу' }, { typeName: 'электро' }],
      power_options: ['800 Вт', '1100 Вт', '1500 Вт'],
      selected_power: '800 Вт',
      defaultPrice: 510,
      price: { '800 Вт': 510, '1100 Вт': 565, '1500 Вт': 620 },
      popularity: 78,
      rating: 4.5,
    },
    {
      id: '10',
      name: 'Котел XFire UltraVolt',
      image: '/img/products/10.jpg',
      category: 'электро',
      types: [{ typeName: 'электро' }],
      power_options: ['1500 Вт', '2200 Вт'],
      selected_power: '1500 Вт',
      defaultPrice: 460,
      price: { '1500 Вт': 460, '2200 Вт': 515 },
      popularity: 87,
      rating: 4.7,
    },
  ],
};


const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	if (request.method === "OPTIONS") {
		return new Response(null, {
			status: 204,
			headers: CORS_HEADERS,
		});
	}

	const url = new URL(request.url);
	const path = url.pathname.replace(/^\/+/, "");

	if (request.method === "GET") {
		
		if (path === "categories") {
			return jsonResponse(data.categories);
		}
	
		if (path === "products") {
			let products = [...data.products];

			const page = Number(url.searchParams.get("_page")) || 1;
			const perPage = Number(url.searchParams.get("_per_page")) || products.length;

			// ---------- Фильтрация ----------
			for (const [key, value] of url.searchParams.entries()) {
				if (key.endsWith(":eq")) {
					const field = key.replace(":eq", "");

					products = products.filter(
						(item) => String(item[field]) === value
					);
				}

				if (key.endsWith(":contains")) {
					const field = key.replace(":contains", "");

					products = products.filter((item) =>
						String(item[field]).toLowerCase().includes(value.toLowerCase())
					);
				}
			}

			// ---------- Сортировка ----------
			const sortString = url.searchParams.get("_sort");

			if (sortString) {
				const sorts = sortString.split(",");

				products.sort((a, b) => {
					for (const sort of sorts) {
						const desc = sort.startsWith("-");
						const field = desc ? sort.slice(1) : sort;

						if (a[field] < b[field]) return desc ? 1 : -1;
						if (a[field] > b[field]) return desc ? -1 : 1;
					}

					return 0;
				});
			}

			// ---------- Пагинация ----------
			const total = products.length;
			const pages = Math.ceil(total / perPage);

			const start = (page - 1) * perPage;
			const end = start + perPage;

			const result = {
				first: 1,
				prev: page > 1 ? page - 1 : null,
				next: page < pages ? page + 1 : null,
				last: pages,
				pages,
				items: total,
				data: products.slice(start, end),
			};

			return jsonResponse(result);
		}

	}

	return new Response(JSON.stringify({ message: "Not found" }), {
		status: 404,
		headers: CORS_HEADERS,
	});
}

function jsonResponse(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
			...CORS_HEADERS,
		},
	});
}
