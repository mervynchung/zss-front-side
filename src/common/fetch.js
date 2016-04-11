/**
 * Created by ming on 2016/4/7.
 */
import fetch from 'qwest'

fetch.setDefaultOptions({
  dataType: 'json',
  responseType: 'auto',
});

module.exports = fetch;