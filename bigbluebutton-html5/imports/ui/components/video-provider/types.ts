export type User = {
  userId: string;
  pinned: boolean;
  nameSortable: string;
  name: string;
  away: boolean;
  disconnected: boolean;
  emoji: string;
  role: string;
  avatar: string;
  color: string;
  presenter: boolean;
  clientType: string;
  raiseHand: boolean;
  isModerator: boolean;
  reactionEmoji: string;
}

interface GridVoice {
  joined: boolean;
  listenOnly: boolean;
  userId: string;
}

interface Voice extends GridVoice {
  floor: boolean;
  lastFloorTime: string;
}

export interface VideoStreamsResponse {
  user_camera: {
    streamId: string;
    user: User;
    voice?: Voice;
  }[];
}

export interface GridUser extends User {
  voice: GridVoice
}

export interface GridUsersResponse {
  user: GridUser[];
}

export interface OwnVideoStreamsResponse {
  user_camera: {
    streamId: string;
  }[];
}

export type ConnectingStream = {
  userId: string;
  stream: string;
  name: string;
  nameSortable: string;
  type: 'connecting';
};

export type Stream = {
  userId: string;
  stream: string;
  deviceId: string;
  name: string;
  nameSortable: string;
  user: User;
  floor: boolean;
  lastFloorTime: string;
  voice: Voice | undefined;
  type: 'stream';
}

export type StreamItem = Stream | ConnectingStream;
export type GridItem = GridUser & { type: 'grid' };
export type VideoItem = StreamItem | GridItem;
