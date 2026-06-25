# XfireCart

XfireCart - это одностраничное приложение (SPA) для интернет-магазина, разработанное с использованием React, TypeScript, Redux Toolkit и React Router DOM. Проект включает в себя корзину покупок, фильтрацию и сортировку товаров, а также имитацию получения данных с сервера.
### Demo - https://eugene-stone.github.io/XfireCart


## Технологии

*   **React:** Библиотека для создания пользовательских интерфейсов.
*   **TypeScript:** Строгая типизация для повышения надежности кода.
*   **Redux Toolkit:** Для управления состоянием приложения, включая данные о продуктах, категориях и корзине.
*   **React Router DOM:** Для маршрутизации в приложении.
*   **SCSS:** Препроцессор CSS для стилизации.
*   **JSON Server:** Для имитации API и работы с данными о продуктах и категориях.

## Структура проекта

Проект имеет следующую структуру директорий:

```
XfireCart/
├── public/
├── src/
│   ├── api/                  // Модули для взаимодействия с API
│   │   └── request.ts
│   ├── components/           // Переиспользуемые компоненты UI
│   │   ├── Filter.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderSearch.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   └── Sort.tsx
│   ├── context/              // React Context API (используется для продуктов)
│   │   └── ProductsContext/
│   │       ├── ProductsContext.tsx
│   │       └── useProductsContext.ts
│   ├── hooks/                // Пользовательские хуки
│   │   ├── useCategories.ts
│   │   ├── useDebounce.ts
│   │   ├── useProducts.ts
│   │   └── useProductsFilter.ts
│   ├── pages/                // Страницы приложения
│   │   ├── Cart.tsx
│   │   ├── Home.tsx
│   │   └── NotFoundPage.tsx
│   ├── redux/                // Управление состоянием с Redux Toolkit
│   │   ├── hooks.ts
│   │   ├── store.ts
│   │   └── slices/           // Срезы Redux
│   │       ├── cartSlice.ts
│   │       ├── categoriesSlice.ts
│   │       ├── categoriesThunk.ts
│   │       ├── productsSlice.ts
│   │       └── productsThunk.ts
│   ├── styles/               // SCSS стили
│   │   ├── _fonts.scss
│   │   ├── _media.scss
│   │   ├── _variables.scss
│   │   ├── app.scss
│   │   ├── components/       // Стили для компонентов
│   │   └── libs/             // Библиотечные стили (например, normalize.scss)
│   ├── App.tsx               // Главный компонент приложения
│   ├── main.tsx              // Точка входа в приложение
│   └── types.ts              // Определения типов TypeScript

