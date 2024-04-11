import { useTranslation, Trans } from 'react-i18next';

export function InternationalizationHello() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('hello')}</h1>
        <p>{t('greeting', { name: 'John' })}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
      </div>
    );
  }
  
