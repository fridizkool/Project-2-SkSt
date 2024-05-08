import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Button, Grid, GridContainer, StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Filing() {
    const { t } = useTranslation();
    const PAGES = ["intro", "w2", "1099", "misc", "review", "result"]
    const [index, setIndex] = useState(0);
    const nav = useNavigate();

    useEffect(() => {
        if (index >= 0 && index <= 5)
            nav(`/filing/${PAGES[index]}`);
    }, [index])

    function isCurrent(index: Number, page: Number) {
        if (index == page)
            return "current";
        if (index < page)
            return "incomplete";
        return "complete";
    }

    return (
        <>
            <GridContainer className=' bg-neutral-300 min-h-screen'>
                <Grid row className='padding-1'>
                    <Grid col={12}>
                        <div className='inline-flex items-center'>
                            <Button type="submit" onClick={() => { index > 0 ? setIndex(prev => prev - 1) : null }}>Back</Button>
                            <StepIndicator centered headingLevel='h4' ofText={t("of")} stepText={t('Step')} className=' bg-gradient-to-r from-neutral-300 to-neutral-300'>{/**hacky way to change the background */}
                                <StepIndicatorStep label={t("Introduction")} status={isCurrent(index, 0)} />
                                <StepIndicatorStep label={t("W2 forms")} status={isCurrent(index, 1)} />
                                <StepIndicatorStep label={t("1099 forms")} status={isCurrent(index, 2)} />
                                <StepIndicatorStep label={t("Personal information")} status={isCurrent(index, 3)} />
                                <StepIndicatorStep label={t("Review")} status={isCurrent(index, 4)} />
                                <StepIndicatorStep label={t("Tax calculations")} status={isCurrent(index, 5)} />
                            </StepIndicator>
                            <Button type="submit" onClick={() => { index < 5 ? setIndex(prev => prev + 1) : null }}>Next</Button>
                        </div>
                        <Outlet />
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}