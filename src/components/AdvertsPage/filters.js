export const initialFilter = {
	advertName: '',
	sale: false,
	buy: false,
	maxPrice: 0,
	minPrice: 0,
	//tags: [],
};

export const filterAdverts = (adverts, filterAdvert, tags) => {
	return adverts
		.filter(
			(advert) =>
				!filterAdvert.advertName ||
				filterAdvert.advertName === advert.name.toLowerCase()
		)
		.filter(
			(advert) =>
				(!filterAdvert.buy && !filterAdvert.sale) ||
				(filterAdvert.buy && filterAdvert.sale) ||
				filterAdvert.buy === !advert.sale ||
				filterAdvert.sale === advert.sale
		)
		.filter(
			(advert) =>
				(!filterAdvert.maxPrice && !filterAdvert.minPrice) ||
				filterAdvert.maxPrice < filterAdvert.minPrice ||
				(advert.price <= filterAdvert.maxPrice &&
					advert.price >= filterAdvert.minPrice)
		)
		.filter(
			(advert) => !tags.length || tags.some((tag) => advert.tags.includes(tag))
		);
};
