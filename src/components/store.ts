import { proxy } from 'valtio';

//sidebar or menu options state.
interface IStateData {
  opt: string;
  setOption: (option: string) => string;
}
const state: IStateData = proxy({
  opt: 'homepage',
  setOption: (option) => (state.opt = option),
});

//switcher state to open or close the sidebar.
interface ISwitcher {
  st: boolean;
  setTrue: () => void;
  setFalse: () => void;
  reverse: () => boolean;
}

export const switcher: ISwitcher = proxy({
  st: false,
  setTrue: () => (switcher.st = true),
  setFalse: () => (switcher.st = false),
  reverse: () => (switcher.st = !switcher.st),
});

export default state;
