import React, { useState, useEffect } from 'react';
import useData from '../../hook';
import { RenderArea, Container, Grid } from '../../styles';
import SongThumbnail from '../../Thumbnail/songThumb';

export default function Main() {
    const { setActivateNode, setActivateFunction, loadData, data } = useData();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        handleLoadData();
    }, [])

    async function handleLoadData(){
        await loadData();
        setLoading(false);
    }
    
    return (
        <RenderArea>
            <Container>
                <Grid>
                    {data.map(temp => (
                    <SongThumbnail
                        valence={temp.valence}
                        arousal={temp.arousal}
                        artist_name={temp.artist_name}
                        track_name={temp.track_name}
                        genre={temp.majority}
                    />
                    ))}  
                </Grid>
            </Container>
        </RenderArea>
    )

}