'use strict'
import dotenv from 'dotenv'

dotenv.config()

export default {
  key: '123456',
  port: process.env.PORT || 3000
}
