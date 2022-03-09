export interface UserTokenFailResponse {
  message: string;
}
export interface UserTokenSuccessResponse {
  roleId: number;
  roleName: string;
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  accessToken: string;
}
