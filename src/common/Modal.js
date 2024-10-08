import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import bad_photo1 from '../images/bad_photo1.png'
import bad_photo2 from '../images/bad_photo2.png'
import bad_photo3 from '../images/bad_photo3.png'
import bad_photo4 from '../images/bad_photo4.png'
import good_photo1 from '../images/good_photo1.png'
import good_photo2 from '../images/good_photo2.png'
import good_photo3 from '../images/good_photo3.png'
import good_photo4 from '../images/good_photo4.png'
// Style for the modal box
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%', // Set width to 80%
  bgcolor: 'background.paper',
  borderRadius: '8px', // Add some border radius for vibrancy
  boxShadow: 24,
  p: 4,
};

const modalContent = [
  // Sample image URLs for demonstration (replace with actual image URLs)
  bad_photo1,
  bad_photo2,
  bad_photo3,
  bad_photo4,
good_photo1,
good_photo2,
good_photo3,
good_photo4,
 
];

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="bg-transparent border-2 border-black rounded-full px-6 py-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-transparent hover:bg-clip-text text-transparent bg-clip-padding mt-4">
        <span className="text-1xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent" onClick={handleOpen}>
          Photo Guide
        </span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            How to Click the Correct Photo
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Left side with wrong photos */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 1 }}>
                Wrong Photos
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <img src={modalContent[0]} alt="Wrong 1" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[1]} alt="Wrong 2" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[2]} alt="Wrong 3" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[3]} alt="Wrong 4" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
              </Grid>
            </Grid>
            {/* Right side with wrong photos */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 1 }}>
                correct Photos
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <img src={modalContent[4]} alt="Wrong 5" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[5]} alt="Wrong 6" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[6]} alt="Wrong 7" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={modalContent[7]} alt="Wrong 8" style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
