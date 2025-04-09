import csv from 'csv-parser'
import fs, { writeFileSync } from 'fs'
import path from 'path'
import Parser from 'rss-parser'
import { SITE_METADATA } from '~/data/site-metadata'

let parser = new Parser<{ [key: string]: any }>({
  customFields: {
    item: [
      'guid',
      'pubDate',
      'title',
      'link',
      'book_id',
      'book_image_url',
      'book_small_image_url',
      'book_medium_image_url',
      'book_large_image_url',
      'book_description',
      'author_name',
      'isbn',
      'user_name',
      'user_rating',
      'user_read_at',
      'user_date_added',
      'user_date_created',
      'user_shelves',
      'user_review',
      'average_rating',
      'book_published',
    ],
  },
})

// Removed the fetchGoodreadsBooks function entirely

const IMDB_CSV_FILE_PATH = path.join(process.cwd(), 'scripts', 'imdb-movies.csv')

// Removed the fetchImdbMovies function entirely

export async function seed() {
  // Removed calls to fetchImdbMovies and fetchGoodreadsBooks
}

seed()
