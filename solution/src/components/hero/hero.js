import bgHeroMobile from '../../assets/images/bg-hero-mobile.svg';
import bgHeroDesktop from '../../assets/images/bg-hero-desktop.svg';
import '../hero/hero.scss';

console.log('running hero')
const heroContainer = document.querySelector('.hero__container');
if (heroContainer.offsetWidth < 750) {
  document.getElementById('hero-bg-image').style.backgroundImage = `url('${bgHeroMobile}')`;
} else {
  document.getElementById('hero-bg-image').style.backgroundImage = `url('${bgHeroDesktop}')`;
}
