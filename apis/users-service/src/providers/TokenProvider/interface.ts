export default interface ITokenProvider {
  generate(id: string): string;
}
