import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";
import { setUserInfo, clearUserInfo } from "../redux/reducers/userSlice";
import { setPostsInfo, clearPostsInfo } from "../redux/reducers/postsSlice";
import { addUser, getPosts, getUser } from "./firestore";
import {
  setCommentsInfo,
  clearCommentsInfo,
} from "../redux/reducers/commentsSlice";

// Функція для реєстрації користувача
export const registerDB = async ({ email, password, login, photoURL }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    await addUser(user.uid, {
      uid: user.uid,
      email: user.email,
      displayName: login,
      profilePhoto: photoURL || "",
    });
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
  }
};

// Функція для логіну користувача та збереження його в Redux
export const loginDB = async ({ email, password }, dispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user?.email || "",
      })
    );
    authStateChanged(dispatch);

    return user;
  } catch (error) {
    console.log(error);
  }
};

// Функція для логауту
export const logoutDB = async (dispatch) => {
  try {
    await signOut(auth);
    // Очистити інформацію про користувача у Redux
    dispatch(clearUserInfo());
    dispatch(clearPostsInfo());
    dispatch(clearCommentsInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// Відстеження змін у стані аутентифікації
export const authStateChanged = (dispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setUserInfo({
          ...userData,
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
    if (user) {
      const userInfo = await getPosts(user.uid);

      dispatch(
        setPostsInfo({
          ...userInfo,
        })
      );
    } else {
      dispatch(clearPostsInfo());
    }
  });
};

// Оновлення профілю користувача
export const updateUserProfile = async (update) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
