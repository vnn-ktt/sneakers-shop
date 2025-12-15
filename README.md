### 👟 Vue Sneakers Shop

**Элегантный интернет-магазин кроссовок, построенный на современном стеке Vue.js.** Это pet-проект, демонстрирующий ключевые аспекты фронтенд-разработки: от отзывчивого UI/UX до работы с состоянием и имитации бэкенда.

---

## 🚀 Особенности

*   **Полный каталог товаров:** Сетка товаров с карточками, содержащими изображения, цены, названия и кнопки быстрого добавления в корзину.
*   **Умная корзина:**
    *   Добавление/удаление товаров.
    *   Динамический перерасчёт общей суммы.
    *   Отображение количества позиций в иконке корзины (badge).
*   **Избранное:** Возможность добавлять товары в список желаний с сохранением состояния.
*   **Адаптивный дизайн:** Корректное отображение на мобильных устройствах, планшетах и десктопах.
*   **Фильтрация:** Поиск товаров по названию.
*   **Чистый и современный UI:** Использование компонентов Vue, CSS Flexbox/Grid для вёрстки.
*   **Имитация бэкенда:** Работа с локальным JSON-файлом или `json-server` для эмуляции API.

---

## 🛠 Технологический стек

*   **Фреймворк:** ![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs&logoColor=fff)
*   **Состояние:** ![Pinia](https://img.shields.io/badge/Pinia-2-FFD859?logo=pinia&logoColor=000) (или Vuex)
*   **Маршрутизация:** ![Vue Router](https://img.shields.io/badge/Vue_Router-4-4FC08D?logo=vuerouter&logoColor=fff)
*   **HTTP-клиент:** ![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=fff)
*   **Стили:** ![CSS3](https://img.shields.io/badge/CSS3-%231572B6?logo=css3&logoColor=white) / ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white) (опционально)
*   **Инструменты:** ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff), ![ESLint](https://img.shields.io/badge/ESLint-8-4B32C3?logo=eslint&logoColor=white), ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=000)

---

## 📦 Структура проекта (основное)

```
vue-sneakers-shop/
├── public/
│   └── sneakers-data.json        # Локальные данные о товарах
├── src/
│   ├── assets/                   # Статические ресурсы (шрифты, глобальные стили)
│   ├── components/               !Переиспользуемые Vue-компоненты
│   │   ├── Header.vue
│   │   ├── ProductCard.vue
│   │   ├── Cart.vue
│   │   ├── CartItem.vue
│   │   └── Favorites.vue
│   ├── stores/                   !Хранилища Pinia (состояние корзины, избранного)
│   │   ├── cart.store.js
│   │   └── favorites.store.js
│   ├── views/                    !Страницы приложения
│   │   ├── HomeView.vue          !Главная страница с каталогом
│   │   └── FavoritesView.vue     !Страница с избранными товарами
│   ├── router/                   !Конфигурация маршрутизатора
│   │   └── index.js
│   ├── App.vue                   !Корневой компонент
│   └── main.ts                   !Точка входа
├── .gitignore
├── index.html
├── package.json
├── vite.config.js                !Конфигурация Vite
└── README.md
```

---

## ⚙️ Установка и запуск

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/your-username/vue-sneakers-shop.git
    cd vue-sneakers-shop
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    # или
    yarn install
    ```

3.  **Запустите сервер для разработки:**
    ```bash
    npm run dev
    # или
    yarn dev
    ```
    Приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173) (или другому, указанному в терминале).

4.  **(Опционально) Запустите mock API сервер:**
    Если данные подгружаются через `json-server`:
    ```bash
    npm run backend
    # Сервер API будет на http://localhost:3001/sneakers
    ```

5.  **Сборка для production:**
    ```bash
    npm run build
    # или
    yarn build
    ```

---

## 📸 Скриншоты

*(Здесь можно вставить реальные скриншоты проекта)*

**Главная страница с каталогом:**
!`![Главная страница](screenshot-home.png)`

**Корзина с товарами:**
!`![Корзина](screenshot-cart.png)`

---

## 📝 Планы по развитию

*   [ ] Добавить детальную страницу товара.
*   [ ] Реализовать более сложные фильтры (по бренду, цене, размеру).
*   [ ] Добавить слайдеры для изображений на карточке товара.
*   [ ] Внедрить модульные тесты (Vitest) и e2e тесты (Cypress).
*   [ ] Интеграция с настоящим бэкендом (например, на Firebase или MockAPI).
*   [ ] Добавить страницу оформления заказа с формой.

---

## 🤝 Вклад в проект

Это pet-проект, созданный для обучения, но если у вас есть идеи или вы нашли баг — feel free to open an issue или создать pull request.

1.  Сделайте fork репозитория.
2.  Создайте ветку для своей фичи (`git checkout -b feature/amazing-feature`).
3.  Закоммитьте изменения (`git commit -m 'Add some amazing feature'`).
4.  Запушьте в ветку (`git push origin feature/amazing-feature`).
5.  Откройте Pull Request.

---

## 📄 Лицензия

Распространяется под лицензией MIT. Смотрите файл `LICENSE` для подробностей.

---

## 👨‍💻 Автор

*   **Ваше Имя** – [Ваш GitHub](https://github.com/your-username)

---

*Поставьте ⭐️ на репозиторий, если проект вам понравился!*