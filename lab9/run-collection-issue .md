2026-03-30 16:22:44.836 | [30/Mar/2026 11:22:44] "GET /api/categories/ HTTP/1.1" 200 151
2026-03-30 16:22:44.916 | Not Found: /api/categories/1/
2026-03-30 16:22:44.916 | [30/Mar/2026 11:22:44] "GET /api/categories/1/ HTTP/1.1" 404 49
2026-03-30 16:22:44.988 | Not Found: /api/categories/1/products/
2026-03-30 16:22:44.989 | [30/Mar/2026 11:22:44] "GET /api/categories/1/products/ HTTP/1.1" 404 49
2026-03-30 16:22:45.072 | [30/Mar/2026 11:22:45] "POST /api/categories/ HTTP/1.1" 201 30
2026-03-30 16:22:45.137 | Not Found: /api/categories/1/
2026-03-30 16:22:45.137 | [30/Mar/2026 11:22:45] "PUT /api/categories/1/ HTTP/1.1" 404 49
2026-03-30 16:22:45.188 | Not Found: /api/categories/1/
2026-03-30 16:22:45.188 | [30/Mar/2026 11:22:45] "DELETE /api/categories/1/ HTTP/1.1" 404 49
2026-03-30 16:22:45.258 | [30/Mar/2026 11:22:45] "GET /api/products/ HTTP/1.1" 200 7580
2026-03-30 16:22:45.311 | Not Found: /api/products/1/
2026-03-30 16:22:45.311 | [30/Mar/2026 11:22:45] "GET /api/products/1/ HTTP/1.1" 404 48
2026-03-30 16:22:45.381 | Bad Request: /api/products/
2026-03-30 16:22:45.382 | [30/Mar/2026 11:22:45] "POST /api/products/ HTTP/1.1" 400 58
2026-03-30 16:22:45.461 | Not Found: /api/products/1/
2026-03-30 16:22:45.462 | [30/Mar/2026 11:22:45] "PUT /api/products/1/ HTTP/1.1" 404 48
2026-03-30 16:22:45.517 | Not Found: /api/products/1/
2026-03-30 16:22:45.517 | [30/Mar/2026 11:22:45] "DELETE /api/products/1/ HTTP/1.1" 404 48

logs froma  backend above.


{
    "detail": "No Category matches the given query."
}

{
    "detail": "No Category matches the given query."
}

{
    "detail": "No Product matches the given query."
}