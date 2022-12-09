import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts
      .filter(contact => {
        const normalizedFilter = filterValue.toLowerCase();
        return contact.name.toLowerCase().includes(normalizedFilter);
      })
      .sort((f, s) => f.name.localeCompare(s.name));
  }
);
