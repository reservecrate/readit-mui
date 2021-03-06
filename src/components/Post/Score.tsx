import { Stack, IconButton, Chip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Score = ({ score }: { score: number }) => {
    return (
        <Stack alignItems='center' sx={{ ml: '.5em' }}>
            <IconButton aria-label='upvote'>
                <ArrowUpwardIcon />
            </IconButton>
            <Chip label={score} variant='outlined' />
            <IconButton aria-label='downvote'>
                <ArrowDownwardIcon />
            </IconButton>
        </Stack>
    );
};

export default Score;
