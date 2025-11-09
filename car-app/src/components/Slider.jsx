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
      />
    </Box>
  );
}

export default DiscreteSlider
