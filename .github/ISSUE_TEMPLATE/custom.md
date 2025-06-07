---
name: 🧱 Компонент (UI)
description: Создание нового UI-компонента по FSD
title: "[Component]: Название компонента"
labels: ["frontend", "component", "FSD"]
body:
  - type: input
    id: component-name
    attributes:
      label: Название компонента
      placeholder: Например: EventCardForm
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Описание задачи
      description: Кратко опиши суть компонента, его цель и особенности
      placeholder: Напр. нужно разработать компонент формы по макету...
    validations:
      required: true

  - type: input
    id: figma-link
    attributes:
      label: Ссылка на макет в Figma
      placeholder: https://www.figma.com/...
    validations:
      required: true

  - type: input
    id: package-location
    attributes:
      label: Где разместить компонент (путь по FSD)
      placeholder: ui/[component]
    validations:
      required: true

  - type: input
    id: used-libs
    attributes:
      label: Используемые библиотеки
    validations:
      required: false

  - type: checkboxes
    id: definition-of-done
    attributes:
      label: Definition of Done
      options:
        - label: Компонент отображается в Storybook
        - label: Есть unit-тесты
        - label: Соблюдена FSD-архитектура
        - label: Прописан скриншот или пример в Storybook
        - label: Обсуждено в Jira/с командой
---


