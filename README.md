# HNG Frontend Internship - Stage 0 & Stage 1 Task

A responsive, accessible multi-page web application built with semantic HTML,CSS, and Vanilla Javascript.

## 📒 Project Overview
This project was completed in two stages:

-**Stage 0**: Building a testable, responsive profile card component

-**Stage 1**: Adding Contact Us and About Me pages with form validation

## 🎯Stage 0: Profile Card Component

### Features Implemented

### Required Elements with Testable Attributes

-**Root container**: `data-testid="test-profile-card"`

-**Name**: `data-testid="test-user-name"`

-**Biography**: `data-testid="test-user-bio"`

-**Current time**: `data-testid="test-user-time"`

-**Avatar image**: `data-testid="test-user-avatar"`

-**Social links container**: `data-testid="test-user-social-links"`

-**Individual social links**: `data-testid="test-user-social-<network>"`

-**Hobbies list**: `data-testid="test-user-hobbies"`
-**Dislikes list**: `data-testid="test-user-dislikes"`

### Semantic HTML Structure

-`<article>` for the profile card container

-`<header>` with `<h2>` for the name section

-`<figure>` with `<img>` and proper alt text for avatar

-`<nav>` for social links navigation

-`<section>` elements for different content areas

-Proper list structures (`<ul>`,`<li>`) for hobbies and dislikes

### Layout Design

-**Mobile-first** responsive approach

-**Two-row layout** on larger screens:

  -Top row: About Me and Social links side by side
  
  -Bottom row: Hobbies and Dislikes side by side
  
-**Flexible grid system** using CSS Grid

-**Breakpoints**: Mobile(<768px), Tablet(768px+), Desktop (1024px+)

### Accessibility Features

- All interactive elements are keyboard focusable
- Clear focus indicators with proper contrast
- Semantic HTML structure for screen readers
- Proper alt text for images
- ARIA labels where appropriate

## 🚀 Stage 1: Multi-Page Application

### New Pages Added

### 1. Contact Us Page

**Features:**

- **Form with validation** for all required fields

- **Required fields with testable attributes**:

- Full name: `test-contact-name`

- Email: `test-contact-email`

- Subject: `test-contact-subject`

- Message: `test-contact-message`

- Submit button: `test-contact-submit`

- Error messages: `test-contact-error-<field>`

- Success message: `test-contact-success`

**Validation Rules:**

- All fields are required

- Email must be valid format (regex validation)

- Message must be at least 10 characters long

- Real-time validation feedback

- Success message only shows after valid submission

**Accessibility:**
- All inputs have associated `<label>` elements

- Error messages tied to inputs with `aria-describedby`

- Full keyboard navigation support

- Clear visual feedback for errors and success state

### 2. About Me Page

**Required Sections With Testable Attributes:**

- Bio: `test-about-bio`

- Goals in this program: `test-about-goals`

- Areas of low confidence: `test-about-confidence`
- Note to future self: `test-about-future-note`
- Extra thoughts: `test-about-extra`

**Semantic Structure:**

- Wrapped with `<main data-testid="test-about-page">`
- Each section uses `<section>` elements
- Proper heading hierarchy (`<h1>`,`<h2>`)
- Organized content with paragraphs and lists
- Clean, readable typography

### Navigation System

- **Sticky navigation bar** with active state indicators
- **Smooth pahge transitions** with fade animations
- **Mobile-responsive navigation**
- **Accesible keyboard navigation**

## 🛠️Technologies Used

- **HTML5**: Semantic markup, form elements, accessibility features
- **CSS3**: Flexbox, Grid, CSS Vaariables, Media Quesries, Animations
- **Javascript**: Form validation, DOM manipulation, real-time updates
- **Responsive Design**: Mobile-first approach with multiple breakpoints

## 🌠 Key Features

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Responsive typography and spacing
- Optimized for all screens

### Code Quality

- Clean, organized CSS with variables
- Modular Javascript functions
- Consistent naming conventions
- Comprehensive comments

### User Experience

- Smooth animmations and transitions
- Immediate form validation feedback
- Intuitive navigation
- Visual hierarchy and clear information architecture

Built with ♥️ By [Daniel Michael](https://twitter.com/lordugande)
