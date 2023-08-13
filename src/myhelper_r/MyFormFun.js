import { firestorage } from "../myhelper_r/MyFirebaseConfig";
export const handleChangeArray = (e, setData) => {
  const { name, value } = e.target;
  let arr = value.split(",");
  let arr2 = [];
  arr.forEach((i) => {
    i.replace(/^\s+|\s+$/gm, "");
    if (i.length > 1) {
      let text = i.charAt(0).toUpperCase() + i.slice(1);
      arr2.push(text);
    }
  });
  console.log(name + arr2);
  setData((prevData) => ({
    ...prevData,
    [name]: arr2,
  }));
};
export const handleChange = (e, setData) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
export const handleFileUpload = (
  files,
  field,
  timeer,
  setImageUploadProgress
) => {
  return new Promise(async (resolve, reject) => {
    const uploadedImages = [];
    for (const file of files) {
      // let i = 1;
      try {
        const uploadTask = firestorage
          .ref(`${timeer}/${field}/${file.name}`)
          .put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setImageUploadProgress(progress);
            // i++;
            // console.log("Uploaded", file.name, i);
          },
          (error) => {
            // console.error("Error uploading image:", error);
            reject(error);
          }
        );
        await uploadTask;
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        uploadedImages.push(downloadURL);
      } catch (error) {
        // console.error("Error uploading image:", error);
        reject(error);
      }
    }
    setImageUploadProgress(90);
    resolve(uploadedImages);
  });
};
// export const handleFileUpload = (
//   files,
//   field,
//   timeer,
//   setImageUploadProgress
// ) => {
//   return new Promise(async (resolve, reject) => {
//     const uploadedImages = [];
//     for (const file of files) {
//       try {
//         const uploadTask = firestorage
//           .ref(`${timeer}/${field}/${file.name}`)
//           .put(file);
//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             const progress = Math.round(
//               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//             // if (progressCallback) {
//             setImageUploadProgress(progress);
//             // }
//           },
//           (error) => {
//             reject(error);
//           }
//         );
//         await uploadTask;
//         const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
//         uploadedImages.push(downloadURL);
//       } catch (error) {
//         reject(error);
//       }
//     }
//     resolve(uploadedImages);
//   });
// };
