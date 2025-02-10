---
sidebar_position: 1
---

# Getting Started

## Become a Developer

Before registering your application, you'll need to become a Buymed developer:

### Create Developer Account

1. Visit [Buymed Open Platform](https://open-apps.buymed.com/)
2. Click "Create Account" button
3. Complete the registration form
4. Accept the developer agreement

:::tip Quick Start
New to Buymed Open Platform? [Create your account now →](https://open-apps.buymed.com/)
:::

## Register an Application

Follow these steps to register your application on the Buymed Open Platform:

### Step 1: Developer Account Setup

1. Access the Buymed Open Platform
2. Log in with your developer credentials
3. Navigate to the Application section

### Step 2: Create New Application

Click the "Create" button and provide the following information:

📝 **Required Details**

- Application name
- Description
- Purpose of the application

### Step 3: Select Service Region

Choose your service region for deployment:

- Vietnam (VN) - Active
- Thailand (TH) - Coming Soon
- Cambodia (KH) - Coming Soon

:::note
Each service region may have different application types available. See [Service Region Definitions](./service-region.md) for details.
:::

### Step 4: Application Review Process

After submission:

1. Application status will change to "Pending"
2. Buymed admin team will review your request
3. You'll receive notification upon approval

**Application Status Types:**

- ✅ **Active**: Application approved and operational
- ⏳ **Pending**: Under review
- ❌ **Inactive**: Application deactivated

:::tip Important Notes

- Only 1 application per API category is allowed
- Ensure all provided information is accurate
- Contact Buymed Operations Team if:
  - You need a new API category
  - Your application is pending for too long
  - You have questions about service regions
    :::

### Step 5: View Your Applications

Monitor your applications through the APPS Overview dashboard:

- Track application status
- View application details
- Manage active applications

---


## Next Steps

### Get Your API Credentials

Once your application is approved, you'll need to:

- Retrieve your Client ID and Client Secret
- Set up secure credential storage
- Learn about credential best practices

👉 [Learn more about API Credentials](./credentials)

:::tip
Make sure to review our [API Credentials Guide](./credentials) for important security best practices.
:::

### Try Our Sample Integration

This guide will help you get started with our Open API sample integration. Follow the steps below to clone the repository and run the sample code locally.

#### Prerequisites

Before you begin, ensure you have the following installed:
- [Git](https://git-scm.com/downloads)
- A modern web browser (Chrome, Firefox, Edge, etc.)

#### Clone the Repository

To get started, clone the repository from GitHub:

```sh
# Clone the repository
git clone https://github.com/buymed/open-api-integration-samples.git

# Navigate into the project directory
cd open-api-integration-samples
```

#### Setup and Run Locally

Since the repository contains only `index.html` and `config.example.js`, you can run it locally using a simple HTTP server.

#### Using Live Server (Recommended)
If you have Visual Studio Code installed, you can use the Live Server extension:

1. Open the `open-api-integration-samples` folder in VS Code.
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) if you haven't already.
3. Right-click `index.html` and select **Open with Live Server**.




Then, open `hhttp://127.0.0.1:5500/index.html` in your browser.

#### Configuration

1. Rename `config.example.js` to `config.js`
2. Open `config.js` and update with your application credentials and configuration:

```javascript
{
  // Replace these values with your application credentials from Buymed Open Platform
  OAUTH_CLIENT_ID: 'your_client_id_here',
  OAUTH_CLIENT_SECRET: 'your_client_secret_here',
  
  // Update this to your application's redirect URI
  OAUTH_REDIRECT_URI: 'http://127.0.0.1:5500',
  
  // These URLs should remain unchanged
  OAUTH_AUTH_URL: 'https://thuocsi.vn/oauth/authorize',
  OAUTH_TOKEN_URL: 'https://api.buymed.com/iam/core/v1/oauth/token',
  OAUTH_API_URL: 'https://api.thuocsi.vn/api/v1',
  
  // Use the approved scopes from your application on Buymed Open Platform
  OAUTH_SCOPE: 'pharmacy:order:read pharmacy:profile:read'
}
```

:::important
- `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET`: Get these from your application details page on Buymed Open Platform. See [API Credentials Guide](./credentials.md) for detailed instructions on obtaining and managing these credentials.
- `OAUTH_REDIRECT_URI`: Your application's callback URL
- `OAUTH_SCOPE`: Use the scopes that have been approved by admin for your application on Buymed Open Platform. You can view your approved scopes by:
  1. Log in to [Buymed Open Platform](https://open-apps.buymed.com/)
  2. Go to "Apps" section
  3. Select your application
  4. In the application details, the "Permissions" section lists all approved scopes

:::tip Security Note
Never share or expose your Client ID and Client Secret. Learn about security best practices in our [API Credentials Guide](./credentials.md#security-best-practices).
:::

---

Need technical assistance? Contact our support team at [developer@buymed.com](mailto:developer@buymed.com)