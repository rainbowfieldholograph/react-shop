React-Shop

Как понятно из названия, данный репозиторий содержит в себе front-end часть простого магазина на React. Делалось for practice.

Дизайн и арихтектура были скопированы с сайта https://dismiss.store/

Используется React-Router 6 версии

-Почему без стейт менеджера?
-Изначально я планировал попрактиковать MobX, однако понял, что в данном приложении нет должного кол-ва стейтов. А значит, можно обойтись useContext (все данные о продуктах хранятся в нём). Примечение: Если в context изменить значение одного поля, повторно будут отрисованы все компоненты, работающие с полями состояния, но так как данные продуктов не будут менятся напрямую юзером, тот этот вариант я посчитал неплохим.
Данные о корзине хранятся в session storage.

Пока что нет полноценной поддержки мобильных версий layout'a.
