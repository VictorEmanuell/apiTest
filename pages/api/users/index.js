import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../data.json'

export default (req, res) => {

  switch(req.method){
    case 'GET':
      try {
        res.status(200).json(data)
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
      }
      break;
    default:
      res.status(405).json({statusCode: 405, message: 'Method not found'})
  }

}