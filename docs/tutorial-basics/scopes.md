---
sidebar_position: 3
---

# Registering Scopes

## Introduction

Scopes are permission mechanisms that determine which APIs your application can access. To register scopes, select the ones that align with your application's functionality.

## Available Scopes

| Scope | Description |
|-------|-------------|
| `pharmacy:order:read` | Allows reading order information and tracking order status |
| `pharmacy:product:read` | Allows reading product information (search, filter, and categorize products) |
| `pharmacy:profile:read` | Allows reading personal information and shipping addresses |

## Understanding Scope Categories

### 🛒 Order Management
**Scope**: `pharmacy:order:read`
- View order information
- Track order status
- Access order history

### 📦 Product Management
**Scope**: `pharmacy:product:read`
- Search and filter products
- Access product categories
- View detailed product information

### 👤 Profile Management
**Scope**: `pharmacy:profile:read`
- Access user information
- View shipping addresses
- Read profile settings

## Registration Process

### Step 1: Access Scope Settings
1. Log in to [Buymed Open Platform](https://open-apps.buymed.com/)
2. Navigate to "Apps" section
3. Select your application
4. Click on "Permission"

### Step 2: Review Available Scopes
Under the "Scopes" section, you'll see scopes with their status:

- ✅ **Active**: Approved and ready to use
- ⏳ **Pending**: Awaiting approval
- ❌ **Inactive**: Not available

### Step 3: Request Scopes
1. Identify required scopes for your application
2. Click "Request Scope" for each needed scope
3. Provide justification for your request
4. Submit for review

### Step 4: Await Approval
- Monitor scope status in your dashboard
- Receive notification upon approval
- Begin using approved scopes

## Best Practices

### Requesting Scopes

:::tip Approval Tips
When requesting scopes:
- Clearly explain your use case
- Provide specific implementation details
- Demonstrate security measures
:::

### Security Considerations

:::caution Important
- Request only necessary scopes
- Regularly review scope usage
- Follow security best practices
:::

## Managing Scopes

### Adding New Scopes
You can request additional scopes as your application grows:
1. Return to Permission settings
2. Request new scopes
3. Provide updated justification

### Monitoring Usage
Regularly review your scopes to:
- Ensure all needed permissions are active
- Remove unnecessary scopes
- Maintain security compliance

## Next Steps

### Start Integration
After obtaining your scopes, you're ready to begin integration:
1. Explore our [API Documentation](/docs/api)
2. Test in our sandbox environment
3. Go live with your integration

:::tip
Make sure to implement proper authentication and follow our [API Security Guidelines](/docs/api/security).
:::

---

Need help with scopes? Contact our support team at [developer@buymed.com](mailto:developer@buymed.com) 