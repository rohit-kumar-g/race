import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { firestore } from "../myhelper_r/MyFirebaseConfig"; // Import Firestore instance
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import Firestore functions

const Container = styled.div`
  background: beige;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;
  overflow: auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 50px auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  max-width: 640px;
  height: 360px;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
`;

// const YouTubeEmbedder = () => {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [playlistUrl, setPlaylistUrl] = useState("");
//   const [embedUrl, setEmbedUrl] = useState(null);
//   const [savedUrls, setSavedUrls] = useState([]);

//   // Fetch existing URLs from Firestore when the component mounts
//   useEffect(() => {
//     const fetchUrls = async () => {
//       const querySnapshot = await getDocs(collection(firestore, "ytlinksw"));
//       const urls = [];
//       querySnapshot.forEach((doc) => {
//         urls.push(doc.data().url.trim());
//       });
//       setSavedUrls(urls);
//     };

//     fetchUrls();
//   }, []);

//   const handleEmbed = async (e) => {
//     e.preventDefault();
    
//     // Check if either of the URLs is empty
//     if (!videoUrl && !playlistUrl) {
//       alert("Please enter a URL.");
//       return;
//     }

//     const urlToSave = videoUrl || playlistUrl; // Choose whichever is filled

//     // Check if the URL already exists in the database
//     if (savedUrls.includes(urlToSave)) {
//       alert("This URL has already been saved.");
//       return;
//     }

//     try {
//       // Save the URL to Firestore
//       await addDoc(collection(firestore, "ytlinksw"), {
//         url: urlToSave,
//       });

//       // Add it to the local state to immediately reflect the change
//       setSavedUrls((prevUrls) => [...prevUrls, urlToSave]);

//       // If valid URL, set the embed URL
//       const isPlaylist = urlToSave.includes("playlist");
//       setEmbedUrl(
//         isPlaylist
//           ? `https://www.youtube.com/embed/videoseries?list=${new URLSearchParams(
//               new URL(urlToSave).search
//             ).get("list")}`
//           : `https://www.youtube.com/embed/${new URL(urlToSave).pathname.split("/")[2]}`
//       );
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   // Function to generate embed URL for each saved URL
//   const generateEmbedUrl = (url) => {
//     const isPlaylist = url.match(/[?&]list=([^&]+)/);
//     const videoMatch = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/);
//     return isPlaylist
//       ? `https://www.youtube.com/embed/videoseries?list=${isPlaylist[1]}`
//       : `https://www.youtube.com/embed/${videoMatch[1]}`;
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Title>Testimonials</Title>
//         <Form onSubmit={handleEmbed}>
//           <Input
//             type="text"
//             placeholder="Enter YouTube Video URL"
//             value={videoUrl}
//             onChange={(e) => setVideoUrl(e.target.value)}
//           />
//           <Input
//             type="text"
//             placeholder="Enter YouTube Playlist URL"
//             value={playlistUrl}
//             onChange={(e) => setPlaylistUrl(e.target.value)}
//           />
//           <Button type="submit">Embed</Button>
//         </Form>

//         {embedUrl && (
//           <VideoFrame
//             src={embedUrl}
//             title="YouTube Video or Playlist"
//             allowFullScreen
//           />
//         )}

//         {/* Display all saved URLs and their embed containers */}
//         <div>
//           <h1>Saved URLs:</h1>
//           {savedUrls.length > 0 ? (
//             savedUrls.map((url, index) => (
//               <div key={index}>
//                 {/* <a href={url} target="_blank" rel="noopener noreferrer">
//                   {url}
//                 </a> */}
//                 <VideoFrame
//                   src={generateEmbedUrl(url)}
//                   title={`YouTube Video or Playlist ${index + 1}`}
//                   allowFullScreen
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No saved URLs yet.</p>
//           )}
//         </div>
//       </Wrapper>
//     </Container>
//   );
// };

const YouTubeEmbedder = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [embedUrl, setEmbedUrl] = useState(null);
    const [savedUrls, setSavedUrls] = useState([]);
  
    // Fetch existing URLs from Firestore when the component mounts
    useEffect(() => {
      const fetchUrls = async () => {
        const querySnapshot = await getDocs(collection(firestore, "ytlinksw"));
        const urls = [];
        querySnapshot.forEach((doc) => {
          urls.push({ id: doc.id, url: doc.data().url.trim() });
        });
        setSavedUrls(urls);
      };
  
      fetchUrls();
    }, []);
  
    const handleEmbed = async (e) => {
      e.preventDefault();
  
      if (!videoUrl && !playlistUrl) {
        alert("Please enter a URL.");
        return;
      }
  
      const urlToSave = videoUrl || playlistUrl;
  
      if (savedUrls.some((item) => item.url === urlToSave)) {
        alert("This URL has already been saved.");
        return;
      }
  
      try {
        const docRef = await addDoc(collection(firestore, "ytlinksw"), {
          url: urlToSave,
        });
  
        setSavedUrls((prevUrls) => [
          ...prevUrls,
          { id: docRef.id, url: urlToSave },
        ]);
  
        const isPlaylist = urlToSave.includes("playlist");
        setEmbedUrl(
          isPlaylist
            ? `https://www.youtube.com/embed/videoseries?list=${new URLSearchParams(
                new URL(urlToSave).search
              ).get("list")}`
            : `https://www.youtube.com/embed/${new URL(urlToSave).pathname.split(
                "/"
              )[2]}`
        );
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };
  
    const generateEmbedUrl = (url) => {
      const isPlaylist = url.match(/[?&]list=([^&]+)/);
      const videoMatch = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/);
      return isPlaylist
        ? `https://www.youtube.com/embed/videoseries?list=${isPlaylist[1]}`
        : `https://www.youtube.com/embed/${videoMatch[1]}`;
    };
  
    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(firestore, "ytlinksw", id));
        setSavedUrls((prevUrls) => prevUrls.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };
  
    return (
      <Container>
        <Wrapper>
          <Title>Testimonials</Title>
          <Form onSubmit={handleEmbed}>
            <Input
              type="text"
              placeholder="Enter YouTube Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter YouTube Playlist URL"
              value={playlistUrl}
              onChange={(e) => setPlaylistUrl(e.target.value)}
            />
            <Button type="submit">Embed</Button>
          </Form>
  
          {embedUrl && (
            <VideoFrame
              src={embedUrl}
              title="YouTube Video or Playlist"
              allowFullScreen
            />
          )}
  
          {/* Display all saved URLs and their embed containers */}
          <div>
            <h1>Saved URLs:</h1>
            {savedUrls.length > 0 ? (
              savedUrls.map((item, index) => (
                <div key={item.id}>
                  <VideoFrame
                    src={generateEmbedUrl(item.url)}
                    title={`YouTube Video or Playlist ${index + 1}`}
                    allowFullScreen
                  />
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No saved URLs yet.</p>
            )}
          </div>
        </Wrapper>
      </Container>
    );
  };
  

export default YouTubeEmbedder;
