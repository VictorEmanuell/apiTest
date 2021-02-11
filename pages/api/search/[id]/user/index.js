import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../../../data.json'

export default (req, res) => {

  switch (req.method) {
    case 'GET':
      try {
        let user;
        for (let obj of data) {
          if (obj.id === parseInt(req.query.id)) {
            user = [obj]
          }
        }
        if (!user) {
          res.status(404).json({ statusCode: 404, message: 'User not found' })
        } else {
          res.status(200).json(user)
        }
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
      }
      break;
    default:
      res.status(404).json({ statusCode: 404, message: 'Method not found' })
  }

}