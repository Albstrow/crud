# Basic E-Commerce Crud Website

## Project Description
This is a basic e-commerce website with an admin panel to manage product inventory. The admin can perform full CRUD operations (Create, Read, Update, Delete) on products, including managing product names, descriptions, prices, and images. The frontend provides a user-friendly interface for customers to browse products.

## Features
- **Admin Panel**:
  - Add new products
  - Edit existing product details
  - Delete products from inventory
- **Frontend**:
  - Display products in a well-organized layout
  - Responsive UI using Tailwind CSS
- **Backend API**:
  - RESTful API built using Django Rest Framework (DRF)
  - MySQL database for storing product data

---

## Tech Stack
### Backend
- Django & Django REST Framework
- MySQL
- Pillow (for image uploads)
- CORS Headers

### Frontend
- React JS (with React Router)
- Tailwind CSS
- Axios (for API calls)


---

## Installation & Setup
### 1. Clone the Repository
```sh
https://github.com/Albstrow/crud.git
```

### 2. Backend Setup (Django)
#### Install dependencies:
```sh
cd backend
python -m venv env  # Create a virtual environment
source env/bin/activate  # Activate it (Linux/macOS)
# On Windows: env\Scripts\activate
pip install -r requirements.txt
```

#### Configure Database (MySQL)
Update `settings.py` with your MySQL database credentials:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

#### Apply Migrations & Create Superuser:
```sh
python manage.py migrate
python manage.py createsuperuser
```

#### Run Development Server:
```sh
python manage.py runserver
```

The backend will be available at **`http://127.0.0.1:8000/`**

---

### 3. Frontend Setup (React)
#### Install dependencies:
```sh
cd frontend
npm install
```

#### Start Development Server:
```sh
npm run dev
```
The frontend will be available at **`http://localhost:5173/`**

---

---

## API Endpoints
| Endpoint          | Method | Description              |
|------------------|--------|--------------------------|
| `/api/products/` | GET    | Get all products         |


---
## Live view
https://ecom-roan-five.vercel.app/

---
---
## Admin Url
https://ecom-roan-five.vercel.app/admin

---
---
## Project Screenshot 
![Screenshot 2025-02-13 at 5 19 17 PM](https://github.com/user-attachments/assets/07f847ab-9099-4084-847a-f7543aee3190)

---
## Admin Page Screenshot 
![Screenshot 2025-02-13 at 5 17 31 PM](https://github.com/user-attachments/assets/45554118-703e-4376-a01f-d3a3e864707e)
![Screenshot 2025-02-13 at 5 17 50 PM](https://github.com/user-attachments/assets/383d2d11-53ff-41be-a87c-b8c38ba16f3d)
