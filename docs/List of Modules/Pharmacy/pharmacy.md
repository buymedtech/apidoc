# Pharmacy Module

Provides APIs to manage pharmacy-related data.

## Module Pharmacy Documentation

The Pharmacy Module provides comprehensive features for managing pharmacy information, products, orders, shopping carts, notifications, invoices, wishlists, customer support, product reviews, and data analytics. Below is a detailed breakdown of each section:

### 1. Profile Management

Manage user personal information and shipping addresses.

#### Scope
- `pharmacy:profile:read`: Allows viewing personal information and shipping addresses.

#### APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/pharmacy/profile` | Retrieve user profile information. |
| GET | `/api/v1/pharmacy/addresses` | Retrieve the list of user's shipping addresses. |

### 2. Product Management

Search, filter, and view detailed product information.

#### Scope
- `pharmacy:product:read`: Allows searching, filtering, and viewing product information.

#### APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/pharmacy/products` | Retrieve a list of products with search parameters, pagination, and filtering. |
| GET | `/api/v1/pharmacy/categories` | Retrieve a list of product categories. |
| GET | `/api/v1/pharmacy/manufactures` | Retrieve a list of product manufacturers. |
| GET | `/api/v1/pharmacy/products/{slug}` | Retrieve product details by slug. |
| GET | `/api/v1/pharmacy/products/{id}` | Retrieve product details by ID. |
| GET | `/api/v1/pharmacy/search` | Search for products based on keywords. |

### 3. Order Management

Manage user orders.

#### Scope
- `pharmacy:order:read`: Allows viewing order history and details.

#### APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/pharmacy/orders` | Retrieve a list of the user's orders. |
| GET | `/api/v1/pharmacy/order` | Retrieve order details by ID. |

### Notes

- **Rate Limiting**: Some APIs have rate limits to ensure system performance.
- **Authentication**: All APIs require authentication via AccessToken.
- **Registering Scopes**: To register scopes for your application, follow the steps outlined in the [How to Register Scopes](../../tutorial-basics/scopes.md) guide.

For detailed API documentation, please refer to the [API Reference](../../api-reference/pharmacy/order) section. 