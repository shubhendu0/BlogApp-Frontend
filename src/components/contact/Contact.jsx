import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    align: center;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: black;
    fontWeight: 600;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h4">Getting in touch is easy!</Typography>    
                <Text variant="h4">
                    Reach out to me on _
                    <Link href="https://www.instagram.com/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    _ or send me an Email _  
                    <Link href="mailto:shubhendubora@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email/>
                    </Link>_.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;