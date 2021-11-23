import { Stack } from '@mui/material';
import DetailsTop from './DetailsTop';
import DetailsBottom from './DetailsBottom';
import Utilities from './Utilities';

interface IDetails {
    details: {
        title: string;
        content: string;
        flair: string;
        author: string;
        domain: string;
    };
}

const Details = ({ details }: IDetails) => {
    return (
        <Stack sx={{ ml: '.5em' }}>
            <DetailsTop />
            <DetailsBottom />
            <Utilities />
        </Stack>
    );
};

export default Details;
