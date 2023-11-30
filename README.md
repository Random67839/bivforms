# Bittivirta FORMS

Bittivirta forms an open source form application for displaying forms.

## What is Bittivirta forms?

Bittivirta forms is a simple form display system that can be used to display forms on websites and collect customer feedback.

## Prerequisites

- Node.js 18 or higher
- MySQL 8 or newer / MariaDB
- Nginx (Optional for full/production deployment, reverse proxy or load balancer.)
- Let's Encrypt (Optional for full/production deployment, Provision free HTTPS certifications.)

## Installation

1. Clone the repository
2. Change directory to bivforms `cd bivforms`
3. Copy `.env.example` to `.env` and fill in the required values
4. Run `npm install`
5. Run `npm run build && npm start`
6. Open `http://localhost:3000` in your browser
7. Create database tables with API call `http://localhost:3000/api/setup`
8. Create forms using SQL query. See [Form data in database](#form-data-in-database)

## Usage

To create form in current form you need to create a new form. You need to insert JSON data to the database server via SQL query.

### Form data in database

Form values in database are:

- `id` - Form id
- `name` - Form url address eg. `http://localhost:3000/form/{name}`
- `title` - Form title shown on the website
- `description` - Form description
- `fields` - Form fields in JSON format
- `publicFields` - Fields whose content is public after the form is submitted
- `expires` - Form expiration time in UNIX timestamp format

### Form fields

Supported form field types are:

- `text` - Text field
- `email` - Email field
- `number` - Number field
- `date` - Date field
- `datetime-local` - Datetime field
- `hidden` - Hidden field

For every field you can define:

- `id` - Field id (must be unique and not id), value for specific field can prefilled with URL parameter `/form?id=form&fieldId=exampleValue`, user can't change the value unless they change the URL parameter
- `type` - Field type (see above)
- `label` - Field label
- `placeholder` - Field placeholder
- `required` - Defines if the field is required
- `hidden` - Hides the field from the form
- `tc` - Enables the link for terms and conditions
- `link` - URL address for terms and conditions
- `value` - Value for hidden field (user can change this by changing the element value in the browser)
- `min` - Minimum value for number field
- `max` - Maximum value for number field
- `step` - Step value for number field
- `pattern` - Pattern for field value

Example form fields:

```json
[
  {
    "id": "name",
    "type": "text",
    "label": "Name",
    "placeholder": "Your name",
    "required": true
  },
  {
    "id": "token",
    "type": "hidden",
    "hidden": true,
    "required": true
  },
  {
    "id": "Terms & Conditions",
    "tc": true,
    "type": "hidden",
    "label": "By submitting this form, you agree to our",
    "placeholder": "Terms & Conditions",
    "link": "https://www.example.com/terms-and-conditions",
    "value": "I agree to the terms and conditions"
  }
]
```

### Public Fields

Public fields are fields that are public after the form is submitted. Public fields are defined in the form data in the database.

```json
"publicfields": ["name"]
```
