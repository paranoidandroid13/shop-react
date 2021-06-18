import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import { ReactComponent as Like } from '../assets/like.svg'
import { ReactComponent as Dislike } from '../assets/dislike.svg'
import Button from './ui/Button'

function ProductCard({ product, match }) {
  const [likes, setLikes] = useState(product.upvote_count)
  const [dislikes, setDislikes] = useState(product.downvote_count)

  const like = () => {
    setLikes(likes + 1)
  }
  const dislike = () => {
    setDislikes(dislikes + 1)
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__img}>
        <img src={product.cover_image} alt="" />
      </div>
      <div className={styles.post__text}>
        {JSON.stringify(product.id)}
        <div className={styles.post__header}>
          <div className={styles.post__title}>{product.title}</div>
          <div className={styles.post__author}>
            posted by:
            <p>{product.posted_by.email}</p>
          </div>
        </div>
        <div className={styles.post__footer}>
          <div className={styles.post__description}>{product.content}</div>
          <div className={styles.post__voites}>
            <Button onClick={like} textColor="accent">
              <Like />
              <p className={styles.post__voite}>{likes}</p>
            </Button>
            <Button onClick={dislike} textColor="accent">
              <Dislike />
              <p className={styles.post__voite}>{dislikes}</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
