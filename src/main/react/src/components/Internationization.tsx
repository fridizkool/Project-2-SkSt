import { LanguageSelector } from "@trussworks/react-uswds";
import i18n from "../i18n/i18next";
import { useTranslation } from "react-i18next";

export function t(translation: any)
{
    const {t} = useTranslation();
    return t(translation);
}

export function I18nButton() {
    const langs = [
        {
            attr: 'fr',
            label: 'Français',
            label_local: 'French',
            on_click: () => i18n.changeLanguage('fr')
        },
        {
            attr: 'en',
            label: 'English',
            on_click: () => i18n.changeLanguage('en')
        }
    ];
    return (
        <>
            <LanguageSelector
                className="usa-button--unstyled"
                label="Languages"
                langs={langs}
            />
        </>
    )
}