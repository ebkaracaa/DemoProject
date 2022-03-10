export interface UserTokenFailResponse {
  message: string;
}

export interface UserTokenSuccessResponse {
  tokenType: string;
  accessToken: string;
}

export type AuthorityObject = {
  authority: string;
};

export interface UserDetailsSuccessResponse {
  authorities: AuthorityObject[];
  id: number;
  name: string;
  username: string;
}

export interface UserDetailsFailResponse {
  message: string;
}
