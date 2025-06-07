import { createEvent, createStore } from 'effector';
import React from 'react';

// Events
export const toggleModalIsOpen = createEvent();
export const setModalContent = createEvent<React.ReactNode>();

// Stores
export const $isModalOpen = createStore(false)
  .on(toggleModalIsOpen, (state) => !state);

export const $modalContent = createStore<React.ReactNode>(null)
  .on(setModalContent, (_, content) => content); 