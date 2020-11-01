import refs from '../js/refs';
import countryTmpl from '../templates/countryTmpl.hbs';
import listTmpl from '../templates/listTmpl.hbs';

function renderCountryCard(country) {
  const markup = countryTmpl(country);
  refs.resultContainer.innerHTML = markup;
}
function renderCountryList(list) {
  const markup = listTmpl(list);
  refs.resultContainer.innerHTML = markup;
}

export { renderCountryCard, renderCountryList };
