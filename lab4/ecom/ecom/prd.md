Build an "Online Store" Application
Create a new Angular project from scratch that displays a catalog of real products from kaspi.kz. This task tests your ability to apply Angular concepts independently.
2.1 Project Setup
Create a new Angular project: ng new online-store
Use standalone components (Angular 17+ default) or modules — your choice
Enable routing when prompted during project creation
Verify the project runs with ng serve and opens at http://localhost:4200
2.2 Product Interface / Model
Define a TypeScript interface (e.g., product.model.ts) with the following properties for each product:
id: number — unique identifier
name: string — product name
description: string — short product description (2–3 sentences)
price: number — product price in KZT
rating: number — rating from 1 to 5 (can be decimal, e.g. 4.7)
image: string — URL or local path to the main product image
images: string[] — array of image URLs for the gallery (minimum 3)
link: string — direct URL to the product page on kaspi.kz
2.3 Products Component
Create a ProductListComponent that displays the catalog of products.
The component must render at least 10 products from kaspi.kz
Each product card must display: image, name, description, price, and rating
Use *ngFor to iterate over the products array
Display the rating visually (e.g., star icons, filled/empty stars, or a numeric badge)
Each product card should link to the real kaspi.kz product page (opens in a new tab)
The layout should be responsive — use CSS Grid or Flexbox for the product grid
2.4 Share Functionality
Each product card must have a “Share” button. When clicked, the user should be redirected to WhatsApp or Telegram with a pre-filled message containing the product link.
Use WhatsApp’s share URL: https://wa.me/?text=Check out this product: {kaspi_link}
Or Telegram’s share URL: https://t.me/share/url?url={kaspi_link}&text={product_name}
You may provide one or both options (bonus for implementing both with a dropdown or icons)
The share link must include the actual kaspi.kz URL of the specific product
Use encodeURIComponent() to safely encode URLs in the share link
2.5 Product Image Gallery (Optional / Bonus)
Implement an image gallery for each product to showcase multiple product images.
Each product should have a minimum of 3 images
Implement a gallery viewer — e.g., a carousel, lightbox, or thumbnail navigation
Clicking a thumbnail should update the main displayed image
Consider adding previous/next navigation arrows
The gallery can be displayed inline on the product card or in a modal/overlay when clicked
Requirements
Angular CLI: The project must be generated using ng new and follow standard Angular project structure
Components: Use at least 2 components (e.g., ProductListComponent and ProductCardComponent); extract reusable pieces into separate components
TypeScript: Define interfaces for data models; use strong typing throughout (avoid any)
Data Binding: Use Angular’s property binding [property], event binding (event), and interpolation {{ }} appropriately
Directives: Use structural directives (*ngFor, \*ngIf) for dynamic rendering
CSS Styling: Apply clean, scoped component styles; use Flexbox or CSS Grid for layout; the design should be visually polished and consistent
Responsiveness: The product grid should adapt to different screen sizes (desktop, tablet, mobile)
Code Quality: Use meaningful component, variable, and method names; keep components focused and concise; follow the Angular Style Guide
Real Data: All 10+ products must link to actual product pages on kaspi.kz
