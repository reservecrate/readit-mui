import { Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import styled from '@mui/system/styled';

const UserFlairImg = styled('img')({
    maxWidth: '1em'
});
const styles: SxProps = {
    ml: '.25em'
};

const DetailsBottom = () => {
    return (
        <Stack direction='row' alignItems='center'>
            <Typography
                variant='body2'
                sx={{ ...styles, color: 'text.secondary' }}
            >
                submitted 2 hours ago by{' '}
            </Typography>
            <Typography variant='body2' color='secondary' component='span' sx={styles}>
                reservecrate
            </Typography>
            <UserFlairImg
                src='https://emoji.redditmedia.com/k858seek09y31_t5_rgzzt/Nessy'
                alt='user flair'
                sx={styles}
            />
        </Stack>
    );
};

export default DetailsBottom;
