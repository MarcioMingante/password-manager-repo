export type InfoType = {
  serviceName: string
  login: string
  password: string
  url: string
};

export type InfoDataType = {
  key: string
  infoData: InfoType
  trashBtn: () => void
  isChecked: boolean
  handleCheck: () => void
};

export type HidePasswordType = {
  isChecked: boolean
  handleCheck: () => void
};
