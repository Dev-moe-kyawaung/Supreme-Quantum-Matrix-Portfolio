# Supreme Quantum Portfolio API

## Introduction

Comprehensive API documentation for the Supreme Quantum Portfolio platform.

## Endpoints

### GET /api/skills
Returns list of technical skills.

### GET /api/projects
Returns featured quantum projects.

### POST /api/contact
Submit contact form data.

### GET /api/ai/query
Query the AI concierge with custom text.

## Authentication

Some endpoints require API key:
`X-API-Key: your-quantum-api-key`

## Response Format

All responses are in JSON format:
```json
{
    "success": true,
    "data": {},
    "error": null
}
