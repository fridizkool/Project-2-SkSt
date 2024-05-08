import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Button, Grid, GridContainer } from '@trussworks/react-uswds';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Filing() {
    const PAGES = ["intro", "w2", "1099", "misc", "review", "result"]
    const [index, setIndex] = useState(0);
    const nav = useNavigate();

    useEffect(() => {
        nav(`/filing/${PAGES[index]}`)
    }, [index])

    return (
        <>
            {/* <div className="bg-gradient-to-r from-slate-400 to-slate-200 padding-y-3 padding-x-5 border border-base-lighter shadow-md"> */}
                <GridContainer>
                    <Grid row className='padding-1'>
                        <Grid col={12}>
                            <Button type="submit" onClick={() => {
                                //TODO check if on edges
                                setIndex(prev => prev + 1)
                                //TODO disable button until next render
                                //TODO Send message to child component to send forms
                            }}>Next</Button>
                            <Button type="submit" onClick={() => { setIndex(prev => prev - 1) }}>Back</Button>
                            <Outlet />

                        </Grid>
                    </Grid>
                </GridContainer>
            {/* </div> */}
        </>
    );
}