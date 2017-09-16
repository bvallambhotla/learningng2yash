import sharedRouterModuleWithProviders from '../../routing/shared/shared.routes';

import HeaderComponent from '../../components/header/header.component';
import LayoutComponent from '../../components/layout/layout.component';
import FooterComponent from '../../components/footer/footer.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import FaqComponent from '../../components/faq/faq.component';
import VacanciesComponent from '../../components/vacancies/vacancies.component';

import HomeComponent from '../../components/home/home.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';

let MODULE_DEF = {
    imports: [sharedRouterModuleWithProviders],
    declarations:
    [
        HomeComponent,
        AboutUsComponent,
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        NavigationComponent,
        FaqComponent,
        VacanciesComponent
    ],
    exports: [LayoutComponent]
};

export default MODULE_DEF;
