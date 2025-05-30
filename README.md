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

a) Visit the frontend repository:
   [E-Commerce Website Frontend](https://github.com/jobigutenburg02/e-commerce-website-frontend)

b) Follow the instructions in its `README.md` to install dependencies and start the app.

c) Once both the backend and frontend are running, you’ll be able to:
   - Browse products
   - Add items to cart
   - Log in/register
   - Place orders

## Technologies Used

1. Python – Programming language
2. Django – Web framework
3. DRF – For building APIs
4. SQLite – Database
5. JWT Authentication – Secure user login
6. Django Admin – Built-in admin interface

## API Endpoints

Below is a list of available endpoints for interacting with the backend.

### Authentication & Registration

POST `/register/` -  Register a new user

**Note:** Login can be handled via Django REST Framework JWT or session authentication.

---

### Cart Management

1. POST `/add_item/` -  Add product to cart             
2. POST `/update_quantity/` -  Update quantity of item in cart
3. POST `/delete_cartitem/` -  Remove item from cart
4. GET `/get_cart` -  Retrieve full cart details
5. GET `/product_in_cart` -  Check if product is in cart
6. GET `/get_cart_stat` -  Get total items and price

---

### Product Endpoints

1. GET `/products` -  List all products
2. GET `/product_detail/<slug>` -  Get details of a specific product

---

### Payment Endpoints

1. POST `/initiate_payment/` -  Initiate Flutterwave payment
2. POST `/payment_callback/` -  Handle Flutterwave payment confirmation
3. POST `/initiate_paypal_payment/` -  Initiate PayPal payment
4. POST `/paypal_payment_callback/` -  Handle PayPal payment confirmation

---

### User Info

1. GET `/get_username` -  Get currently logged-in user
2. GET `/user_info` -  Get detailed user info
