import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "./firebase";

const getUser = async () => {
  const users = collection(firestore, "users");
  const userSnapshot = await getDocs(users);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  return userList;
};

export { getUser };
