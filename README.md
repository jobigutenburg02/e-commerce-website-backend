# My E-Commerce Website - Backend

This is the **backend** part of a full-stack e-commerce website built using **Django** and **Django Rest Framework (DRF)**. It provides a robust API to manage products, users, orders, and shopping cart functionality.

---

## Features

- RESTful API endpoints for products, categories, and orders
- JWT-based authentication for secure user login
- Admin panel for managing data
- Support for product images, pricing, and inventory
- Implemented payment gateways using PayPal and Flutterwave APIs for seamless online transactions
- Ready-to-use with React frontend

---

## Getting Started

To run this backend locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/jobigutenburg02/e-commerce-website-backend.git
```

### 2. Navigate into the backend folder

```bash
cd e-commerce-website-backend
```

### 3. Create a virtual environment and activate it

```bash
python -m venv venv
venv\Scripts\activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Apply migrations

```bash
python manage.py migrate
```

### 6. Start the development server 

```bash
python manage.py runserver
```
### 7. View the Full Website

To see the complete e-commerce experience, make sure to also run the **React frontend**:

a) Visit [my frontend repo](https://github.com/jobigutenburg02/e-commerce-website-frontend)

b) Follow the instructions in its `README.md` to install dependencies and start the app.

c) Once both the backend and frontend are running, you’ll be able to:
   - Browse products
   - Add items to cart
   - Log in/register
   - Place orders

## Technologies Used

- Python – Programming language
- Django – Web framework
- DRF – For building APIs
- SQLite – Database
- JWT Authentication – Secure user login
- Django Admin – Built-in admin interface

## API Endpoints

Below is a list of available endpoints for interacting with the backend.

### Authentication & Registration

| Endpoint                 | Method | Description                              |
|--------------------------|--------|------------------------------------------|
| `/register/`             | POST   | Register a new user                      |

**Note:** Login can be handled via Django REST Framework JWT or session authentication. Here, I am using JWT authentication.

---

### Cart Management

| Endpoint                 | Method | Description                              |
|--------------------------|--------|------------------------------------------|
| `/add_item/`             | POST   | Add product to cart                      |
| `/update_quantity/`      | PATCH  | Update quantity of item in cart          |
| `/delete_cartitem/`      | DELETE | Remove item from cart                    |
| `/get_cart`              | GET    | Retrieve full cart details               |
| `/product_in_cart`       | GET    | Check if product is in cart              |
| `/get_cart_stat`         | GET    | Get total items in cart                  |

---

### Product Endpoints

| Endpoint                     | Method | Description                          |
|------------------------------|--------|--------------------------------------|
| `/products`                  | GET    | List all products                    |
| `/product_detail/<slug>`     | GET    | Get details of a specific product    |

---

### Payment Endpoints

| Endpoint                     | Method | Description                              |
|------------------------------|--------|------------------------------------------|
|  `/initiate_payment/`        | POST   | Initiate Flutterwave payment             |
| `/payment_callback/`         | POST   | Handle Flutterwave payment confirmation  |
| `/initiate_paypal_payment/`  | POST   | Initiate PayPal payment                  |
| `/paypal_payment_callback/`  | POST   |Handle PayPal payment confirmation        |

---

### User Info

| Endpoint                    | Method | Description                              |
|-----------------------------|--------|------------------------------------------|
| `/get_username`             | GET    | Get currently logged-in user             |
| `/user_info`                | GET    | Get detailed user info                   |

## Support

For support and questions:
- Create an issue in the repository
- Contact: jbros2513@gmail.com
