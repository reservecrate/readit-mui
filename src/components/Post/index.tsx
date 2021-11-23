import { Grid, Card, Stack } from '@mui/material';
import Score from './Score';
import Thumbnail from './Thumbnail';
import Details from './Details';

interface IPost {
    title: string;
    content: string;
    flair: string;
    author: string;
    domain: string;
    score: number;
}

const Post = ({ post }: { post: IPost }) => {
    const { title, content, flair, author, domain, score } = post;
    return (
        <Grid item>
            <Card>
                <Stack direction='row' alignItems='center'>
                    <Score score={score} />
                    <Thumbnail />
                    <Details
                        details={{title, content, flair, author, domain}}
                    />
                </Stack>
            </Card>
        </Grid>
    );
};

export default Post;
