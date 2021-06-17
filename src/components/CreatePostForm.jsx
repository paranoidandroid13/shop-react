import React, { useState } from 'react'
import axios from 'axios'
import styles from './CreatePostForm.module.css'

function CreatePostForm(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  return <form className={styles.form} />
}
