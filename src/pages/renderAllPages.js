import renderNavigation from '../components/navigation.js';
import renderGlobalCursor from '../utils/GlobalCursor.js';
import renderAbout from './About.js';
import renderContact from './Contact.js';
import renderFooter from './Footer.js';
import renderHome from './Home.js';
import renderProcess from './Process.js';
import renderServices from './Services.js';
export default function renderAllPages() {
    return [
        renderGlobalCursor,
        renderNavigation,
        renderHome,
        renderAbout,
        renderServices,  // Added
        renderProcess,
        renderContact,
        renderFooter
    ];
}
