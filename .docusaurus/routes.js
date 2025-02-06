import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '687'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '196'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1e0'),
            routes: [
              {
                path: '/docs/api-reference/pharmacy/order/v1.pharmacy.get-order-detail',
                component: ComponentCreator('/docs/api-reference/pharmacy/order/v1.pharmacy.get-order-detail', 'bbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-reference/pharmacy/order/v1.pharmacy.get-orders',
                component: ComponentCreator('/docs/api-reference/pharmacy/order/v1.pharmacy.get-orders', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-reference/pharmacy/product/v1.pharmacy.get-products',
                component: ComponentCreator('/docs/api-reference/pharmacy/product/v1.pharmacy.get-products', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-reference/pharmacy/profile/v1.pharmacy.get-profile',
                component: ComponentCreator('/docs/api-reference/pharmacy/profile/v1.pharmacy.get-profile', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-reference',
                component: ComponentCreator('/docs/category/api-reference', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/pharmacy-apis',
                component: ComponentCreator('/docs/category/pharmacy-apis', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/quick-start-guide',
                component: ComponentCreator('/docs/category/quick-start-guide', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/List of Modules/',
                component: ComponentCreator('/docs/List of Modules/', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/List of Modules/Pharmacy/',
                component: ComponentCreator('/docs/List of Modules/Pharmacy/', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/List of Modules/Seller/',
                component: ComponentCreator('/docs/List of Modules/Seller/', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/authentication',
                component: ComponentCreator('/docs/tutorial-basics/authentication', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/authorization',
                component: ComponentCreator('/docs/tutorial-basics/authorization', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/contact-support',
                component: ComponentCreator('/docs/tutorial-basics/contact-support', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/credentials',
                component: ComponentCreator('/docs/tutorial-basics/credentials', '4cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/getting-started',
                component: ComponentCreator('/docs/tutorial-basics/getting-started', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/open-api',
                component: ComponentCreator('/docs/tutorial-basics/open-api', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/scopes',
                component: ComponentCreator('/docs/tutorial-basics/scopes', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/service-region',
                component: ComponentCreator('/docs/tutorial-basics/service-region', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
