# Задание 1

## Описание проекта

** В React я не шарю. смог разнести по микрофронтендам и что получилось сделать с маршрутизацией **

Проект решено разделить на следующие микрофронтенды:
1. Аутентификация и авторизация - Авторизация перед началом работы, регистрация и управление сеансами
2. Управление профилем пользоваителя - Создание профиля и его редактирование
3. Галереия фотографий - Просмотр, загрузка и удаление фотографий
4. Управление лайками - Сбор и учет лайков под фотографиями

В качестве фреймворка выберем react так как:
1. Компонентный подход к разработке - идеально подохдит для принципа микрофронтендов
2. Широкая экосистема - много библиотек, инструментов и ресурсов
3. Регулярно обновляется
4. Хорошая производительность - за счет виртуального DOM 
5. Удобство работы с состоянием - за счет таких библиотек как Redux и MobX.

В качестве подхода к реализации будем использовать webpack module так как:
1. Все компоненты будут написаны на react и не требуется поддержка нескольких фреймворков
2. Изоляция кода между микрофронтендами
3. Хорошая производительность

## Разделение на каталоги
Создадим 4 каталога для каждого из микрофронтендов
1. frontend/auth - авторизация
2. frontend/profile - создание, отображение и редактирование профиля пользователя
3. frontend/gallery - просмотр, загрузка и удаление фотографий
4. frontend/likes - управление лайками

Структура каталогов микрофронтендов осталась такая же как в исходном  фронтенде.

Точка входа - /src/index.js

Попробовал настроить маршрутизацию и добавить webpack module federation.