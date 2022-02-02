import { arrayRemove, arrayUnion } from "firebase/firestore";
import Collection from "./collection";

export class UsersCollection extends Collection {
  constructor() {
    super();

    this.collectionName = "users";
  }

  followUser(usernameToFollow, currentUsername) {
    return this.updateDocument(usernameToFollow, {
      followers: arrayUnion(currentUsername),
    });
  }

  unfollowUser(usernameToUnfollow, currentUsername) {
    return this.updateDocument(usernameToUnfollow, {
      followers: arrayRemove(currentUsername),
    });
  }

  like(usernameToLike, currentUsername) {
    return this.updateDocument(usernameToLike, {
      likedVideos: arrayUnion(currentUsername),
    });
  }

  unlike(usernameToUnlike, currentUsername) {
    return this.updateDocument(usernameToUnlike, {
      likedVideos: arrayRemove(currentUsername),
    });
  }
}

const usersCollection = new UsersCollection();

export default usersCollection;
