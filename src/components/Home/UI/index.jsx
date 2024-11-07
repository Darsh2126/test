import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel } from "@mui/material"
import ItemContainer from "../../Item/container"
import SupplierContainer from "../../Supplier/container"

const HomePage = ({
  handleChange,
  labelValue
}) => {
  return (
    <Box component={'section'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
      <Box display={'flex'} gap={2} flex={1}>
        <FormControlLabel control={<Checkbox onChange={handleChange} name='item' checked={labelValue === 'item'} />} label='Item' />
        <FormControlLabel control={<Checkbox onChange={handleChange} name='supplier' checked={labelValue === 'supplier'} />} label='Supplier' />
      </Box>
      {labelValue === 'item' && <ItemContainer />}
      {labelValue === 'supplier' && <SupplierContainer />}
    </Box>
  )
}

HomePage.propTypes = {
  handleChange: PropTypes.func,
  labelValue: PropTypes.string,
}
HomePage.defaultProps = {
  handleChange: () => {},
  labelValue: 'item',
}

export default HomePage;