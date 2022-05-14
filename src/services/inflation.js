import $ from "jquery";

const inflationURL = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';

export default class API {

  static calculateInflation = ({ country = 'india', start, end, amount }, setInflatedAmount) => {
    $.getJSON(inflationURL, { country, start, end, amount, format: true })
      .done(data => setInflatedAmount(data));
  }

}
