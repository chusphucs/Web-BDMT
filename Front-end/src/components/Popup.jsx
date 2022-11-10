import React, { useState, useEffect } from "react";
import "./Popup.css";
import avatar_defaul from "../assets/images/avatar_defaul.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
function Popup(props) {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        console.log(selectedFile, preview);
    }
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="create-post-header">
          <h2 className="text-header">Create Post</h2>
          <button
            className="close-btn"
            onClick={() => props.setTrigger(false)}
          ></button>
          {props.children}
        </div>

        <div className="create-post-avatar">
          <img className="avatar" src={avatar_defaul} alt="" />
          <h5>Name</h5>
        </div>
        <div className="create-post-body">
          <textarea placeholder="What's on your mind?" rows="20" cols="70" >
          </textarea>
          {selectedFile &&  <img src={preview} width={450} height={200} alt=''/> }
          </div>
        <div className="div-icon">
          <h5>Add to your post</h5>
          <label className="custom-file-upload">
              <input
                type="file" 
                onChange={onSelectFile}
                className="input-file"
              />
            <FontAwesomeIcon icon={faFile} />
          </label>
        </div>
        <div >
          <button className="btn-submit">Post</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
