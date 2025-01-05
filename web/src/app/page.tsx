'use client';

/**
 * Serves the Home page
 *
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box, Button, Card, CardActions, CardContent, Divider,Typography } from '@mui/material';
import { UIMachineActorContext } from 'Entain/app/state';
import { enjoyTranslation, goToMoviesTranslation,noTimeInfoTranslation, welcomeTranslation } from 'Entain/translations';
import Image from 'next/image';
//#endregion

const Home = () => {
  const language = UIMachineActorContext.useSelector(store => store.context.language);

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width={ 1 } height='80vh'>
      <Image alt='Bomdisoft logo' src='/bomdisoft-logo.png' height={ 80 } width={ 80 } style={ { marginBottom: 20 } } priority />
      <Typography variant='h2' gutterBottom>{ welcomeTranslation[language] }</Typography>
      <Card sx={ { maxWidth: 500, mx: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
        <CardContent sx={ { padding: 2, justifyContent: 'center', alignItems: 'center' } }>
          <Typography variant='body1' mb={ 2 }>{ noTimeInfoTranslation[language] }</Typography>
          <Typography variant='h6'>{ enjoyTranslation[language] } 🎉</Typography>
        </CardContent>
        <Divider />
        <CardActions sx={ { padding: 2, justifyContent: 'flex-end' } }>
          <Button variant='contained' color='primary' href='/movies' size='small'>{ goToMoviesTranslation[language] }</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Home;
