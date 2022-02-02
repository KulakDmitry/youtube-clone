import { doc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";

export default class Collection {
  updateDocument(id, data) {
    const docRef = doc(db, this.collectionName, id);

    return updateDoc(docRef, data);
  }
}
