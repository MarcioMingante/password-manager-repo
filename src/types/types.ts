export type InfoType = {
  serviceName: string
  login: string
  password: string
  url: string
};

// type DeleteBtn = {
//   removeElement: (password: string) => void;
// };

export type InfoDataType = {
  key: string
  infoData: InfoType
  trashBtn: () => void;
};
