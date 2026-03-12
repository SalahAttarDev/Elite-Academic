import renderNavigation from '../components/navigation.js';
import renderGlobalCursor from '../utils/GlobalCursor.js';
import renderAbout from './About.js';
import renderCaseStudies from './case-studies.js';
import renderChatWidget from './ChatWidget.js';
import renderContact from './Contact.js';
import renderFAQ from './FAQ.js';
import renderFooter from './Footer.js';
import renderHome from './Home.js';
import renderProcess from './Process.js';
import renderServices from './Services.js';
export default function renderAllPages() {
    return [
        renderChatWidget,
        renderGlobalCursor,
        renderNavigation,
        renderHome,
        renderAbout,
        renderCaseStudies,
        renderServices,
        renderProcess,
        renderFAQ,
        renderContact,
        renderFooter,
    ];
}
