# react router 2

## Small App planning

1. Break UI into component
2. Build a static version (no state)
3. Think about state management + data flow

## Real World Apps

1. Gather app requirements and features
2. Based on 1, divide app in pages

   - Think about the overall and page-level UI
   - Break the desired UI into components
   - Design and build static version (no state)

3. Divide the app into features and group them by categories
   - Think about state management and data flow for each of the categories
4. Decide on what libraries to use

## Example:

### Requirements

    1. As a user I can order on or more pizzas from a menu.
    2. As a user I do not need a user account to place an order.
    3. As a website I can display different menu's that come from an API.
    4. As a user I can add multiple pizzas to a cart before placing my order.
    5. As a user I need to provide my name, phone number and address to place the order. If possible my GPS location should also be provided.
    6. As a user I can mark my order as "priority" for an additional 20% of the total.
      - orders are made by a POST request with the user data and pizzas.
    7. As a user the payment for my order is made on delivery.
    8. As a user I can look up an earlier order based on the order id given.
    9. As a user I am able to mark an order as priority, even after the order has been placed.

### Divide in pages, features, and categories

#### Features

1. User feature
2. Menu feature
3. Cart feature
4. Order feature

#### Pages

1. Home page

   - url - /

2. Menu page

   - url - /menu

3. Cart page

   - url - /cart

4. Order page
   - urls
     - /order/new
     - /order/:id

### State management

1. User -> Global UI state
2. Menu -> Global remote state
3. Cart -> Global UI state
4. Order -> Global remote state

### Technological decisions

1. Routing: `react-router`
2. Styling: `tailwindcss`
3. Remote state management: React Router (v6.4+)
4. UI State management: Redux
