import {useState, useEffect} from 'react';
import {firestore, storage, firestoreTimestamp} from "../firebase/config";

const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( ()=> {
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('images');

        storageRef.put(file).on('state_change', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, err => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = firestoreTimestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage;