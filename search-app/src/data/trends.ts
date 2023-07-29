import { faker } from '@faker-js/faker';

interface ProductData {
    id: string;
    name: string;
    price: string;
    wishlist: boolean;
}

export function generateFakeProducts(): ProductData[] {
    const products: ProductData[] = Array.from({ length: 10 }).map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        wishlist: false,
    }));

    return products;
}
