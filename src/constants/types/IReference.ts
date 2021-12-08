interface ICurrent {
  focus(): void;
  value: any;
};

export default interface IReference {
  current: ICurrent | any;
}
