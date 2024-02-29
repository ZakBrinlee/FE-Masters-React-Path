import { rgb } from "color-convert";

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgbColor: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction;

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions
) => {
  switch (action.type) {
    case 'update-hex-color':
      return {
        ...state,
        hexColor: action.payload.hexColor,
      };
    case 'update-rgb-color':
      return {
        ...state,
        hexColor: '#' + rgb.hex(action.payload.rgbColor),
      };
    default:
      return state;
  }
}