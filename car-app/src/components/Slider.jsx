import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export function DiscreteSlider({ options, value, onChange }) {
  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label={options.label}
        value={value !== undefined ? value : options.default_value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={options.shift_step}
        step={options.step}
        marks
        min={options.min}
        max={options.max}
        sx={{
          color: '#E90A1E', // primary color
          '& .MuiSlider-thumb': {
            backgroundColor: '#E90A1E', // primary color
            '&:hover': {
              backgroundColor: '#F57C00', // accent color on hover
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#E90A1E', // primary color
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#979797', // secondary color
          },
          '& .MuiSlider-mark': {
            backgroundColor: '#979797', // secondary color
          },
          '& .MuiSlider-markActive': {
            backgroundColor: '#E90A1E', // primary color
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#E90A1E', // primary color
            color: '#FAFAFA', // background color for text
          },
        }}
      />
    </Box>
  );
}

export default DiscreteSlider
