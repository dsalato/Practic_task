const obj = {

    "id": "97dafb61-8246-4efc-b021-03c6cdb4bb8c",
    "clientId": "97dafb61-8246-4efc-b021-03c6cdb4bb8c",
    "personId": "97dafb61-8246-4efc-b021-03c6cdb4bb8c",
    "datetimePlan": "2022-10-22T13:15:25.000Z",
    "datetimeFact": null,
    "addressId": "97dafb61-8246-4efc-b021-03c6cdb4bb8c",
    "statusId": "97dafb61-8246-4efc-b021-03c6cdb4bb8c",
    "comment": "comment",
    "shippingCost": 55,
    "amount": 56,
    "number": 3,
    "address": {
        "id": "a6fc3bbc-7796-48cc-b36f-f22129158e0b",
        "index": 234,
        "city": "city2",
        "street": "street2",
        "house": "house2"
    },
    "client": {
    "id": "ed881f3c-8bf0-4c76-bd93-5788aaa3ca84",
        "organization": "organization",
        "phone": "+78945612300",
        "email": null,
        "deleted": false
},
    "carsOrder":
    {
        "id": "c48e1600-a836-4059-8cae-5d69857682a1",
        "orderId": "46d113e9-df00-474a-bc45-4f081f01bac1",
        "carShiftId": "63080152-b799-4281-8db1-f8ea302dcc5d",
        "comment": "Позвоните",
        "carShift": {
        "id": "63080152-b799-4281-8db1-f8ea302dcc5d",
            "shiftId": "683826ff-c22b-4920-8fe5-81dde179fe2b",
            "boosterId": "3a2bab46-07ab-4fe8-92bf-7d861c850945",
            "mileageStart": 5.5,
            "mileageEnd": null,
            "datetimeStart": "2022-11-19T17:07:00.000Z",
            "datetimeEnd": null,
            "booster": {
            "id": "3a2bab46-07ab-4fe8-92bf-7d861c850945",
                "make": "benzin-DT",
                "model": "L2822",
                "number": "965",
                "status": "W",
                "deleted": false
        },
        "shift": {
            "id": "683826ff-c22b-4920-8fe5-81dde179fe2b",
                "driverId": "564bf212-08ff-4ec5-be18-74163d973862",
                "datetimeStart": "2022-10-03T17:07:25.000Z",
                "datetimeEnd": "2022-10-03T17:10:00.000Z",
                "type": "W",
                "createdAt": "2022-12-22T07:06:32.429Z",
                "updatedAt": "2022-12-22T07:06:32.429Z",
                "driver": {
                "id": "564bf212-08ff-4ec5-be18-74163d973862",
                    "lastName": "Иванов",
                    "firstName": "Дмитрий",
                    "patronymic": null,
                    "login": "testloginDima",
                    "password": "$2a$05$fK7agPEawASimqZwA9YzBuXKmqaG8s9Kd4D6tQJdlYcwrhn00Jxa6",
                    "role": "D",
                    "phone": null,
                    "email": "dima@email.ru",
                    "deleted": false
            }
        }
    }
    },
    "status": {
    "id": "7d02b0e8-0795-4743-a43c-5fc92c9fe0c3",
        "name": "N",
        "color": "#EB5757"
},
    "person": {
    "id": "87e1866b-a418-46d4-9759-df055d3744c8",
        "lastName": "personLastName",
        "firstName": "personFirstName",
        "patronymic": null,
        "clientId": "ed881f3c-8bf0-4c76-bd93-5788aaa3ca84",
        "deleted": false
},
    "productsOrder":
    {
        "id": "2ffa085d-3780-4a40-be0c-d385a5950a25",
        "productId": "3a2bab46-07ab-4fe8-92bf-7d861c850598",
        "count": 5,
        "orderId": "4ce2262a-e061-4ee9-9291-a9b21ec84bad",
        "product": {
        "id": "3a2bab46-07ab-4fe8-92bf-7d861c850598",
            "name": "name",
            "unit": "L",
            "cost": 90.9,
            "deleted": false
    }
    }
}


const address = `Город: ${obj.address.city} Улица: ${obj.address.street} Дом: ${obj.address.house}`;
console.log(address);

const purchase = `фамилия ${obj.person.lastName} имя ${obj.person.firstName} купил ${obj.productsOrder.count} штук товаров ${obj.productsOrder.product.name}`;
console.log(purchase);