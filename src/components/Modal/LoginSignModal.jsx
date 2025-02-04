import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  Button, 
  IconButton, 
  Box, 
  Typography, 
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const GoogleIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
    >
      <path 
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
        fill="#4285F4"
      />
      <path 
        d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
        fill="#34A853"
      />
      <path 
        d="M5.84 14.11c-.22-.69-.35-1.43-.35-2.11s.13-1.42.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l2.66-2.84z" 
        fill="#FBBC05"
      />
      <path 
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" 
        fill="#EA4335"
      />
    </svg>
  );
const LoginSignModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log('Google Sign-In clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      console.log('Login submitted', formData.email);
    } else {
      // Signup logic with password confirmation
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Signup submitted', formData);
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      maxWidth={isMobile ? false : "md"}
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'black',
          maxHeight: isMobile ? '100vh' : '90vh',
          height: 'auto',
          borderRadius: isMobile ? 0 : '16px',
          overflow: 'hidden',
          width: isMobile ? '100%' : 'auto'
        }
      }}
    >
      <Box 
        display="flex" 
        flexDirection={isMobile ? 'column' : 'row'}
        height="100%"
        width="100%"
        border={isMobile ? 0 : 12}
      >
        {!isMobile && (
          <Box 
            flex={1} 
            position="relative" 
            bgcolor="black" 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            p={4}
          >
            <img 
              src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" 
              alt="Protein Corner Logo"
              style={{ 
                opacity: 0.8,
                maxWidth: '300px', 
                objectFit: 'contain',
                marginBottom: '20px'
              }}
            />
            <Typography 
              variant="h4" 
              color="white" 
              align="center" 
              gutterBottom
            >
              Welcome to Protein Corner
            </Typography>
            <Typography 
              variant="body1" 
              color="white" 
              align="center"
            >
              Fuel your fitness journey with high-quality protein supplements
              and expert nutritional guidance.
            </Typography>
          </Box>
        )}

        <Box 
          flex={1} 
          bgcolor="white" 
          p={isMobile ? 2 : 1} 
          position="relative"
          borderRadius={isMobile ? 0 : 2}
          width={isMobile ? '100%' : 'auto'}
        >
          <IconButton 
            onClick={onClose} 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8,
              color: 'black'
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogTitle>
            <Box display="flex" justifyContent="center" mb={2}>
              <Button 
                variant={isLogin ? 'contained' : 'outlined'} 
                color="success" 
                sx={{ 
                  mr: 1, 
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  padding: isMobile ? '6px 12px' : '8px 16px'
                }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </Button>
              <Button 
                variant={!isLogin ? 'contained' : 'outlined'} 
                color="success"
                sx={{ 
                  fontSize: isMobile ? '0.8rem' : '1rem',
                  padding: isMobile ? '6px 12px' : '8px 16px'
                }}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </Button>
            </Box>
          </DialogTitle>

          <DialogContent>
            <Button 
              variant="outlined" 
              color="secondary" 
              startIcon={<GoogleIcon />} 
              fullWidth 
              sx={{ 
                mb: 2,
                fontSize: isMobile ? '0.8rem' : '1rem'
              }}
              onClick={handleGoogleSignIn}
            >
              Continue with Google
            </Button>

            <Divider sx={{ mb: 2 }}>
              <Typography color="textSecondary">OR</Typography>
            </Divider>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  variant="outlined"
                  size={isMobile ? 'small' : 'medium'}
                  InputProps={{
                    sx: {
                      fontSize: isMobile ? '0.8rem' : '1rem'
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: isMobile ? '0.8rem' : '1rem'
                    }
                  }}
                />
              )}
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
                variant="outlined"
                size={isMobile ? 'small' : 'medium'}
                InputProps={{
                  sx: {
                    fontSize: isMobile ? '0.8rem' : '1rem'
                  }
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: isMobile ? '0.8rem' : '1rem'
                  }
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
                variant="outlined"
                size={isMobile ? 'small' : 'medium'}
                InputProps={{
                  sx: {
                    fontSize: isMobile ? '0.8rem' : '1rem'
                  }
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: isMobile ? '0.8rem' : '1rem'
                  }
                }}
              />
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  variant="outlined"
                  size={isMobile ? 'small' : 'medium'}
                  InputProps={{
                    sx: {
                      fontSize: isMobile ? '0.8rem' : '1rem'
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: isMobile ? '0.8rem' : '1rem'
                    }
                  }}
                />
              )}
              <Button 
                type="submit" 
                variant="contained" 
                color="success" 
                fullWidth 
                sx={{ 
                  mt: 2, 
                  py: isMobile ? 1 : 1.5,
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </form>
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginSignModal;

