# Лабораторная работа 10: Построение API-представлений (DRF)

## Структура проекта

Все представления вынесены в отдельный пакет `api/views/`:

1.  **Level 2: FBV (Function-Based Views)** — `api/views/fbv.py`
    - Использование декоратора `@api_view`.
    - Ручная обработка запросов (`request.data`) и формирование ответов (`Response`).
    - Методы: `product_list`, `product_detail`.

2.  **Level 3: CBV (Class-Based Views)** — `api/views/cbv.py`
    - Использование базового класса `APIView`.
    - Разделение логики по методам класса (`get`, `post`, `put`, `delete`).
    - Вспомогательный метод `get_object` для обработки 404 ошибок.

3.  **Level 4: Mixins** — `api/views/mixins.py`
    - Использование `mixins` (List, Create, Retrieve, Update, Destroy) вместе с `GenericAPIView`.
    - Минимизация кода за счет делегирования задач стандартным методам миксинов (`self.list`, `self.create` и т.д.).

4.  **Level 5: Generic Views** — `api/views/generics.py`
    - Максимальная абстракция с использованием встроенных классов `generics.ListCreateAPIView` и `generics.RetrieveUpdateDestroyAPIView`.
    - Реализованы эндпоинты как для `Product`, так и для `Category`.
    - Добавлено кастомное представление `CategoryProductsAPIView` для получения всех товаров конкретной категории.

## Как переключать реализации

Для переключения между уровнями (FBV, CBV, Mixins, Generics) используйте файл `api/views/__init__.py`. В нем достаточно закомментировать/раскомментировать соответствующие импорты.

По умолчанию (согласно заданию) активен **Level 5: Generics**.

## Endpoints:

- `/api/products/` — Просмотр списка всех товаров и создание нового товара.
- `/api/products/<id>/` — Получение, обновление и удаление конкретного товара.
- `/api/categories/` — Список категорий и создание новой.
- `/api/categories/<id>/` — Получение, обновление и удаление конкретной категории.
- `/api/categories/<id>/products/` — Список товаров внутри выбранной категории.

## Launvh

Для проверки работы API:

```powershell
cd shop-back
python manage.py runserver
```
