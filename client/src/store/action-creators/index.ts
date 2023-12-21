import { BackgroundActionCreators } from './background/background-creator';
import { ThemeCreators } from "./theme/theme-creator";
import { ModalCreators } from "./modal/modal-creator";
import { AuthActionCreators } from "./auth/auth-creator";
import { ShoesActionCreators } from './shoes/shoes-creator'

export default {
  ...ModalCreators,
  ...AuthActionCreators,
  ...ThemeCreators,
  ...BackgroundActionCreators,
  ...ShoesActionCreators
};
