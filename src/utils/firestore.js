import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, storage } from "../../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Функція для додавання документа до колекції
export const addUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData, { merge: true });
    console.log("User added:", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const addPost = async (userId, post) => {
  try {
    const userDocRef = doc(db, "posts", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, { posts: [post] }, { merge: true });
    } else {
      await updateDoc(userDocRef, {
        posts: arrayUnion(post),
      });
    }

    console.log("Post added successfully:", post);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const addComment = async (userId, postId, comment) => {
  try {
    const userDocRef = doc(db, "comments", userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, { [postId]: [comment] }, { merge: true });
    } else {
      await updateDoc(userDocRef, {
        [postId]: arrayUnion(comment),
      });
    }

    console.log("Comment added successfully:", comment);
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

// Функція для отримання документа з колекції
export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("FetchUser data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document User!");
    return null;
  }
};

// Функція для отримання документа з колекції
export const getPosts = async (userId) => {
  const docRef = doc(db, "posts", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Fetch Post data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document Post!");
    return null;
  }
};

export const getComments = async (userId) => {
  const docRef = doc(db, "comments", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Fetch Comments data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document Comments!");
    return null;
  }
};

// Функція для запису даних користувача у Firestore
export const updateUserInFirestore = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true }); // merge: true - для оновлення існуючого документа або створення нового
    console.log("User data updated to Firestore:", uid);
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

// Функція для завантаження зображення
export const uploadImage = async (userId, file, fileName) => {
  try {
    const imageRef = ref(storage, `postPhotos/${userId}/${fileName}`);
    const result = await uploadBytes(imageRef, file);

    const imageUrl = await getImageUrl(imageRef);
    console.log("Upload result:", result);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Функція для отримання URL завантаженого зображення
export const getImageUrl = async (imageRef) => {
  const url = await getDownloadURL(imageRef);
  return url;
};
