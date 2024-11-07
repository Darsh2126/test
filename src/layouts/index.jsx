import { AppBar, Avatar, Box, Typography } from "@mui/material"
import Home from "../page/Home"

const AppLayout = () => {
  return (
    <Box>
      <AppBar position="static" sx={{
        // height: '50px',
        p: 2
      }}>
        <Box component={'section'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Box component={'div'} display={'flex'} alignItems={'center'} gap={2} >
            <Avatar />
            <Typography variant="h4">Inventory Management System</Typography>
          </Box>
          <Box component={'div'}>Home</Box>
        </Box>
      </AppBar>
      {/* Will have layout Content we can use react-router in future */}
      <Home />
    </Box>
  )
}

export default AppLayout