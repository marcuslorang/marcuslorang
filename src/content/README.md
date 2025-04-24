# Dates

When writing a post, you must use the ISO 8601 date format: YYYY-MM-DD (for example, 2025-04-16). This is because Zod and JavaScript expect dates in this format for validation and parsing. Other formats, such as DD/MM/YYYY or MM/DD/YYYY, are not supported for validation with Zod’s .date() or .datetime() methods
