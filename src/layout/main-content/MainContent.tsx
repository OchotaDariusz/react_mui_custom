import React from 'react';
import { Box, Button, Container, Stack, Tab, Typography } from '@mui/material';
import { Card } from '../../components';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

const MainContent = () => {
  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: '64px',
        justifyContent: 'center'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '100%'
        }}
      >
        <Card>
          <Box width="100%" textAlign="start">
            <Typography variant="h1">h1. Heading</Typography>
            <Typography variant="h2">h2. Heading</Typography>
            <Typography variant="h3">h3. Heading</Typography>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography variant="h5">h5. Heading</Typography>
            <Typography variant="h6">h6. Heading</Typography>
            <Typography variant="subtitle1">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2">
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body2">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="button">button text</Typography>
            <Typography variant="caption">caption text</Typography>
            <Typography variant="overline">overline text</Typography>
          </Box>
        </Card>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed.j
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        </Typography>
        <Card>
          <LabTabs />
        </Card>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Button>primary</Button>
            <Button variant="outlined">outlined</Button>
            <Button variant="contained">contained</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="secondary">secondary</Button>
            <Button color="secondary" variant="outlined">
              outlined
            </Button>
            <Button color="secondary" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">inherit</Button>
            <Button color="inherit" variant="outlined">
              outlined
            </Button>
            <Button color="inherit" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="error">error</Button>
            <Button color="error" variant="outlined">
              outlined
            </Button>
            <Button color="error" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="info">info</Button>
            <Button color="info" variant="outlined">
              outlined
            </Button>
            <Button color="info" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="success">success</Button>
            <Button color="success" variant="outlined">
              outlined
            </Button>
            <Button color="success" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="warning">warning</Button>
            <Button color="warning" variant="outlined">
              outlined
            </Button>
            <Button color="warning" variant="contained">
              contained
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="primary">primary</Button>
            <Button color="primary" variant="outlined">
              outlined
            </Button>
            <Button color="primary" variant="contained">
              contained
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainContent;
