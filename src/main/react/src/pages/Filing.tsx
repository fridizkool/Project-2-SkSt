import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Button, Grid, GridContainer } from '@trussworks/react-uswds';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Grid, GridContainer } from '@trussworks/react-uswds';
import { Outlet, useLoaderData } from 'react-router-dom';


export default function Filing() {
    const PAGES = ["intro", "w2", "1099", "misc", "review", "result"]
    const [index, setIndex] = useState(0);
    const nav = useNavigate();

    useEffect(() => {
        nav(`/filing/${PAGES[index]}`)
    }, [index])

    return (
        <>
            <GridContainer>
                <Grid row className='padding-1'>
                    <Grid col={6}>
                        <Button type="submit" onClick={() => {
                            //TODO check if on edges
                            setIndex(prev => prev + 1)
                            //TODO disable button until next render
                            //TODO Send message to child component to send forms
                            }}>Next</Button>
                        <Button type="submit" onClick={() => {setIndex(prev => prev - 1)}}>Back</Button>
                        <Outlet/>

                    </Grid>
                </Grid>
            </GridContainer>

        </>
    );
}