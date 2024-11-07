import Item from '../UI';
import * as Yup from 'yup';

const itemInitialValue = {
  itemName: '',
  quantity: null,
  price: null,
  submissionDate: '',
};

const yupValidation = Yup.object({
  itemName: Yup.string().length(225).required()
})

const ItemContainer = () => {
  return (
    <Item />
  )
}

export default ItemContainer