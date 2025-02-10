---
sidebar_position: 6
---

# How to Call an Open API


## 📋 Overview

To call an Open API on the Buymed Open Platform, you need to follow the standards and structure outlined below.

## 🏗️ Structure of an Open API

### 🔗 Domain

| Environment | Domain | Status |
|------------|---------|---------|
| Testing (Sandbox) | https://open-apis.sbx.buymed.tech | ✅ Active |
| Production (PRD) | https://open-apis.buymed.com | ✅ Active |

### 📡 Method + Path

**Supported HTTP Methods:**

| Method | Description | Example Use Case |
|--------|-------------|-----------------|
| GET | Retrieve data | Fetching a list of products or orders |
| POST | Create new data | Adding a new product or creating an order |
| PUT | Update existing data | Updating user profile or order details |
| DELETE | Delete data | Removing a product or canceling an order |

**Example Endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| GET | v1/pharmacy/profile | Retrieve the user's profile information |
| GET | v1/pharmacy/order | Retrieve a list of the user's orders |

### 📋 Headers

Required headers for all API requests:
- **X-Service-Region**: Specifies the service region (currently, only `vn` for Vietnam is supported)
- **Authorization**: Contains the authentication token in format `Bearer <AccessToken>`

:::note
To obtain an Access Token, refer to the [Authentication/Authorization](./authentication) guide.
:::

## 📤 Standard Response Format

### Response Structure
```json
{
  "status": "OK",    // Response status
  "message": "Success", // Descriptive message
  "data": [],        // Returned data (if any)
  "errorCode": ""    // Error code (if applicable)
}
```

### Common Status Values

| Status | Description |
|--------|-------------|
| OK | ✅ Success |
| ERROR | ❌ System error |
| INVALID | ⚠️ Invalid data |
| UNAUTHORIZED | 🔒 Unauthorized access |
| FORBIDDEN | 🚫 Access denied |
| EXISTED | 📝 Data already exists |
| NOT_FOUND | 🔍 Data not found |
| TOO_MANY_REQUESTS | ⏰ Request limit exceeded |

:::info
ErrorCodes are used to describe specific types of errors. Detailed information about each ErrorCode is available in the individual API documentation.
:::

## ⚡ Rate Limiting

If you exceed the API request limit, you'll receive an error response:

```json
{
  "status": "TOO_MANY_REQUESTS",
  "message": "Rate limit exceeded",
  "data": [],
  "errorCode": "RATE_LIMIT_EXCEEDED"
}
```

The `Retry-After` header will specify when you can retry the request:
```
Retry-After: Wed, 21 Oct 2023 07:28:00 GMT
```

## 🔒 IP Whitelisting

For higher rate limits or to bypass rate limiting, you can request IP whitelisting.

### How to Request

1. Email [supportbuymed@.com](mailto:supportbuymed@.com) with subject "IP Whitelisting Request"
2. Include:
   - Your API key or account ID
   - IP address(es) to whitelist
   - Reason for whitelisting

:::caution Important
- Only static IP addresses are eligible
- Approval may require additional verification
- Response time: 1-2 business days
:::

## 💡 Example

### Request
```http
GET /v1/products HTTP/1.1
Host: open-apis.buymed.com
X-Service-Region: vn
Authorization: Bearer <AccessToken>
```

### Successful Response
```json
{
  "status": "OK",
  "message": "Success",
  "data": [
    {
      "id": 1,
      "name": "Product A",
      "price": 100000
    },
    {
      "id": 2,
      "name": "Product B",
      "price": 150000
    }
  ],
  "errorCode": ""
}
```

### Error Response
```json
{
  "status": "UNAUTHORIZED",
  "message": "Access token is invalid or expired",
  "data": [],
  "errorCode": "INVALID_TOKEN"
}
```

## 🔍 Best Practices

📘 **Important Guidelines:**
- Always include required headers
- Handle rate limiting gracefully
- Implement proper error handling
- Monitor API usage
- Keep access tokens secure

---

Need help with APIs? Contact our support team at [developer@buymed.com](mailto:developer@buymed.com)