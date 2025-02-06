---
sidebar_position: 2
---

# API Credentials Guide

## Understanding API Credentials

API credentials are essential for secure communication between your application and the Buymed Open Platform. This guide explains how to obtain and manage your credentials properly.

### What are API Credentials?

🔑 **Client ID (App Key)**
- A unique identifier for your application
- Required in every API request
- Helps our system identify and track your application's requests
- Example format: `buymed_app_123456789`

🔐 **Client Secret (App Secret)**
- A private authentication key
- Used to secure your API requests
- Must be kept confidential at all times
- Example format: `sk_live_abcdefghijklmnopqrstuvwxyz`

## Retrieving Your Credentials

### Automatic Generation
Your Client ID and Client Secret are automatically generated when your application is approved. To access them:

1. Log in to [Buymed Open Platform](https://open-apps.buymed.com/)
2. Go to the **Apps** section
3. Select your application
4. Click on **Settings**
5. Find your credentials in the security section

:::tip Quick Access
Bookmark the settings page for easy access to your credentials management section.
:::

## Security Best Practices

### Protecting Your Credentials

✅ **Do's:**
- Store credentials in secure environment variables
- Use secure configuration management systems
- Regularly audit your security settings
- Implement proper error handling for authentication failures

❌ **Don'ts:**
- Never share your Client Secret
- Don't store credentials in code repositories
- Avoid hardcoding credentials in your application
- Never expose credentials in client-side code

### Credential Compromise

If you suspect your credentials have been compromised:

1. Log in to your account immediately
2. Navigate to the security settings
3. Click "Regenerate Client Secret"
4. Update your application with the new credentials
5. Monitor for any unauthorized access

:::danger Important
Regenerating your Client Secret will invalidate the old one. Make sure to update your application promptly to avoid service interruption.
:::

## Using Your Credentials

### API Request Example

```javascript
const headers = {
  'Client-ID': 'your_client_id',
  'Client-Secret': 'your_client_secret',
  'Content-Type': 'application/json'
};

// Example API request
fetch('https://api.buymed.com/v1/endpoint', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
});
```

:::note
Replace `your_client_id` and `your_client_secret` with your actual credentials.
:::

## Next Steps

### Register API Scopes
Next, you'll need to:
- Choose required API scopes
- Request scope approval
- Set up proper permissions

👉 [Learn about Registering Scopes](./scopes)

:::tip
Make sure to request only the scopes your application needs for security best practices.
:::

---

Need help with your credentials? Contact our support team at [developer@buymed.com](mailto:developer@buymed.com) 