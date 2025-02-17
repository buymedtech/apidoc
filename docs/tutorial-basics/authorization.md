---
sidebar_position: 4
---

# Configure Authorization

## Introduction

If your application needs to access business data, it requires authorization from the App Owner. You need to guide them through the process of logging in and authorizing using their App Owner account.

## Authorization Strategy

Buymed Open Platform uses OAuth 2.0 protocol for user authentication and provides different authorization strategies for different application categories, which are pre-defined for the application category that your application belongs to.

## Documentation on redirectUri and state in OAuth 2.0

### 1. Introduction

In the OAuth 2.0 authorization process, two of the most important parameters are redirectUri and state. They play a critical role in ensuring security, integrity, and a smooth user experience. This document provides a detailed explanation of each parameter, how to use them, and important considerations when integrating with the Buymed Open Platform.

### 2. redirectUri

#### 2.1. What is redirectUri?

The redirectUri is the URL to which the Buymed Open Platform will redirect the user after they log in and grant authorization to your application. This is where your application receives the Authorization Code or error messages (if any).

#### 2.2. Role of redirectUri

- **Receiving Authorization Code**: After the user grants authorization, Buymed Open Platform redirects them to the redirectUri with the Authorization Code
- **Security**: The redirectUri ensures that the authorization code is only sent to a registered URL, preventing it from being redirected to malicious websites
- **Handling Responses**: Your application processes the response from the redirectUri to complete the authorization process

#### 2.3. Requirements for redirectUri

- **Exact Match**: The redirectUri used in the authorization request must exactly match the value registered in your application settings on the Buymed Open Platform
- **HTTPS Required**: For security, the redirectUri must use the HTTPS protocol. If you are developing in a local environment, you may use HTTP, but this should only be temporary and not used in production
- **No Dynamic Parameters**: The redirectUri must not contain dynamic parameters (e.g., https://yourapp.com/callback?user=123). It must be a fixed URL

#### 2.4. Examples of redirectUri

**Valid:**

```
https://yourapp.com/callback
https://api.yourapp.com/oauth/callback
```

**Invalid:**

```
http://yourapp.com/callback (does not use HTTPS)
https://yourapp.com/callback?user=123 (contains dynamic parameters)
```

### 3. state

#### 3.1. What is state?

The state parameter is a random string generated by your application and included in the authorization request. After the user grants authorization, Buymed Open Platform returns this state value in the redirect response to the redirectUri.

#### 3.2. Role of state

- **CSRF Protection**: The state parameter helps protect against Cross-Site Request Forgery (CSRF) attacks by ensuring that the authorization request and redirect response belong to the same session
- **State Preservation**: The state parameter can be used to store application state information (e.g., session ID, previous URL, or any other data)

#### 3.3. How to Use state

**Generate state Value:**

```javascript
const state = generateRandomString(); // Function to generate a random string
```

**Include state in Authorization Request:**

```
https://{yourAppType}/oauth/authorize?
    client_id=YOUR_CLIENT_ID&
    redirectUri=https://yourapp.com/callback&
    responseType=code&
    scope=read_write&
    state=xyz123
```

**Verify state in the Response:**

```javascript
if (receivedState === originalState) {
  // Continue processing
} else {
  // Reject the request due to mismatched `state`
}
```

#### 3.4. Example Workflow

**Create Authorization Request:**

```
https://{yourAppType}/oauth/authorize?
    client_id=YOUR_CLIENT_ID&
    redirectUri=https://yourapp.com/callback&
    responseType=code&
    scope=read_write&
    state=abc123xyz
```

**Receive Response:**

```
GET https://yourapp.com/callback?
    code=AUTHORIZATION_CODE&
    state=abc123xyz
```

**Verify state:**

```javascript
if (receivedState === "abc123xyz") {
  // Continue processing
} else {
  // Reject the request
}
```

### 4. Summary

**redirectUri:**

- The URL where the response is sent after authorization
- Must exactly match the registered value and use HTTPS
- Ensures security and integrity in the authorization process

**state:**

- A random and unique string for each authorization request
- Protects against CSRF attacks and preserves application state
- Must be carefully verified in the response

### 5. Important Notes

**Security:**

- Always use HTTPS for redirectUri
- Generate random and unique state values

**Error Handling:**

- Verify the state value and handle errors appropriately

## Official References

- [RFC 6749 - OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)

---

Need help with authorization? Contact our support team at [developer@buymed.com](mailto:developer@buymed.com)
