import { Stack, Chip, Typography, Link } from '@mui/material';

interface IDetailsTop {
    flair: string;
    title: string;
    domainSrc: string;
}

const DetailsTop = () => {
    return (
        <Stack direction='row' alignItems='center'>
            <Chip label='Discussion' />
            <Typography variant='h6' sx={{ ml: '.25em' }}>
                Hello there
            </Typography>
            <Link
                href='old.reddit.com'
                underline='hover'
                sx={{ ml: '.25em', fontSize: '.75rem' }}
            >
                (self.apexlegends)
            </Link>
        </Stack>
    );
};

export default DetailsTop;
