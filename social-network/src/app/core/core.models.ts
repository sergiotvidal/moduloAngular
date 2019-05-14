export interface AuthInfo {
  token: string;
  // email: string;
  expiresIn: number;
  // refreshToken: string;
  // uuid: string;
}

export interface SocialNetworkUser {
  uuid: String,
  friends: FriendsInfo[],
  avatarUrl?: String,
  fullName?: String,
  preferences: Preferences
}

export interface FriendsInfo {
  
  uuid: String,
  createdAt: Date,
  confirmedAt?: Date,
  rejectedAt?: Date,

}

export interface Preferences {
  linkedIn?: String,
  twitter?: String,
  github?: String,
  description?: String,
}