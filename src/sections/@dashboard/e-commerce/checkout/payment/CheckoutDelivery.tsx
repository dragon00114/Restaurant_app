// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import {
  Box,
  Card,
  // Radio,
  // Paper,
  CardProps,
  // Typography,
  CardHeader,
  CardContent,
  // FormControlLabel,
  TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

// @types
import { ICheckoutDeliveryOption } from '../../../../../@types/product';
// components
// import Iconify from '../../../../../components/iconify';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  deliveryOptions: ICheckoutDeliveryOption[];
  onApplyShipping: (shipping: number) => void;
}

export default function CheckoutDelivery({ deliveryOptions, onApplyShipping, ...other }: Props) {
  const { control } = useFormContext();
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Card {...other}>
      <CardHeader title="Delivery time selection" />

      <CardContent>
        <Controller
          name="delivery"
          control={control}
          render={({ field }) => (

            <Box
              gap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
            >
              <DateTimePicker

                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                label="Start date"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{
                      maxWidth: { md: 300 },
                    }}
                  />
                )}
              />
            </Box>
          )}
        />
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

// type DeliveryOptionProps = {
//   option: ICheckoutDeliveryOption;
//   isSelected: boolean;
// };

// function DeliveryOption({ option, isSelected }: DeliveryOptionProps) {
//   const { value, title, description } = option;

//   return (
//     <Paper
//       variant="outlined"
//       key={value}
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         transition: (theme) => theme.transitions.create('all'),
//         ...(isSelected && {
//           boxShadow: (theme) => theme.customShadows.z20,
//         }),
//       }}
//     >
//       <FormControlLabel
//         value={value}
//         control={<Radio checkedIcon={<Iconify icon="eva:checkmark-circle-2-fill" />} />}
//         label={
//           <Box sx={{ ml: 1 }}>
//             <Typography variant="subtitle2">{title}</Typography>

//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               {description}
//             </Typography>
//           </Box>
//         }
//         sx={{ py: 3, px: 2.5, flexGrow: 1, mr: 0 }}
//       />
//     </Paper>
//   );
// }
