import { Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const styles: SxProps = {
    ml: '.5em'
};

const Utilities = () => {
    const utilitiesArr = [
        'share',
        'save',
        'hide',
        'give award',
        'report',
        'crosspost'
    ];
    return (
        <Stack direction='row' alignItems='center'>
            <Typography variant='body2'>69 comments</Typography>
            {utilitiesArr.map(utility => (
                <Typography variant='body2' color='text.secondary' sx={styles}>
                    {utility}
                </Typography>
            ))}
        </Stack>
    );
};

export default Utilities;
