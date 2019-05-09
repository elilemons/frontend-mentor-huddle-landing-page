import 'reset-css';
import '../main.scss';
import '../components/header/header';
import '../components/hero/hero';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Open Sans:400,700', 'sans-serif',
      'Poppins:600', 'sans-serif'
    ]
  }
});