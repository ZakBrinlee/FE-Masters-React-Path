import { MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { useContext } from '../../context';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onRemove }: SavedColorProps) => {
  const { dispatch } = useContext()

  return (
    <article className="flex items-centeår gap-2 place-content-between">
      <ColorChangeSwatch 
        hexColor={hexColor} 
        onClick={() => dispatch({
          type: 'update-hex-color',
          payload: {
            hexColor: hexColor
          }
        })} 
      />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
