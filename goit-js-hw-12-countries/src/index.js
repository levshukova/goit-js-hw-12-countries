import './styles.css';
import refs from './js/refs';
import { renderCountryCard, renderCountryList } from './js/render';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();
  const searchQuery = refs.searchForm.elements.query.value;
  refs.resultContainer.innerHTML = '';
  if (!searchQuery) return;
  fetchCountries(searchQuery).then(onSuccess).catch(onError);
}

function onSuccess(entry) {
  if (entry.length === 1) {
    renderCountryCard(entry);
    return;
  }
  if (entry.length <= 10) {
    renderCountryList(entry);
    return;
  }
  error({
    title: 'Too many matches found.',
    text: 'Please enter a more specific query!',
  });
}

function onError(error) {
  console.log(error);
}
