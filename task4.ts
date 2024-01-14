type Address = {
    city: string;
    street: string;
    house: string;
}

type Person = {
    lastName: string;
    firstName: string;
}

type ProductsOrder = {
    count: number;
    product: {
        name: string
    }
}

interface MyData {
    address: Address;
    person: Person;
    productsOrder: ProductsOrder;
}

fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data: MyData) => {
        console.log(`Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`);
        console.log(`фамилия ${data.person.lastName} имя ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`);
    });
