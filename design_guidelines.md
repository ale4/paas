# Design Guidelines: AI-Powered E-Commerce Platform

## Design Approach
**Reference-Based Approach** drawing from modern e-commerce leaders:
- **Shopify**: Product grids, clean checkout flows
- **Apple Store**: Minimalist product showcases, premium feel
- **Linear**: Sharp typography, modern UI components
- **Airbnb**: Trust-building elements, card-based layouts

**Key Principles**: Clean, modern aesthetic with premium feel. AI features should feel seamless and helpful, not gimmicky. Build trust through clarity and professional polish.

## Typography System
- **Primary Font**: Inter or SF Pro Display (Google Fonts)
- **Headings**: 
  - H1: 3xl-5xl (48-64px), font-semibold
  - H2: 2xl-4xl (36-48px), font-semibold
  - H3: xl-2xl (24-32px), font-medium
- **Body**: Base-lg (16-18px), font-normal, line-height relaxed
- **UI Elements**: sm-base (14-16px), font-medium
- **Product Prices**: lg-2xl, font-bold for emphasis

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent padding: p-6 for cards, p-8 for sections, p-12 for major containers
- Gaps: gap-4 for tight groupings, gap-6 for standard grids, gap-8 for feature sections
- Margins: mt-8/mb-8 for section separation, mt-12/mb-12 for major breaks

**Grid Systems**:
- Product grids: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Feature showcases: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Container max-widths: max-w-7xl for content, max-w-6xl for text-heavy sections

## Page Structure

### Homepage
**Hero Section** (80vh):
- Large hero image showcasing premium product photography with lifestyle context
- Overlaid headline emphasizing AI-powered shopping experience
- Primary CTA with blurred background backdrop
- Subtle trust indicators (e.g., "Powered by AI • 50K+ Happy Customers")

**AI Features Showcase** (3-column grid on desktop):
- AI Personal Shopper card with chat interface preview
- Visual Search & Try-On card with upload animation
- Bundle Builder card with smart suggestions visual
Each card: icon, title, 2-3 line description, "Try it" link

**Featured Products Grid**: 4-column responsive grid with product cards

**How It Works**: 3-step visual process showing AI capabilities

**Social Proof**: Customer testimonials in 2-column layout with photos

**CTA Section**: Newsletter signup + final conversion push

### Product Catalog Page
- Sidebar filters (categories, price, features)
- Product grid with hover states showing quick-view
- AI-powered "Similar Products" suggestions
- Sticky "AI Shopper" chat button (bottom-right)

### Product Detail Page
- Large product image gallery (main + thumbnails)
- Right panel: Title, price, AI size recommendation, try-on button
- Tabs: Description, AI Suggestions, Reviews
- Bundle builder widget showing complementary products
- Sticky add-to-cart bar on scroll

### AI Personal Shopper Interface
- Slide-out panel (400px width) from right side
- Chat interface with message bubbles
- Product card suggestions embedded in chat
- Input field with attachment for visual search

### Visual Search & Try-On
- Modal overlay with camera/upload interface
- Split view: uploaded image | similar products grid
- Try-on preview with AR-style overlay
- Save/share functionality

### Bundle Builder
- Interactive canvas showing selected products
- AI suggestion cards in sidebar
- Live price calculation with discount indicator
- "Save Bundle" and "Add to Cart" actions

### Checkout Flow
- Multi-step progress indicator
- Clean form layouts with inline validation
- Fraud protection indicators (subtle trust badges)
- Payment via Stripe with card security highlights

## Component Library

**Navigation**:
- Sticky header with logo, search bar, AI chat icon, cart icon
- Mega-menu for categories with product image previews
- Breadcrumbs on detail pages

**Product Cards**:
- Image with 4:5 aspect ratio
- Title (truncate at 2 lines)
- Price with strikethrough for discounts
- Quick action buttons on hover
- AI badge for recommended items

**Buttons**:
- Primary: Solid with rounded-lg
- Secondary: Outline style
- Ghost: Text-only for tertiary actions
- Icon buttons: Circular for actions like favorite, share

**Forms**:
- Floating labels
- Clear focus states with ring-2
- Inline error messages
- Helper text in muted tone

**Modals & Overlays**:
- Backdrop blur effect
- Slide-in animations for panels
- Modal dialogs with rounded corners and shadow-2xl

**Trust Elements**:
- Security badges near payment
- Shipping guarantees
- Return policy highlights
- Customer review stars

## Animations
Use sparingly for polish:
- Smooth page transitions (200ms)
- Product image zoom on hover
- Cart icon bounce on add
- Loading states for AI processing
- Success checkmarks for completed actions

## Images
**Hero Image**: Lifestyle photography showing diverse customers using products, bright and inviting, professional photography quality

**Product Images**: Clean white backgrounds for catalog, lifestyle shots for detail pages, high-resolution, consistent lighting

**Feature Section Images**: UI mockups showing AI features in action, screenshots of chat interface, try-on demonstrations

**Trust Section**: Real customer photos, team photos if highlighting human support alongside AI

## Accessibility
- Keyboard navigation for all interactive elements
- Focus indicators with ring-2 and offset
- Alt text for all images
- ARIA labels for icon buttons
- Color contrast meeting WCAG AA standards
- Form validation with clear error messaging